import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

const API_URL = "http://localhost:5000/api/todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // LOAD TODOS
  useEffect(() => {

    async function fetchTodos() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to load todos");
        }

        const data = await response.json();
        setTodos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTodos();
  }, []);

  // SAVE TODOS WHENEVER THEY CHANGE
  useEffect(() => {
    // Don't save empty initial state
    if (todos.length > 0) {
      localStorage.setItem(
        "todos",
        JSON.stringify(todos)
      );
    }
  }, [todos]);

  // ADD TODO
  async function addTodo(text) {

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: text
        })
      });
      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      const newTodo = await response.json();
      setTodos((prevTodos) => [
        ...prevTodos,
        newTodo
      ]);

    } catch (error) {
      setError(error.message);
    }
  }

  // DELETE TODO
  async function deleteTodo(id) {
    try {
      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "DELETE"
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }
      setTodos((prevTodos) =>
        prevTodos.filter(
          (todo) => todo.id !== id
        )
      );
    } catch (error) {
      setError(error.message);
    }
  }

  // TOGGLE TODO
  async function toggleTodo(id) {
    const todo = todos.find(
      (todo) => todo.id === id
    );

    if (!todo) return;
    try {
      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            completed: !todo.completed
          })
        }
      );
      if (!response.ok) {
        throw new Error(
          "Failed to update todo"
        );
      }
      const updatedTodo =
        await response.json();

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id
            ? updatedTodo
            : todo
        )
      );
    } catch (error) {
      setError(error.message);
    }
  }

  // EDIT TODO
  async function editTodo(id, newText) {

    try {
      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            text: newText
          })
        }
      );
      if (!response.ok) {
        throw new Error(
          "Failed to edit todo"
        );
      }
      const updatedTodo =
        await response.json();

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id
            ? updatedTodo
            : todo
        )
      );

    } catch (error) {
      setError(error.message);
    }
  }

  // FILTER
  const filteredTodos = todos.filter((todo) => {

    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  // LOADING UI
  if (loading) {
    return (
      <div className="app">
        <h1>Todo App</h1>
        <p>Loading todos...</p>
      </div>
    );
  }
  // ERROR UI
  if (error) {
    return (
      <div className="app">
        <h1>Todo App</h1>
        <p>Error: {error}</p>
        <button onClick={() =>
          window.location.reload()}>
          Try Again </button>
      </div>
    );
  }
  // UI
  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm
        onAddTodo={addTodo}
      />
      <FilterButtons
        filter={filter}
        onFilterChange={setFilter}
      />
      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;