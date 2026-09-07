import { useState } from 'react';
import Header from './Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <h1>האפליקציה הראשונה שלי בריאקט</h1>
      <p>לחצת על הכפתור {count} פעמים</p>
      <button onClick={() => setCount(count + 1)}>
        לחצי כדי להוסיף 1
      </button>
    </div>
  );
}

export default App;
