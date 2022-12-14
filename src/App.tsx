import React from 'react';
import './App.scss';
import { Typography, Button } from 'react-md';

function App() {
  return (
    <div className="main">
      <Typography type="headline-4">Rachel Koldenhoven</Typography>
      <Button>
        <a
          href={require('./assets/koldenhoven-resume.pdf')}
          download="koldenhoven-rachel"
          className="link"
        >
          Download Resume
        </a>
      </Button>
    </div>
  );
}

export default App;
