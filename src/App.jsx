import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskSummary from './components/TaskSummary';

function App() {
  // נתונים סטטיים בלבד (ללא שינוי כרגע)
  const username = "ישראל ישראלי";
  
  const tasks = [
    { id: 1, name: 'לימוד דף יומי', status: 'הושלם' },
    { id: 2, name: 'תפילת שחרית במניין', status: 'הושלם' },
    { id: 3, name: 'קריאת שמע שעל המיטה', status: 'טרם הושלם' }
  ];

  // חישוב סטטי של כמות המשימות והמושלמות לצורך העברה לסיכום
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'הושלם').length;

  return (
    <div>
      {/* 1. קומפוננטת כותרת */}
      <Header username={username} />

      {/* 2. קומפוננטת רשימת משימות */}
      <TaskList tasks={tasks} />

      {/* 3. קומפוננטת סיכום */}
      <TaskSummary totalTasks={totalTasks} completedTasks={completedTasks} />
    </div>
  );
}

export default App;
