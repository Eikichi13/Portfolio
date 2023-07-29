import React, { useState } from "react";
import "./todolist.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      if (editTaskId !== null) {
        // Si on est en mode édition, met à jour la tâche existante
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === editTaskId ? { ...task, name: newTask } : task
          )
        );
        setEditTaskId(null);
      } else {
        // Ajoute une nouvelle tâche à la liste
        const newTaskObj = {
          id: new Date().getTime(),
          name: newTask,
        };
        setTasks((prevTasks) => [...prevTasks, newTaskObj]);
      }

      setNewTask("");
    }
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setNewTask(taskToEdit.name);
    setEditTaskId(taskId);
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Nouvelle tâche"
      />
      <button onClick={handleAddTask}>
        {editTaskId !== null ? "Modifier" : "Ajouter"}
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleEditTask(task.id)}>Modifier</button>
            <button onClick={() => handleDeleteTask(task.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;