import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // LOAD TODOS
  useEffect(() => {
    async function loadTodos() {
      try {
        setLoading(true);
        // Check localStorage first
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
          setTodos(JSON.parse(savedTodos));
          setLoading(false);
          return;
        }
        // If nothing is saved, fetch from API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();

        const formattedTodos = data
          .slice(0, 10)
          .map((todo) => ({
            id: todo.id,
            text: todo.title,
            completed: todo.completed
          }));

        setTodos(formattedTodos);

        // Save API todos to localStorage
        localStorage.setItem(
          "todos",
          JSON.stringify(formattedTodos)
        );
      
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadTodos();
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
  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTodos([
      ...todos,
      newTodo
    ]);
  }

  // DELETE TODO
  function deleteTodo(id) {
    setTodos(
      todos.filter(
        (todo) => todo.id !== id
      )
    );
  }

  // TOGGLE TODO
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
            ...todo,
            completed: !todo.completed
          }
          : todo
      )
    );
  }
  
  // EDIT TODO
  function editTodo(id, newText) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
            ...todo,
            text: newText
          }
          : todo
      )
    );
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
        <p>
          Error: {error}
        </p>
        <button
          onClick={() =>
            window.location.reload()
          }
        >
          Try Again
        </button>
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