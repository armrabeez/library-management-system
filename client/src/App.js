import React from "react";

import AppNavbar from "./navbar/AppNavbar";
import AppBooksList from "./booksList/AppBooksList";
import AddBookModal from "./modal/AddBookModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <AppNavbar />
          <Container>
            <AddBookModal />
            <AppBooksList />
          </Container>
        </header>
      </div>
    </Provider>
  );
}

export default App;
