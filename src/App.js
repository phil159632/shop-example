import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";
import ProductCollectionPage from "./pages/ProductCollectionPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/mall" />
        </Route>
        <Route path="/mall" exact>
          <HomePage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/mall/:categoryName">
          <ProductCollectionPage />
        </Route>

        <Route path="/:productName">
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
