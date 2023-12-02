const express = require("express");

const PORT = 3000;

const app = express(); // create an express server object

app.get("/home", (request, response) => {
  // response.send("Hi there, welcome to get..");
  response.json({
    message: "OK get",
  });
});

app.post("/home", (request, response) => {
  // response.send("Hi there, welcome to post..");
  response.json({
    message: "OK post",
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
