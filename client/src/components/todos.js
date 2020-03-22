import React, { Component } from "react";
import Api from "../api/api";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      loading: true,
      act: 0,
      index: null,
      error: ""
    };
  }

  componentDidMount() {
    this.refs.todo.focus();
    this.refs.todo.focus();

    Api.getAll()
      .then(todos => this.setState({ todos }))
      .then(() => this.setState({ index: this.state.todos.length }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  //api
  add = item => {
    Api.add({ ...item, id: this.state.index }).then(addedItem => {
      this.setState(prevState => {
        const todos = [...prevState.todos, addedItem];
        return { todos, index: ++prevState.index };
      });
    });
  };

  del = indexToRemove => {
    Api.del(this.state.todos[indexToRemove]).then(() =>
      this.setState(prevState => {
        const todos = prevState.todos.filter(
          (_, index) => index !== indexToRemove
        );
        return { todos };
      })
    );
  };

  update = (indexToUpdate, itemToUpdate) => {
    Api.replace(itemToUpdate.id, itemToUpdate).then(updatedItem => {
      this.setState(prevState => {
        const todos = prevState.todos.map((item, index) =>
          index === indexToUpdate ? itemToUpdate : item
        );
        return { todos };
      });
    });
  };

  //front
  submit = e => {
    e.preventDefault();

    if (this.state.act === 0) {
      this.add({ todo: this.refs.todo.value, done: false });
    } else {
      // update
      // let index = this.state.index;
      // todos[index].todo = todo;
      // todos[index].done = false;
    }
    this.refs.form.reset();
    this.refs.todo.focus();
  };

  remove = indexToRemove => {
    console.log(indexToRemove);
    this.del(indexToRemove);
  };

  edit = (indexToUpdate, itemToUpdate) => {
    this.update(indexToUpdate, itemToUpdate);
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
                {idx}. {todo.todo}
              </p>
              <button onClick={() => this.remove(idx)} className="list__button">
                Remove
              </button>
              <button
                onClick={() =>
                  this.edit(5, {
                    todo: "New todo item hue hue hue",
                    done: false,
                    id: 5
                  })
                }
                className="list__button"
              >
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
