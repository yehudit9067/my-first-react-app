import React from 'react';

function TaskSummary(props) {
  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>סיכום נתונים</h3>
      <p>ישנן {props.totalTasks} משימות סך הכל, מתוכן {props.completedTasks} הושלמו.</p>
    </div>
  );
}

export default TaskSummary;