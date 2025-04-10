import React from 'react';
import ReactDOM from 'react-dom/client';

// Button component with default props
const Button = ({ label, color, onClick }) => {
  return (
    <button
      style={{ ...styles.button, backgroundColor: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

// Default props
Button.defaultProps = {
  label: 'Click Me',
  color: '#3498db',
  onClick: () => alert('Button clicked!'),
};

const App = () => {
  return (
    <div style={styles.container}>
      <h2>Default Props Example</h2>
      <Button label="Submit" color="#2ecc71" onClick={() => alert('Submitted!')} />
      <Button label="Delete" color="#e74c3c" />
      <Button />
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    margin: '10px',
    cursor: 'pointer',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
