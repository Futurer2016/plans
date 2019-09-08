class Observer {
  constructor(data) {
    this.observe(data);
  }
  // 将这个data原有的属性全部劫持
  observe(data) {
    if(! data || typeof data !== 'object') {
      return;
    }
    Object.keys(data).forEach((key) => {
      let value = data[key];
      this.defineReactive(data, key, value);
      // 深度劫持
      this.observe(value);
    });
  }
  defineReactive(obj, key, value) {
    let _this = this;
    let dep = new Dep();
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      get() {
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set(newVal) {
        if(newVal === value) {
          return;
        }
        if(typeof newVal == 'object') {
          // 新的值是对象，继续劫持
          _this.observe(newVal);
        }
        value = newVal;
        // 通知所有人，数据更新了
        dep.notify();
      }
    });
  }
}

class Dep {
  constructor() {
    // 订阅的数组
    this.subs = [];
  }
  addSub(watcher) {
    this.subs.push(watcher);
  }
  notify() {
    this.subs.forEach((watcher) => watcher.update());
  }
}