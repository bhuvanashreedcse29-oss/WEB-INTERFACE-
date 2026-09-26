import TodoItem from "./TodoItem";
function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  updateTodo,
  handleDragStart,
  handleDragOver,
  handleDrop
}) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">✓</div>

        <h3>No todos found</h3>

        <p>
          Add a new task to get started.
        </p>
      </div>
    );
  }
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          handleDragStart={handleDragStart}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />
      ))}
    </div>
  );
}
export default TodoList;