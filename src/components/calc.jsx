import React from "react";
import { useEffect } from "react";

const calc = () => {
  const [input, setInput] = React.useState("0");
  const [prevInput, setPrevInput] = React.useState(null);
  const [operator, setOperator] = React.useState(null);

  const handleMath = (operator) => {
    setPrevInput(input);
  };

  useEffect(() => {
    console.log("updated input ", input);
  }, [input, prevInput, operator]);

  return (
    <div className="flex justify-center">
      <div className="text-center">
        <h1 className="text-xl font-extrabold">Calculator</h1>
        <div className="grid grid-cols-4 justify-center gap-2">
          <div className="col-span-4">{input}</div>
          <button>C</button>
          <button>H</button>
          <button>%</button>
          <button onClick={() => handleMath(`+`)}>+</button>
          <button onClick={() => setInput(1)}>1</button>
          <button onClick={() => setInput(2)}>2</button>
          <button>3</button>
          <button>-</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
          <button className="col-span-2 w-full">0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default calc;
