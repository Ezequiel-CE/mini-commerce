import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { HeaderApp } from "./components/HeaderApp.js";
import { ListProducts } from "./components/Products/ListProducts";

const App = () => {
  return (
    <>
      <HeaderApp />
      <Container>
        <div className="App">
          <ListProducts />
        </div>
      </Container>
    </>
  );
};

export default App;
