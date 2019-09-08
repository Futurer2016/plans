class Compile {
  constructor(vm, el) {
    this.vm = vm;
    this.el = this.isDomElement(el)? el: document.querySelector(el);
    if(this.el) {
      // 1. 将node节点移入内存中
      let fragment = this.node2fragment(this.el);
      // 2. 编译 提取想要的元素节点 v-model 和文本节点 {{}}
      this.compile(fragment);
      // 3. 把编译好的fragment重新插入到dom中
      this.el.appendChild(fragment);
    }
  }
  // 辅助方法
  isDomElement(el) {
    return el.nodeType === 1;
  }
  isDirective(attr) {
    return attr.startsWith('v-');
  }

  // 核心方法
  node2fragment(el) {
    var fragment = document.createDocumentFragment();
    var firstChild;
    while(firstChild = el.firstChild) {
      fragment.append(firstChild);
    }
    return fragment;
  }
  compile(fragment) {
    var childNodes = fragment.childNodes;
    childNodes.forEach(node => {
      if(this.isDomElement(node)) {
        // 是元素节点
        this.compileElement(node);
        // 深度编译
        this.compile(node);
      }
      else {
        // 是文本节点
        this.compileText(node);
      }
    });
  }
  // <input type="text" v-model="message">
  compileElement(node) {
    let attrs = node.attributes;
    Array.from(attrs).forEach(attr => {
      let attrName = attr.name;
      if(this.isDirective(attrName)) {
        let type = attrName.slice(2);
        var expr = attr.value;
        node.removeAttribute(attrName);
        CompileUtils[type](node, this.vm, expr);
      }
    });
  }
  // {{ message }} {{  message2 }}
  compileText(node) {
    let expr =  node.textContent;
    let reg = /\{\{([^}]+)\}\}/g;
    if(reg.test(expr)) {
      CompileUtils['text'](node, this.vm, expr);
    }
  }
}
CompileUtils = {
  getVal(vm, expr) {
    let value = expr.split('.').reduce((pre, next) => {
      return pre[next];
    }, vm.$data);
    return value;
  },
  // expr >>>>    message.a.b.c
  setVal(vm, expr, value) {
    expr = expr.split('.');
    expr.reduce((prev, next, index) => {
      if(index == expr.length - 1) {
        return prev[next] = value;
      }
      return prev[next];
    }, vm.$data);
  },
  getTextVal(vm, expr) {
    return this.eachVal(vm, expr, (vm, expr) => {
      return this.getVal(vm, expr);
    });
  },
  eachVal(vm, expr, cb) {
    let reg = /\{\{([^}]+)\}\}/g;
    return expr.replace(reg, (...arguments) => {
      return cb(vm, arguments[1].trim());
    });
  },
  // 文本处理
  text(node, vm, expr) {
    let updateFn = this.updater['updateText'];

    this.eachVal(vm, expr, (vm, expr1) => {
      new Watcher(vm, expr1, newVal => {
        updateFn && updateFn(node, this.getTextVal(vm, expr));
      });
    });
    
    let value = this.getTextVal(vm, expr);
    updateFn(node, value);
  },
  // 元素处理
  model(node, vm, expr) {
    let updateFn = this.updater['updateModel'];
    new Watcher(vm, expr, newVal => {
      updateFn && updateFn(node, newVal);
    });
    node.addEventListener('input', (e) => {
      let newVal = e.target.value;
      this.setVal(vm, expr, newVal);
    });
    let value = this.getVal(vm, expr);
    updateFn && updateFn(node, value);
  },
  updater: {
    updateText(node, value) {
      node.textContent = value;
    },
    updateModel(node, value) {
      node.value = value;
    }
  }
};