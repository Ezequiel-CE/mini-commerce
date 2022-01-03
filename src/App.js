import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderApp } from "./components/HeaderApp.js";
import { Home } from "./views/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProductView } from "./views/ProductView";
import { PurchaseView } from "./views/PurchaseView";

const App = () => {
  return (
    <>
      <HeaderApp />
      <Switch>
        <Route path={"/product/:id"} exact component={ProductView} />
        <Route path={"/"} exact component={Home} />
        <Route path={"/purchase"} exact component={PurchaseView} />
        <Route render={() => <Redirect to={"/"} />} />
      </Switch>
    </>
  );
};

export default App;
