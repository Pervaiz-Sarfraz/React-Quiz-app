import React, { useContext } from "react";
import Quiz from "./Components/Quiz";
import Start from "./Components/Start";
import Result from "./Components/Result";
import { Quizcontext } from "./context/QuizHolder";

function App() {
  const { start, exit } = useContext(Quizcontext);
  return (
    <>
      {exit === false ? (
        <>{start === true ? <Quiz /> : <Start />}</>
      ) : (
        <Result />
      )}
    </>
  );
}

export default App;
