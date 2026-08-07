import { useState } from "react";

function TodoItem({
  todo,
  onDelete,
  onToggle,
  onEdit
}) {

  const [isEditing, setIsEditing] = useState(false);

  const [editText, setEditText] = useState(todo.text);


  function handleSave() {

    if (editText.trim() === "") {
      return;
    }

    onEdit(todo.id, editText);

    setIsEditing(false);
  }


  return (
    <div className="todo-item">

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />


      {isEditing ? (

        <>
          <input
            className="edit-input"
            value={editText}
            onChange={(e) =>
              setEditText(e.target.value)
            }
          />

          <button onClick={handleSave}>
            Save
          </button>

          <button
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>

      ) : (

        <>
          <span
            className={
              todo.completed
                ? "completed"
                : ""
            }
          >
            {todo.text}
          </span>

          <button
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
        </>

      )}

    </div>
  );
}

export default TodoItem;