import { useMemo, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";

import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  const [todos, setTodos] = useLocalStorage(
    "my-todos",
    []
  );

  const [filter, setFilter] = useState("all");

  const [draggedId, setDraggedId] = useState(null);


  // =========================
  // CREATE
  // =========================

  const addTodo = (text) => {

    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos((previousTodos) => [
      ...previousTodos,
      newTodo
    ]);
  };


  // =========================
  // UPDATE - COMPLETE
  // =========================

  const toggleTodo = (id) => {

    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      )
    );
  };


  // =========================
  // UPDATE - TEXT
  // =========================

  const updateTodo = (id, newText) => {

    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText
            }
          : todo
      )
    );
  };


  // =========================
  // DELETE
  // =========================

  const deleteTodo = (id) => {

    setTodos((previousTodos) =>
      previousTodos.filter(
        (todo) => todo.id !== id
      )
    );
  };


  // =========================
  // FILTER
  // =========================

  const filteredTodos = useMemo(() => {

    if (filter === "active") {
      return todos.filter(
        (todo) => !todo.completed
      );
    }

    if (filter === "completed") {
      return todos.filter(
        (todo) => todo.completed
      );
    }

    return todos;

  }, [todos, filter]);


  // =========================
  // DRAG START
  // =========================

  const handleDragStart = (event, id) => {

    setDraggedId(id);

    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData(
      "text/plain",
      id.toString()
    );
  };


  // =========================
  // DRAG OVER
  // =========================

  const handleDragOver = (event) => {

    event.preventDefault();

    event.dataTransfer.dropEffect = "move";
  };


  // =========================
  // DROP
  // =========================

  const handleDrop = (event, targetId) => {

    event.preventDefault();

    const sourceId = draggedId;

    if (
      sourceId === null ||
      sourceId === targetId
    ) {
      return;
    }

    setTodos((previousTodos) => {

      const sourceIndex =
        previousTodos.findIndex(
          (todo) => todo.id === sourceId
        );

      const targetIndex =
        previousTodos.findIndex(
          (todo) => todo.id === targetId
        );

      if (
        sourceIndex === -1 ||
        targetIndex === -1
      ) {
        return previousTodos;
      }

      const updatedTodos = [
        ...previousTodos
      ];

      const [movedTodo] =
        updatedTodos.splice(
          sourceIndex,
          1
        );

      updatedTodos.splice(
        targetIndex,
        0,
        movedTodo
      );

      return updatedTodos;
    });

    setDraggedId(null);
  };


  // =========================
  // CLEAR COMPLETED
  // =========================

  const clearCompleted = () => {

    setTodos((previousTodos) =>
      previousTodos.filter(
        (todo) => !todo.completed
      )
    );
  };


  // =========================
  // COUNTS
  // =========================

  const activeCount = todos.filter(
    (todo) => !todo.completed
  ).length;

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;


  return (
    <div className="app">

      <div className="container">

        <header className="header">

          <div>
            <p className="subtitle">
              STAY ORGANIZED
            </p>

            <h1>
              My <span>To-Do</span> List
            </h1>
          </div>

          <ThemeToggle />

        </header>


        <section className="todo-container">

          <TodoForm addTodo={addTodo} />


          <div className="toolbar">

            <div className="filters">

              <button
                className={
                  filter === "all"
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setFilter("all")}
              >
                All
                <span>{todos.length}</span>
              </button>

              <button
                className={
                  filter === "active"
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setFilter("active")}
              >
                Active
                <span>{activeCount}</span>
              </button>

              <button
                className={
                  filter === "completed"
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() =>
                  setFilter("completed")
                }
              >
                Completed
                <span>{completedCount}</span>
              </button>

            </div>


            {completedCount > 0 && (
              <button
                className="clear-button"
                onClick={clearCompleted}
              >
                Clear completed
              </button>
            )}

          </div>


          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />


          <div className="todo-footer">

            <span>
              {activeCount}{" "}
              {activeCount === 1
                ? "task"
                : "tasks"}{" "}
              remaining
            </span>

            <span>
              Drag and drop to reorder
            </span>

          </div>

        </section>


        <footer className="app-footer">
          Built with React • Hooks • Context API
        </footer>

      </div>

    </div>
  );
}

export default App;