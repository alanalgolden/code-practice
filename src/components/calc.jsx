import React from "react";

const calc = () => {
  return (
    <div className="m-auto w-full px-4 py-16">
      <div className="flex-col text-center">
        <h1 className="text-xl font-extrabold">Calculator</h1>
        <div className="grid grid-flow-col grid-rows-3 justify-center">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
        <button>0</button>
      </div>
    </div>
  );
};

export default calc;
