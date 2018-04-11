new Vue({
    el: '#app',
    data: {
        name: 'Susan',
        presentation: "Je m'appelle Susan",
        classes: 'orange',
    },
    methods: {
        change() {
            this.name = 'Marc';
            this.presentation = "Je m'appelle Marc";
            this.classes = 'green';
        }
    }
});