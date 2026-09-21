import React, { useState } from "react";

const Counter = (): React.JSX.Element => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = (): void => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
  };

  const handleDecrement = (): void => {
    setCount((prev) => prev - 1);
  };

  const handleReset = (): void => {
    setCount(0);
  };
  return (
    <div className="container mt-10">
      <h1 className="text-center text-4xl font-semibold">Counter</h1>
      <div className="text-center my-8 text-3xl">{count}</div>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={handleIncrement}
          className="text-white bg-green-700 p-2 rounded-lg cursor-pointer"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          disabled={count === 0}
          className="text-white bg-red-400 p-2 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          disabled={count === 0}
          className="text-white bg-gray-500 p-2 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
