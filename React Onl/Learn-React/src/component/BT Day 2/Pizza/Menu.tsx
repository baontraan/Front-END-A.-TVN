import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./Content/Content";
import { useState } from "react";
import Header from "./Header/Header";
import ListPizza from "./List Pizza/ListPizza";

const Menu = () => {
  const [username, setUsername] = useState<string>("");
  return (
    <BrowserRouter>
      <div>
        <Header username={username}></Header>
        <Routes>
          <Route
            path="/"
            element={<Content setUsername={setUsername} />}
          ></Route>

          <Route
            path="menu"
            element={<ListPizza setUsername={setUsername} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Menu;
