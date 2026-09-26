import { useState } from "react";
function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  handleDragStart,
  handleDragOver,
  handleDrop
}) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const handleUpdate = () => {
    const trimmedText = editText.trim();
    if (!trimmedText) {
      return;
    }
    updateTodo(todo.id, trimmedText);
    setEditing(false);
  };
  const handleCancel = () => {
    setEditText(todo.text);
    setEditing(false);
  };
  return (
    <div
      className={`todo-item ${
        todo.completed ? "completed" : ""
      }`}
      draggable={!editing}
      onDragStart={(event) =>
        handleDragStart(event, todo.id)
      }
      onDragOver={(event) =>
        handleDragOver(event)
      }
      onDrop={(event) =>
        handleDrop(event, todo.id)
      }
    >
      <span className="drag-handle">
        ⋮⋮
      </span>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {editing ? (
        <input
          className="edit-input"
          type="text"
          value={editText}
          onChange={(event) =>
            setEditText(event.target.value)
          }
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleUpdate();
            }
            if (event.key === "Escape") {
              handleCancel();
            }
          }}
          autoFocus
        />
      ) : (
        <span className="todo-text">
          {todo.text}
        </span>
      )}
      <div className="todo-actions">
        {editing ? (
          <>
            <button
              className="save-button"
              onClick={handleUpdate}
            >
              ✓
            </button>
            <button
              className="cancel-button"
              onClick={handleCancel}
            >
              ✕
            </button>
          </>
        ) : (
          <>
            <button
              className="edit-button"
              onClick={() => setEditing(true)}
            >
              ✎
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              🗑
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default TodoItem;