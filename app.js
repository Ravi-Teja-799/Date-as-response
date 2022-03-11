const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send(`11-03-2022`);
});

module.exports = app;
