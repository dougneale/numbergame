// Math Game home page

// There are 4 buttons that are used to play the game
// The buttons are Add, minus, multiply, divide
// At the top of the page is a number between 1 and 100, called the goal
// The number is generated randomly
// Below that number is a score
// the score is 1 initially
// the user increases the score by clicking on one of the buttons
// Another random number is generated between 1 and 10
// That number is either added, subtracted, multiplied or divided to the current score
// The user can click on the buttons again to increase the score again
// The game is over when the score matches the goal
// once the game is over, the score is reset to 1
// also display the random number generated for that turn
// include the number of turns the player has made in that round
// reset the turn count to 0 when the game is over

// website is written with tailwindcss

// make necessary imports

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1;
};

const Home = () => {
  const [score, setScore] = useState(0);
  const [goal, setGoal] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  // store randomly generated number
  const [randomNumber, setRandomNumber] = useState(0);
  // store number of turns
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    setGoal(Math.floor(Math.random() * 100) + 1);
    // set randomNumber to a new random number
    setRandomNumber(generateRandomNumber());
  }, []);

  const handleGameOver = () => {
    setGameOver(true);
  };

  // setScore function that also checks for game over state
  const setScoreFunction = (score) => {
    setScore(score);
    if (score === goal) {
      handleGameOver();
    }
    // update random number
    setRandomNumber(generateRandomNumber());
    // update turns
    setTurns(turns + 1);
  };

  const handleAdd = () => {
    setScoreFunction(score + randomNumber);
  };

  const handleMinus = () => {
    setScoreFunction(score - randomNumber);
  };

  const handleMultiply = () => {
    setScoreFunction(score * randomNumber);
  };

  const handleDivide = () => {
    setScoreFunction(score / randomNumber);
  };

  const handleGameReset = () => {
    setGameOver(false);
    setScore(0);
    setGoal(Math.floor(Math.random() * 100) + 1);
    setRandomNumber(generateRandomNumber());
    setTurns(0);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1>Math Game</h1>
      {/* buttons */}
      <div className="flex flex-col items-center justify-center ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleMinus}
        >
          Minus
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleMultiply}
        >
          Multiply
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDivide}
        >
          Divide
        </button>
      </div>
      {/* score */}
      <div className="flex flex-col  ">
        <h2>Score: {score}</h2>
        <h2> ? </h2>
        <h2> Random Number: {randomNumber} </h2>
        <h2>Goal: {goal}</h2>
        <h2>Turns: {turns}</h2>
      </div>
      {/* game over */}
      <div className="flex flex-col items-center justify-center ">
        {gameOver && <h2>Game Over</h2>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleGameReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Home;
