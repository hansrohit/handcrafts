import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Weblayouts from "./layouts/Weblayouts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Weblayouts />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
