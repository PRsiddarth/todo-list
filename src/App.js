import React, { useState } from 'react';
import './App.css';
<h1>Learn React</h1>
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('low');
  const [teamMember, setTeamMember] = useState('');

  const addTask = () => {
    if (taskName && teamMember) {
      setTasks([...tasks, { name: taskName, priority: taskPriority, member: teamMember }]);
      setTaskName('');
      setTaskPriority('low');
      setTeamMember('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Team To-Do List</h1>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Team Member"
        value={teamMember}
        onChange={(e) => setTeamMember(e.target.value)}
      />
      <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={addTask}>Add Task</button>

      <h2>Tasks</h2>
      <ul>
  {tasks.map((task, index) => (
    <li key={index} className="task-item">
      {task.name} - Assigned to: {task.member} - Priority: {task.priority}
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default App;