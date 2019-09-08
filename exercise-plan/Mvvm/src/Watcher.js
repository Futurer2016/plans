class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;

    this.value = this.get();
  }
  getVal(vm, expr) {
    let value = expr.split('.').reduce((pre, next) => {
      return pre[next];
    }, vm.$data);
    return value;
  }
  get() {
    Dep.target = this;
    let value = this.getVal(this.vm, this.expr);
    Dep.target = null;
    return value;
  }
  update() {
    let newVal = this.getVal(this.vm, this.expr);
    let oldVal = this.value;
    if(newVal !== oldVal) {
      this.cb(newVal);
    }
  }
}