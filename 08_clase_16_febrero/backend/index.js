// console.log("Hola Mundo");
// // const fetch = require("node-fetch");
// fetch("https://api.preciodelaluz.org/v1/prices/all?zone=PCB")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const port = 3000;

async function getData() {
  const response = await fetch(
    "https://api.preciodelaluz.org/v1/prices/all?zone=PCB"
  );
  const data = await response.json();
  return data;
}

app.use(cors());

// GET: All Data
app.get("/api", (req, res) => {
  getData().then((data) => {
    res.json(data);
  });
});

app.listen(port, () => {
  console.log("Server exposed in " + "http://localhost:3000/api");
});
