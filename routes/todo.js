const express =require('express');
const todo = require('../Controller/todoController')
const router = express.Router();

router.get('/',todo.getTodo)

router.get('/list/:id',todo.getToDoById)

router.post('/create',todo.createTodo)

router.put('/update/:id',todo.updateTodo)

router.delete('/delete/:id',todo.deleteTodo)


module.exports = router