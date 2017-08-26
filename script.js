var todoList =
  {
    todos:[],
    displayTodos: function(){
      if(this.todos.length === 0){
        console.log("There are no Todos today");
      } else {
        console.log("My todos:");
        for(var i = 0; i < this.todos.length; i++){
          if(this.todos[i].completed === true){
            console.log(" (x) " + this.todos[i].todoText);
          } else {
            console.log(" ( ) " + this.todos[i].todoText);
          };
        }
      }
    },

    changeTodo: function(position,todoText){
      this.todos[position].todoText = todoText;
      this.displayTodos();
    },

    addTodo: function(todoText){
      this.todos.push({
        todoText: todoText,
        completed: false
        });
      this.displayTodos();
    },

    deleteTodo: function(position){
      this.todos.splice(position,1);
      this.displayTodos();
    },

    toggleCompleted: function(position){
      var todo = this.todos[position]
      todo.completed = !todo.completed;
      this.displayTodos();
    },

    toggleAll: function() {
      var totalTodos = this.todos.length;
      var completedTodos = 0;

      for(var i = 0; i < totalTodos; i++){
        if (this.todos[i].completed === true){
            completedTodos++;
        }
      }
      // case 1: if everything is true make everything false
      if(completedTodos === totalTodos){
        for (var i = 0; i < totalTodos; i++){
          this.todos[i].completed = false;
        }
      } else {
      //case 2: if everything is false make everything false
        for (var i = 0; i < totalTodos; i++){
          this.todos[i].completed = true;
        }
      }
      this.displayTodos();
    }
  };


var handlers =
  {
    displayTodos: function(){
      todoList.displayTodos();
    },
    addTodo: function() {
      var addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = "";
    },
    changeTodo: function() {
      var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
      var changeTodoTextInput = document.getElementById("changeTodoTextInput");
      todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
      changeTodoTextInput= "";
      changeTodoPositionInput = "";
    },
    deleteTodo: function() {
      var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
      todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
      deleteTodoPositionInput = "";
    },
    toggleCompleted: function(){
      var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
      todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
      toggleCompletedPositionInput = "";
    },
    toggleAll: function() {
      todoList.toggleAll();
    }


  };
