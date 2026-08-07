import { useState } from "react";

function TodoForm({ onAddTodo }) {

  const [text, setText] = useState("");


  function handleSubmit(e) {

    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    onAddTodo(text);

    setText("");
  }


  return (
    <form onSubmit={handleSubmit} className="todo-form">

      <input
        type="text"
        placeholder="Enter a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Add
      </button>

    </form>
  );
}

export default TodoForm;