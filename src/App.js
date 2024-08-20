import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNumber = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/random-number');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setNumber(data.number);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>React App</h1>
      <button onClick={fetchNumber} disabled={loading}>
        {loading ? 'Loading...' : 'Get Random Number'}
      </button>
      {error && <p>Error: {error}</p>}
      {number !== null && <p>Random Number: {number}</p>}
    </div>
  );
}

export default App;
