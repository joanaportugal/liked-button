const express = require("express");
const app = express();
const port = 3002;

const genRandomBool = () => Boolean(Math.random() >= 0.5);

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  return res.send(genRandomBool());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
