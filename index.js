const express = require("express");
var cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 0, name: "jhankar mahbub", email: "jhankar@gmail.com" },
  { id: 1, name: "sumit saha", email: "sumitsaha@gmail.com" },
  { id: 2, name: "anisul islam", email: "anisulislam@gmail.com" },
  { id: 3, name: "hm nayem", email: "hmnayem@gmail.com" },
  { id: 4, name: "jonas schemedtman", email: "jonasschemedtman@gmail.com" },
  { id: 5, name: "angela yui", email: "angelayui@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Bye world! dure giya morr");
});

app.get("/users", (req, res) => {
  // const searchResult = users.filter((user) =>
  //   user.name.toLowerCase().includes(req.query.search)
  // );
  // res.send(searchResult);
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("post hitted");
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const currentUser = users.find((user) => user.id == id);
  res.send(currentUser);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
