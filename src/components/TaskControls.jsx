import React from "react";

function TaskControls({ search, setSearch, filter, setFilter }) {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className={filter === "pending" ? "active" : ""}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
      </div>
    </div>
  );
}

export default TaskControls;
