import { deDE } from '@mui/x-date-pickers';
import React, { useState, useEffect } from 'react';

const PuzzleGame = () => {
  // state variables for the puzzle game
  const [tiles, setTiles] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [timeRemaining, setTimeRemaining] = useState(60); // timer starts at 60 seconds
  const [isTimeUp, setIsTimeUp] = useState(false);

  // use the useEffect hook to start the timer when the component mounts
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining((time) => {
        if (time === 0) {
          clearInterval(timerId);
          setIsTimeUp(true);
          return time;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timerId); // clean up the interval when the component unmounts
  }, []);

  // handler for when the user clicks on a tile
  const handleTileClick = (tileIndex) => {
    const newTiles = [...tiles];
    const blankTileIndex = tiles.indexOf(9); // the blank tile is represented by the number 9

    // swap the clicked tile with the blank tile
    [newTiles[tileIndex], newTiles[blankTileIndex]] = [newTiles[blankTileIndex], newTiles[tileIndex]];
    setTiles(newTiles);
  }

  // check if the puzzle is solved
  const isPuzzleSolved = tiles.every((tile, index) => tile === index + 1);

  // render the puzzle game
  return (
    <div>
      <h1>Puzzle Game</h1>
      {isTimeUp ? (
        <p>Time's up!</p>
      ) : (
        <p>Time remaining: {timeRemaining} seconds</p>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tiles.map((tile, index) => (
          <div
            key={index}
            style={{
              width: '33.333%',
              height: '33.333%',
              backgroundImage: `url(/images/puzzle/${tile}.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              cursor: 'pointer'
            }}
            onClick={() => handleTileClick(index)}
          ></div>
        ))}
      </div>
      {isPuzzleSolved && (
        <p>Congratulations, you solved the puzzle!</p>
      )}
    </div>
  );
};


export default PuzzleGame