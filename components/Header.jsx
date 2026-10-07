import React from 'react';

function Header(props) {
  return (
    <header style={{ padding: '10px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <h1>ניהול משימות יומיות</h1>
      <p>שלום, {props.username}</p>
    </header>
  );
}

export default Header;