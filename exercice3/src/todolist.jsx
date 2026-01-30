import { useState } from "react";

function ToDoList() {
  // state pour la liste des tâches
  const [tasks, setTasks] = useState(["Tache 1", "Tache 2", "Tache 3"]);
  // state pour l'input
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // empêche le reload de page
    if (newTask.trim() === "") return; // ignore si vide

    setTasks([...tasks, newTask]); // ajoute la tâche
    setNewTask(""); // vide l'input
  };

  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="task">
          Tâche :
        </label>
        <input
          type="text"
          id="task"
          name="task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}

export default ToDoList;
