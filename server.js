const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const customers = [
  {
    firstname: "Jack",
    lastname: "Davis",
    age: 25,
    id: 0
  },
  {
    firstname: "Mary",
    lastname: "Taylor",
    age: 37,
    id: 1
  },
  {
    firstname: "Patrycja",
    lastname: "Thomas",
    age: 17,
    id: 2
  },
  {
    firstname: "Peter",
    lastname: "Thomas",
    age: 17,
    id: 3
  }
];

//getAll
const getAll = (req, res) => res.json(customers);
app.get("/api/customers", getAll);

//getOne
const getOne = (req, res) => {
  const customer = customers[req.params.id];
  res.json(customer);
};
app.get("/api/customers/:id", getOne);

//post
const create = (req, res) => {
  let newCustomer = req.body;
  customers[newCustomer.id] = newCustomer;
  res.json(newCustomer);
};
app.post("/api/customers", create);

//put
const update = (req, res) => {
  const id = parseInt(req.params.id);
  let updatedCustomer = req.body;
  if (customers[id] != null) {
    customers[id] = updatedCustomer;
    res.json(updatedCustomer);
  } else {
    res.json(updatedCustomer);
  }
};
app.put("/api/customers/:id", update);

//del
const remove = (req, res) => {
  const deleteCustomer = customers[req.params.id];
  delete customers[req.params.id];
  res.json(deleteCustomer);
};
app.delete("/api/customers/:id", remove);

const port = 3100;
const srv = app.listen(port, () => {
  const host = srv.address().address;
  const port = srv.address().port;

  console.log("host", host, "port", port);
  return `Server running on port ${host} ${port}`;
});
