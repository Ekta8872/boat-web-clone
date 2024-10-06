import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../Screen/Home/Home";
import ProductDetails from "../Screen/ProductDetails";
import NotFound from "../Screen/NotFound";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/productDetails" component={ProductDetails} />
        <Route component={NotFound} />
      </div>
    </Router>
  );
};

export default Routes;
