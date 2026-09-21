import React, { useState } from "react";
import { Link } from "react-router-dom";

type TContentProps = {
  setUsername(name: string): void;
};

const Content = ({ setUsername }: TContentProps) => {
  const [value, setValue] = useState<string>("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <section className="text-center mt-10">
      <div className="container">
        <h3 className="text-2xl font-medium">The Best Pizza.</h3>
        <h2 className="text-3xl mt-1 text-amber-500">
          Straight out of the oven, straight to you.
        </h2>
        <p className="mt-10">
          👋 Welcome! Please start by telling us your name:
        </p>
        <input
          value={value}
          onChange={handleChangeValue}
          className="py-2 px-3 bg-gray-100 min-w-80 rounded-3xl mt-5 mb-10 focus:outline-amber-300"
          type="text"
          placeholder="Your full name"
        />

        {value && (
          <Link
            to={"/menu"}
            onClick={() => setUsername(value)}
            className="block mx-auto max-w-70 bg-amber-400 rounded-3xl py-2 px-5 cursor-pointer hover:opacity-85 transition-all duration-300 ease-in-out"
          >
            START ORDERING
          </Link>
        )}
      </div>
    </section>
  );
};

export default Content;
