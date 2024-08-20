import React, { useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/random-number`); // Sử dụng biến môi trường
      setRandomNumber(response.data.random_number);
    } catch (error) {
      console.error('Error fetching random number:', error);
    }
  };

  return (
    <div className="App">
      <h1>Random Number</h1>
      <button onClick={fetchRandomNumber}>Fetch Random Number</button>
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}
    </div>
  );
}

export default App;
