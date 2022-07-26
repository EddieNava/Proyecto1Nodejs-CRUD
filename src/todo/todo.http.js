const { response } = require('express')
const { createTodo, getAllTodos, getTodoById, deleteTodo, editTodo } = require('./todo.controllers')

// Servicio donde servimos la peticion que requiren todas las tareas

const getAll =  (req, res) => {
    const data = getAllTodos()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)

    if(id){
        const data = getTodoById(id)
        if(data.id){
            res.status(200).json(data)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const createNewTodo = (req, res) => {
        const data = req.body
        if (data.name && data.description && data.completed) {
            const response = createTodo(data)
            res.status(201).json(response)
        }
        else {
            res.status(400).json({ message: "Invalid Arguments" })
        }
    }
    
const deleteById = (req, res) => {
        const id = Number(req.params.id)
        if (typeof id === 'number') {
            const deleted = deleteTodo(id)
            if (deleted) {
                res.status(201).json({ message: 'ToDo delected succesfully' })
            } else {
                res.status(400).json({ message: 'Try with another ID' })
            }
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    }
const updateTodo = (req, res) => {
        const id = Number(req.params.id)
        const data = req.body
        if (data.name && data.description && data.completed) {
            const response = editTodo(id, data)
            res.status(201).json({ message: "ToDo edited succesfully", data: response })
        }
        else {
            res.status(400).json({ message: "Invalid Arguments" })
        }
    }

module.exports = {
    getAll,
    getById,
    createNewTodo,
    updateTodo,
    deleteById

}
