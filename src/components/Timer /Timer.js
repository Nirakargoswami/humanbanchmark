import React, { useState, useEffect } from 'react';

const Timer = () => {
const [remainingTime, setRemainingTime] = useState(getInitialRemainingTime());

useEffect(() => {
  const timer = setInterval(() => {
    setRemainingTime((prevTime) => {
      if (prevTime > 0) {
        return prevTime - 1; // Decrease the remaining time by 1 second
      } else {
        return 0; // Reset the remaining time to 0 after 24 hours
      }
    });
  }, 1000); // Run the timer every second

  return () => clearInterval(timer); // Clean up the interval when the component unmounts
}, []);

// Calculate the initial remaining time based on the user's current time
function getInitialRemainingTime() {
  const currentDate = new Date();
  const currentSeconds = currentDate.getHours() * 3600 + currentDate.getMinutes() * 60 + currentDate.getSeconds();
  const remainingSeconds = 24 * 60 * 60 - currentSeconds;
  return remainingSeconds > 0 ? remainingSeconds : 0;
}

// Convert remainingTime to hours, minutes, and seconds
const hours = Math.floor(remainingTime / 3600);
const minutes = Math.floor((remainingTime % 3600) / 60);
const seconds = remainingTime % 60;


  return (
    <div className='boxcolor'>
      <h5 style={{margin:"0px",padding:"5px"}} >Time Left in competition</h5>
      <p  style={{margin:"0px",padding:"0px"}} >{`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
    </div>
  );
};

export default Timer;
