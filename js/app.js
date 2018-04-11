new Vue({
    el: '#app',
    data: {
        name: null,
        users: ['Sophie', 'Marc', 'Susan', 'Joe'],
    },
    methods: {
        addUser() {
           this.users.push(this.name);
           this.name = '';
        },
        deleteUser(index) {
           this.users.splice(index, 1);
        }
    }
});