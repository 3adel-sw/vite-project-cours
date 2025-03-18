import React, { Fragment } from "react";
import "./App.css";
// Import your components here
import Form from "./assets/components/Form";
import Header from "./assets/components/Header/Header";

const App = () => {
  const message = "Hello React!";
  return (
    <Fragment>
      <Header />
      <h1>{message}</h1>
      <Form />
    </Fragment>
  );
};

export default App;
