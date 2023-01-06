import React, { useContext } from "react";
import { Quizcontext } from "../context/QuizHolder";

function Start() {
  const { setStart } = useContext(Quizcontext);
  return (
    <div className="w-full h-screen flex justify-center items-center text-white">
      <button
        className="bg-blue-700 px-7 py-4 text-2xl rounded-lg"
        onClick={() => setStart(true)}
      >
        Start
      </button>
    </div>
  );
}

export default Start;
