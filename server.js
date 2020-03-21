const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const todos = [
  {
    todo: "Water the flowers",
    done: false,
    id: 0
  },
  {
    todo: "Empty the dishwasher",
    done: false,
    id: 1
  },
  {
    todo: "Wash the car",
    done: false,
    id: 2
  },
  {
    todo: "Learn the GraphQL",
    done: false,
    id: 3
  },
  {
    todo: "Practice the GSAP",
    done: false,
    id: 3
  }
];

//getAll
const getAll = (req, res) => res.json(todos);
app.get("/api/todos", getAll);

//getOne
const getOne = (req, res) => {
  const todo = todo[req.params.id];
  res.json(todo);
};
app.get("/api/todos/:id", getOne);

//post
const create = (req, res) => {
  let newTodo = req.body;
  todos[newTodo.id] = newTodo;
  res.json(newTodo);
};
app.post("/api/todos", create);

//put
const update = (req, res) => {
  const id = parseInt(req.params.id);
  let updatedTodo = req.body;
  if (todos[id] != null) {
    todos[id] = updatedTodo;
    res.json(updatedTodo);
  } else {
    res.json(updatedTodo);
  }
};
app.put("/api/todos/:id", update);

//del
const remove = (req, res) => {
  const deleteTodo = todos[req.params.id];
  delete todos[req.params.id];
  res.json(deleteTodo);
};
app.delete("/api/todos/:id", remove);

const port = 3100;
const srv = app.listen(port, () => {
  const host = srv.address().address;
  const port = srv.address().port;

  console.log("host", host, "port", port);
  return `Server running on port ${host} ${port}`;
});
