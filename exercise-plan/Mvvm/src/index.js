var vm =  new Mvvm({
  el: '#app',
  data() {
    return {
      message: 'hello world',
      obj: {
        firstName: 'Mr.Z',
        lastName: 'lastName'
      }
    };
  },
  methods: {},
  computed:  {
    fullName() {
      return this.obj.firstName + ' ' + this.obj.lastName;
    }
  }
});