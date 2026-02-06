
import React from "react";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className={`task ${task.completed ? "done" : ""}`}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span>{task.text}</span>
      </div>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </div>
  );
}

export default TaskItem;

