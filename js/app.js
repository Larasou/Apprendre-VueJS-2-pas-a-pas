new Vue({
    el: '#app',
    data: {
        firstname: 'Jean',
        lastname: 'Blabla',
    },
    computed: {
      fullname() {
          return this.firstname + ' ' + this.lastname;
      }
    },
    methods: {

    }
});