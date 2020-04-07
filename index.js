import express from "express";
const app = express();
const PORT = 4000;

const handleListen = () => console.log(`Listening on: localhost:${PORT}`);

const handleHome = (req, res) => res.send("Respond success");

const handlePlus = (req, res) => res.send("Success again");

app.get("/", handleHome);
app.get("/plus", handlePlus);
// if someone tries to "get" to "/"
// After 'get' request -> should be 'respond' request
// respond can be done by HTML, console, error, ...
// otherwise, loading forever..
app.listen(4000, handleListen);
