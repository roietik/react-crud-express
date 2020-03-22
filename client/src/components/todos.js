import React, { Component } from "react";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.refs.todo.focus();

    fetch("http://localhost:3100/api/todos")
      .then(res => res.json())
      .then(todos =>
        this.setState({ todos }, () =>
          console.log("Customers fetched...", todos)
        )
      );
  }

  submit = e => {
    e.preventDefault();
    console.log("submit");
  };
  remove = () => {
    console.log("remove");
  };
  edit = () => {
    console.log("edit");
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo">
        <h2 className="todo__title">Todo</h2>
        <form ref="form" className="todo__form form">
          <input
            type="text"
            ref="todo"
            placeholder="todo"
            className="form__field"
          />
          <button onClick={e => this.submit(e)} className="form__submit">
            Submit
          </button>
        </form>
        <pre>
          {todos.map((todo, idx) => (
            <li key={idx} className="todo__list list">
              <p className="list__data">
                {idx + 1}. {todo.todo}
              </p>
              <button onClick={this.remove} className="list__button">
                Remove
              </button>
              <button onClick={this.edit} className="list__button">
                Edit
              </button>
            </li>
          ))}
        </pre>
      </div>
    );
  }
}

export default Todos;
