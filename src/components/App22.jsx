import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>React Counter</h1>
      <p style={styles.counter}>Count: {count}</p>
      <div>
        <button style={styles.button} onClick={increment}>Increment</button>
        <button style={styles.button} onClick={decrement}>decrement</button>
        <button style={{ ...styles.button, backgroundColor: '#e74c3c' }} onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px'
  },
  counter: {
    fontSize: '1.5em',
    marginBottom: '20px'
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '1em',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px'
  }
};

export default Counter;
