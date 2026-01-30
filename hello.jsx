// Import the necessary library from react
import React, { useState } from 'react';

// Define a functional component called App
const App = () => {
  // Use the useState hook to manage the 'count' state
  const [count, setCount] = useState(0);

  // Function to handle button clicks
  const handleClick = () => {
    setCount(count + 1);
  };

  // The component returns JSX, which describes the UI
  return (
    <div className="App">
      <h1>Hello, Varshu!</h1>
      <p>You clicked the button {count} times.</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

// Export the component for use in other files (e.g., index.js)
export default App;
