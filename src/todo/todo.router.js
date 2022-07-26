const router = require('express').Router()
const httpTodos = require('./todo.http')


router.route('/todos')
    .get(httpTodos.getAll)
    .post(httpTodos.createNewTodo)

router.route('/todos/:id')
    .get(httpTodos.getById)
    .put(httpTodos.updateTodo)
    .delete(httpTodos.deleteById)


module.exports = {
    router
}

