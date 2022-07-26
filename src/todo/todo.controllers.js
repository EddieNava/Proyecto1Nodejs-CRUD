
const ToDoDB = [
  {
    id: 1,
    name: "example1",
    description: "jsadlfjdslfjdsj",
    completed: "false"
  },
  {
    id: 2,
    name: "example2",
    description: "sdasjdhjaksdlashd",
    completed: "false"
  }
];


// El controlador para retornar todas las tareas

const getAllTodos = () => {
  return ToDoDB;
};

// El controlador para retornar las tareas por Id

const getTodoById = (id) => {
  const filteredDB = ToDoDB.filter((user) => user.id === id);
  return filteredDB[0];
};

// El controlador para crear las tareas

const createTodo = (todoObj) => {
  if (ToDoDB.length === 0) {
    const newTodo = {
      id: 1,
      name: todoObj.name,
      description: todoObj.description,
      completed: "false"
    };
    ToDoDB.push(newTodo);
    return newTodo;
  } else {
  
  const newTodo = {
    id: ToDoDB[ToDoDB.length - 1].id + 1,
    name: todoObj.name,
    description: todoObj.description,
    completed: "false",
  };
  ToDoDB.push(newTodo);
  return newTodo;
};
}

// El controlador para borrar las tareas

const deleteTodo = (id) => {
    const index = ToDoDB.findIndex((item) => item.id === id);
    if (index !== -1) {
      ToDoDB.splice(index, 1);
      return true
   } 
    return false
  }
  
 // El controlador para editar las tareas

const editTodo = (id, data) => {
    const index = ToDoDB.findIndex((item) => item.id === id);
    if (data.name && data.description && data.completed) {
       ToDoDB[index] = {
        id,
        name: data.name,
        description: data.description,
        completed: data.completed
       }
       return ToDoDB[index]
   } else {
    createTodo(data)
    return ToDoDB.at(-1)

   }
}


module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  deleteTodo,
  editTodo
};
