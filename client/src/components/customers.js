import React, { Component } from "react";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3100/api/customers")
      .then(res => res.json())
      .then(customers => {
        this.setState({ customers });
        console.log("Customers fetched...", customers);
      });
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer.id}>
              {customer.firstname} {customer.lastname}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
