import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterEvents } from "./DetectClipboard";
import { Game } from "./Game";
import Register from "./Register";
import Login from "./Login";
import Mypage from "./MyPage";
// import { Result } from "./result";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<RegisterEvents />} />
          <Route path="game" element={<Game />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/mypage`} element={<Mypage />} />
          {/* <Route path="result" element={<Result/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterConfig