import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterEvents } from "./DetectClipboard";
import { Game } from "./Game";
// import { Result } from "./result";

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<RegisterEvents />} />
          <Route path="game" element={<Game />} />
          {/* <Route path="result" element={<Result/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterConfig