import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Weblayouts from "./layouts/Weblayouts";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Weblayouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
