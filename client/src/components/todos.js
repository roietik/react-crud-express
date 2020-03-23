import React, { Component } from "react";
import Api from "../api/api";

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      loading: true,
      act: 0,
      next: "",
      edit: "",
      error: ""
    };
  }

  componentDidMount() {
    this.refs.todo.focus();
    this.refs.todo.focus();

    Api.getAll()
      .then(todos => this.setState({ todos }))
      .then(() => this.setState({ next: this.state.todos.length }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  //api
  add = item => {
    Api.add({ ...item, id: this.state.next }).then(addedItem => {
      this.setState(prevState => {
        const todos = [...prevState.todos, addedItem];
        return { todos, next: ++prevState.next };
      });
    });
  };

  del = indexToRemove => {
    Api.del(indexToRemove).then(() =>
      this.setState(prevState => {
        const todos = prevState.todos.filter(
          (_, index) => index !== indexToRemove
        );
        return { todos };
      })
    );
  };

  update = (indexToUpdate, itemToUpdate) => {
    console.log(itemToUpdate);
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
      this.update(this.state.edit, {
        todo: this.refs.todo.value,
        done: false,
        id: this.state.edit
      });
    }

    this.setState({
      act: 0
    });

    this.refs.form.reset();
    this.refs.todo.focus();
  };

  remove = indexToRemove => {
    this.del(indexToRemove);
  };

  edit = i => {
    let data = this.state.todos[i];
    this.refs.todo.value = data.todo;

    this.setState({
      act: 1,
      edit: i
    });

    this.refs.todo.focus();
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
              <button onClick={() => this.edit(idx)} className="list__button">
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
