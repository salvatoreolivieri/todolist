
const app = new Vue({

  el: "#app",

  data: {
    toDoList: [

      {
        text: "Ripassare CSS",
        done: true
      },

      {
        text: "Studiare logica di programmazione",
        done: false
      },

      {
        text: "Approfondire keyUp",
        done: false
      }

    ]
  
  },

  methods: {
    // taskdone(index){
    //   this.idem[index].toToList.classlist.add("task-done")
    // }
  }

});