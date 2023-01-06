import React, { useContext } from "react";
import { Quizcontext } from "../context/QuizHolder";

function Result() {
  const { correct, setExit, setStart, quizzes } = useContext(Quizcontext);
  const Playagain = () => {
    setExit(false);
    setStart(false);
  };
  return (
    <div className="container h-screen w-full">
      <div className="w-[40%] shadow-lg text-center rounded-md overflow-hidden">
        <h1 className="text-3xl">
          {correct} correct of {quizzes.length}
        </h1>
        <button
          className="bg-red-500 p-2 m-2 text-2xl text-white"
          onClick={Playagain}
        >
          Take Again
        </button>
      </div>
    </div>
  );
}

export default Result;
