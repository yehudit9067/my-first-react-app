
import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import TaskList from '../components/TaskList.jsx';
import TaskSummary from '../components/TaskSummary.jsx';

function App() {
  const [nameInput, setNameInput] = useState('');
  const [username, setUsername] = useState('');

  const [tasks, setTasks] = useState([
    { id: 1, name: 'לימוד דף יומי', status: 'הושלם' },
    { id: 2, name: 'תפילת שחרית במניין', status: 'הושלם' },
    { id: 3, name: 'קריאת שמע שעל המיטה', status: 'טרם הושלם' }
  ]);

  function toggleTask(taskId) {
    setTasks(currentTasks => currentTasks.map(task =>
      task.id === taskId
        ? { ...task, status: task.status === 'הושלם' ? 'טרם הושלם' : 'הושלם' }
        : task
    ));
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'הושלם').length;

  function handleNameSubmit(event) {
  event.preventDefault();

  const trimmedName = nameInput.trim();
  if (!trimmedName) return;

  setUsername(trimmedName);
}

  return username ? (
  <div>
    <Header username={username} />
    <TaskList tasks={tasks} onToggleTask={toggleTask} />
    <TaskSummary
      totalTasks={totalTasks}
      completedTasks={completedTasks}
    />
  </div>
) : (
  <form onSubmit={handleNameSubmit}>
    <h1>ברוכים הבאים</h1>
    <label htmlFor="username">מה שמך?</label>
    <input
      id="username"
      type="text"
      value={nameInput}
      onChange={(event) => setNameInput(event.target.value)}
      placeholder="הכניסו את שמכם"
      required
    />
    <button type="submit">המשך</button>
  </form>
);
}

export default App;
