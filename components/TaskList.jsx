import React from 'react';

function TaskList(props) {
  return (
    <section style={{ margin: '20px' }}>
      <h2>רשימת משימות</h2>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span> - <strong>{task.status}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TaskList;