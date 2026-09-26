import { useState } from "react";
function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) {
      return;
    }
    addTodo(trimmedText);
    setText("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="What needs to be done?"
        aria-label="New todo"
      />
      <button type="submit">
        + Add
      </button>
    </form>
  );
}
export default TodoForm;