const express =require('express');
const todo = require('../Controller/todoController')
const router = express.Router();

router.get('/',todo.getTodo)

router.get('/list/:id',todo.getToDoById)

router.post('/create',todo.createTodo)

router.put('/update/:id',todo.todoUpdate)

router.delete('/delete/:id',todo.DeleteTodo)


module.exports = router