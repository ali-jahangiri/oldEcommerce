import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//pages
import HomePage from "../page/Homepage";
import Menu from "../components/Menu";
import NotFound from "../components/404";
import ShopPage from "../page/Shop";
import Category from "../page/category";
import Sing from "../page/Sign";
import CheckOut from "../page/checkout";

//store
import * as every from "../store/store";

const AppRouter = () => (
  <Provider store={every.default.store}>
    <BrowserRouter>
      <PersistGate persistor={every.default.persistore}>
        <React.Fragment>
          <Menu />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/sing" component={Sing} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/shop/:categor" component={Category} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
export default AppRouter;
