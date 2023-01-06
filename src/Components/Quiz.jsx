import React, { useContext, useState } from "react";
import { Quizcontext } from "../context/QuizHolder";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const { correct } = useContext(Quizcontext);

  return (
    <div className="container h-screen">
      <h1>{correct}</h1>
      <Box current={current} handler={setCurrent} />
    </div>
  );
}

const Box = ({ current, handler }) => {
  const { quizzes, correct, setCorrect, setExit } = useContext(Quizcontext);
  const [ans, setAns] = useState("");
  const SaveHandler = () => {
    if (quizzes[current].correct === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if (current + 1 === quizzes.length) {
      setExit(true);
    } else {
      handler(correct + 1);
    }
  };
  return (
    <div className="w-[40%] min-h-[200px] shadow-lg">
      <div className="p-2 text-3xl">
        {current + 1}
        {quizzes[current].question}
      </div>
      <div className="grid grid-cols-2 p-2 mt-2">
        <div
          className={`border p-2  ${
            ans === "a" ? "bg-blue-600" : ""
          } hover:text-white hover:bg-blue-600 hover:duration-150`}
          onClick={() => setAns("a")}
        >
          {quizzes[current].a}
        </div>
        <div
          className={`border p-2  ${
            ans === "b" ? "bg-blue-600" : ""
          } hover:text-white hover:bg-blue-600 hover:duration-150`}
          onClick={() => setAns("b")}
        >
          {quizzes[current].b}
        </div>
        <div
          className={`border p-2  ${
            ans === "c" ? "bg-blue-600" : ""
          } hover:text-white hover:bg-blue-600 hover:duration-150`}
          onClick={() => setAns("c")}
        >
          {quizzes[current].c}
        </div>
        <div
          className={`border p-2  ${
            ans === "d" ? "bg-blue-600" : ""
          } hover:text-white hover:bg-blue-600 hover:duration-150`}
          onClick={() => setAns("d")}
        >
          {quizzes[current].d}
        </div>
      </div>
      <div className="flex justify-between text-white">
        <div
          className="h-[30px] px-3 bg-red-700 cursor-pointer"
          onClick={() => setAns("")}
        >
          Reset
        </div>
        <div
          className="h-[30px] px-3 bg-blue-700 cursor-pointer"
          onClick={SaveHandler}
        >
          Save && Next
        </div>
        <div
          className="h-[30px] px-3 bg-purple-700 cursor-pointer"
          onClick={() => setExit(true)}
        >
          Exit
        </div>
      </div>
    </div>
  );
};
