
const app = new Vue({

  el: "#app",

  data: {
    toDoList: [

      {
        text: "Ripassare CSS",
        done: false,
        category: "css"
      },

      {
        text: "Studiare logica di programmazione",
        done: false,
        category: "logica"
      },

      {
        text: "Approfondire keyUp",
        done: false,
        category: "sintassi"
      }

    ],

    newToDoItem: {
        text: "",
        done: false,
        category: ""
    }
  
  },

  methods: {

    taskDone(index){
      this.toDoList[index].done = !this.toDoList[index].done
    },

    addItem(){
      this.toDoList.push(this.newToDoItem);
      this.newToDoItem = {
        text: "",
        done: false,
        category: ""
      };
    },

    deleteItem(index){
      this.toDoList.splice(index, 1);
    }
  }

});