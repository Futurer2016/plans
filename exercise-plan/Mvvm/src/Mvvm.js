class Mvvm {
  constructor(options) {
    this.$el = options.el;
    this.$data = options.data instanceof Function? options.data(): options.data;
    if(this.$el) {
      // 数据劫持
      new Observer(this.$data);
      this.proxyData(this.$data);
      // 编译
      new Compile(this, this.$el);
    }
  }
  proxyData(data) {
    Object.keys(data).forEach(key => {
      Object.defineProperty(this, key, {
        get() {
          return data[key];
        },
        set(newVal) {
          data[key] = newVal;
        }
      });
    });
    
  }
}