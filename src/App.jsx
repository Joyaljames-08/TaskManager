import React, { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskControls from "./components/TaskControls";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchSearch = task.text
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "completed")
      return matchSearch && task.completed;

    if (filter === "pending")
      return matchSearch && !task.completed;

    return matchSearch;
  });

  return (
    <div className="app">
      <div className="task-container">
        <Header />
        <TaskInput addTask={addTask} />
        <TaskControls
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
