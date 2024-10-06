import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./Screen/Home/Home.js";
import ProductDetails from "./Screen/ProductDetails";
import NotFound from "./Screen/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
        <Route path="/notFound" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
