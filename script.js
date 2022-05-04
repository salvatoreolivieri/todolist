
const app = new Vue({

  el: "#app",

  data: {
    toDoList: [

      {
        text: "Ripassare CSS",
        done: false
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

    taskDone(index){
      this.toDoList[index].done = !this.toDoList[index].done
    },

    deleteItem(index){
      this.toDoList.splice(index, 1);
    }
  }

});