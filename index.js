const express = require("express");
const app = express();
const PORT = 4000;

function handleListen() {
  console.log(`Listening on: localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Respond success");
  console.log("Hi from home");
}
function handlePlus(req, res) {
  res.send("Success again");
  console.log("Hi plus");
}
app.get("/", handleHome);
app.get("/plus", handlePlus);
// if someone tries to "get" to "/"
// After 'get' request -> should be 'respond' request
// respond can be done by HTML, console, error, ...
// otherwise, loading forever..
app.listen(4000, handleListen);
