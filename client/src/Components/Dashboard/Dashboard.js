import React from "react";

import AppNavbar from "../../navbar/AppNavbar";
import AppBooksList from "../../booksList/AppBooksList";
import AddBookModal from "../../modal/AddBookModal";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "../../store";

import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <AppNavbar />
        </header>
        <Container>
          <AddBookModal />
          <AppBooksList />
        </Container>
      </div>
    </Provider>
  );
}

export default Dashboard;
