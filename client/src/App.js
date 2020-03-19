import React, { Component } from "react";
import logo from "./logo.svg";
import Customers from "./components/customers";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__header--logo" alt="logo" />
          <h1 className="app__header--title">React Express Starter</h1>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
