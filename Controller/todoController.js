const TodoService = require('../services/TodoService')

async function getTodo(req,res,next){
        let todos = await TodoService.getAllToDo()
        res.json(todos)
}

async function getToDoById(req,res,next){
     let todos = req.params['id'];
     console.log(todos)
     let todo = await TodoService.getToDoById(todos)
    if(!todo){
        res.status(400).json({
            message : "Todo Not found"
        })
    }else{
        res.json(todo)
    }
    
}

async function createTodo(req,res,next){
    try{
        const todo = await TodoService.createTodo(req.body);
        if(!todo) throw Error('Cannot Save todo');
        await res.status(201).json(todo);
    }catch(err){
            console.log(err);
            await res.status(400).json({message:err})
    }
}

async function todoUpdate(req,res,next){

    try{
        const todoId = req.params['id'];
    
        const todo = await TodoService.updateTodo(todoId,req.body)
        if(!todo)throw Error("Cannot Update todo");
        await res.status(201).json(todo);    
    }catch(err){
        await res.status(400).json({message:err})
    }

}

async function DeleteTodo(req,res,nextt){
        try{
            const todoId = req.params['id'];
            console.log(todoId)
            const todoDelete = await TodoService.DeleteToDo(todoId);
        
            if(!todoDelete)throw Error("Cannot Delete");
             res.status(201).json(todoDelete)
        }catch(err){
            res.status(400).json({message:err})
        }
}

module.exports = {getTodo ,createTodo,getToDoById,todoUpdate,DeleteTodo}