import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterEvents } from "./DetectClipboard";
import { Game } from "./Game";
import Register from "./Register";
import Signin from "./Login";
import Mypage from "./MyPage";
import { AuthLogin } from "./AuthLogin"
// import { Result } from "./result";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<RegisterEvents />} />
          <Route path="game" element={<Game />} />
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Signin />} />
          <Route path={`/mypage`} element={<Mypage />} />
          {/* <Route path={`/authlogin`} element={<AuthLogin />} /> */}
          {/* <Route path="result" element={<Result/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterConfig