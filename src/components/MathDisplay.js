import React, { useState } from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import asciimath2tex from 'asciimath-to-latex';

const MathEditor = () => {
  const [userInput, setUserInput] = useState('');
  const [latexOutput, setLatexOutput] = useState('');

  const handleInputChange = (event) => {
    const input = event.target.value;
    setUserInput(input);

    try {
      const latexEquation = asciimath2tex(input);
      setLatexOutput(latexEquation);
    } catch (error) {
      // Handle parsing errors if needed
      console.error(error);
      setLatexOutput('');
    }
  };

  return (
    <div style={{ color: 'black' }}>
      <h1>Math Editor</h1>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        style={{ width: '100%' }}
        placeholder="Type your mathematical expression here"
      />
      <div>
        <p>Inline Math:</p>
        <InlineMath math={latexOutput} />
      </div>
    </div>
  );
};

export default MathEditor;
