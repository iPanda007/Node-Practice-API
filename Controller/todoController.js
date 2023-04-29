// const TodoService = require('../services/TodoService')

// async function getTodo(req,res,next){
//         let todos = await TodoService.getAllToDo()
//         res.json(todos)
// }

// async function getToDoById(req,res,next){
//      let todos = req.params['id'];
//      console.log(todos)
//      let todo = await TodoService.getToDoById(todos)
//     if(!todo){
//         res.status(400).json({
//             message : "Todo Not found"
//         })
//     }else{
//         res.json(todo)
//     }

// }

// async function createTodo(req,res,next){
//     try{
//         const todo = await TodoService.createTodo(req.body);
//         if(!todo) throw Error('Cannot Save todo');
//         await res.status(201).json(todo);
//     }catch(err){
//             console.log(err);
//             await res.status(400).json({message:err})
//     }
// }

// async function todoUpdate(req,res,next){

//     try{
//         const todoId = req.params['id'];

//         const todo = await TodoService.updateTodo(todoId,req.body)
//         if(!todo)throw Error("Cannot Update todo");
//         await res.status(201).json(todo);
//     }catch(err){
//         await res.status(400).json({message:err})
//     }

// }

// async function DeleteTodo(req,res,nextt){
//         try{
//             const todoId = req.params['id'];
//             console.log(todoId)
//             const todoDelete = await TodoService.DeleteToDo(todoId);

//             if(!todoDelete)throw Error("Cannot Delete");
//              res.status(201).json(todoDelete)
//         }catch(err){
//             res.status(400).json({message:err})
//         }
// }

const TodoService = require("../services/TodoService");

async function getTodo(req, res, next) {
  let todos = await TodoService.getAllToDo();

  res.json(todos);

  console.log(todos);
}

async function getToDoById(req, res, next) {
  let todos = req.params["id"];
  const todosIdFetch = await TodoService.getToDoById(todos);
  if (!todosIdFetch) {
    res.status(400).json({
      message: "Data Not Found",
    });
  } else {
    res.json(todosIdFetch);
  }
}
async function createTodo(req, res, next) {
  try {
    const todo = await TodoService.createTodo(req.body);
    if (!todo) Error("Cannnot crate todo");
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ errorMessage: err });
  }
}

async function updateTodo(req, res, next) {
  try {
    const todoId = req.params["id"];
    const todoUpdate = TodoService.updateTodo(todoId, req.body);
    if (!todoUpdate) Error("Cannot update Todo");
    res.status(201).json({message:"Update success"});
  } catch (error) {
    res.status(400).json({ errorMessage: error });

  }
}

async function deleteTodo(req,res,next){
    try{
        const todoId = req.params['id'];
        const todoDelete = TodoService.DeleteToDo(todoId)
        if(!todoDelete) Error("Cannot Delete")
        res.status(201).json({message:"Delete SucessFull"})
    }catch(err){
        res.status(400).json({errorMessage,err});
    }
}

async function getAllcompletedTodo(){

}

module.exports = { getTodo, getToDoById, createTodo,updateTodo,deleteTodo,getAllcompletedTodo};
