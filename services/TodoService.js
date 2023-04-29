const Todos = require('../model/TodoSchema');

async function getAllToDo(){
    return Todos.find();
}

async function getToDoById(id){
        return Todos.findById(id);
}

async function createTodo(body){
  let todoCreate = new Todos(body)
  return todoCreate.save()
}

async function updateTodo(todoId,todo){
  let updateTodo = await Todos.findByIdAndUpdate(todoId,todo,{new:true})
  return updateTodo;
}

async function DeleteToDo(todoId){
 let deleteTodo = await Todos.findByIdAndDelete(todoId);
 return deleteTodo
}

module.exports = {
    DeleteToDo,
    getAllToDo,
    getToDoById,
    createTodo,
    updateTodo,
}

