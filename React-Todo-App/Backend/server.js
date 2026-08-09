const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 5000;

// Path to todos.json
const todosFile = path.join(
  __dirname,
  "data",
  "todos.json"
);

// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.url);
  next();
});

// HELPER FUNCTIONS
function readTodos() {
  const data = fs.readFileSync(
    todosFile,
    "utf-8"
  );
  return JSON.parse(data);
}

function saveTodos(todos) {
  fs.writeFileSync(
    todosFile,
    JSON.stringify(todos, null, 2)
  );
}

// TEST ROUTE
app.get("/", (req, res) => {
  res.json({
    message: "Todo API is running!"
  });
});
app.get("/api", (req, res) => {
  res.json({
    message: "Todo API is working",
    endpoints: {
      getTodos: "GET /api/todos",
      getTodo: "GET /api/todos/:id",
      addTodo: "POST /api/todos",
      updateTodo: "PUT /api/todos/:id",
      deleteTodo: "DELETE /api/todos/:id"
    }
  });
});

// GET ALL TODOS
app.get("/api/todos", (req, res) => {
  try {
    const todos = readTodos();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to load todos"
    });
  }
});

// GET ONE TODO
app.get("/api/todos/:id", (req, res) => {
  try {
    const todos = readTodos();
    const id = Number(req.params.id);
    const todo = todos.find(
      (todo) => todo.id === id
    );
    if (!todo) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to get todo"
    });
  }
});

// ADD TODO
app.post("/api/todos", (req, res) => {
  try {
    const todos = readTodos();
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({
        message: "Todo text is required"
      });
    }
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false
    };
    todos.push(newTodo);
    saveTodos(todos);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create todo"
    });
  }
});

// UPDATE TODO
app.put("/api/todos/:id", (req, res) => {
  try {
    const todos = readTodos();
    const id = Number(req.params.id);
    const todoIndex = todos.findIndex(
      (todo) => todo.id === id
    );
    if (todoIndex === -1) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }
    const { text, completed } = req.body;
    if (text !== undefined) {
      if (text.trim() === "") {
        return res.status(400).json({
          message: "Todo text cannot be empty"
        });
      }
      todos[todoIndex].text =
        text.trim();
    }
    if (completed !== undefined) {
      todos[todoIndex].completed =
        completed;
    }
    saveTodos(todos);
    res.json(todos[todoIndex]);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to update todo"
    });
  }
});

// DELETE TODO
app.delete("/api/todos/:id", (req, res) => {
  try {
    const todos = readTodos();
    const id = Number(req.params.id);
    const filteredTodos = todos.filter(
      (todo) => todo.id !== id
    );
    if (filteredTodos.length === todos.length) {
      return res.status(404).json({
        message: "Todo not found"
      });
    }
    saveTodos(filteredTodos);
    res.json({
      message: "Todo deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to delete todo"
    });
  }
});

// START SERVER
app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});