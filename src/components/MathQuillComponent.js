import React, { useRef, useEffect } from 'react';
import MathQuill from 'react-mathquill';

const MathQuillComponent = ({ handleMathField, onChange }) => {
  const mathFieldRef = useRef(null);

  useEffect(() => {
    if (mathFieldRef.current) {
      handleMathField(mathFieldRef.current.getInstance());
    }
  }, [handleMathField]);

  return (
    <MathQuill
      mathquillDidMount={(mathField) => {
        console.log('MathQuill Mounted:', mathField); // Check if this log is appearing
        handleMathField(mathField);
      }}
    >
      <textarea ref={mathFieldRef} onChange={onChange} />
    </MathQuill>
  );
};

export default MathQuillComponent;
