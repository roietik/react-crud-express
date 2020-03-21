import React, { Component } from "react";
import logo from "./logo.svg";
import Todos from "./components/todos";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header header">
          <img src={logo} className="header__logo" alt="logo" />
          <h1 className="header__title">React Express Todo</h1>
        </header>
        <Todos />
      </div>
    );
  }
}

export default App;
