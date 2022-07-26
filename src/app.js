const express = require("express");
const todoRouter = require('./todo/todo.router').router

const app = express();

app.use(express.json());

// Aqui se encuentran las rutas de los ToDos
app.use('/api/v1', todoRouter)
//* localhost:8000/api/v1/todos


app.use("/", (req, res) => {
  res.json({ message: "Peticion con use", method: req.method });
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});



