new Vue({
    el: '#app',
    data: {
      tasks: [
          { description: "Faire a manger", completed: false, icon: 'close icon' },
          { description: "Faire les course", completed: true, icon: 'check icon' },
          { description: "Premener le chien", completed: false, icon: 'close icon' },
          { description: "Payer les factures", completed: true, icon: 'check icon' },
          { description: "Faire mon site internet", completed: false, icon: 'close icon' },
          { description: "Regarder la télé", completed: true, icon: 'check icon' },
          { description: "Faire le ménage", completed: true, icon: 'check icon' },
          { description: "Faore dodo", completed: false, icon: 'close icon' },
      ],
    },
    computed: {
      completed() {
          return this.tasks.filter((task) => {
              return task.completed
          });
      },
      incompleted() {
          return this.tasks.filter(task => ! task.completed);
      }
    },
    methods: {

    }
});