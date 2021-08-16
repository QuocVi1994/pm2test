const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello");
});

app.get("/profile", (request, response) => {
  response.send("Profile Page");
});

const serverCallback = () => {
  // console.log("Server Running on port: " + server.address().port) + ".";
  console.log(`Server Running on port: ${server.address().port}.`);
};

const server = app.listen("8080", serverCallback);
