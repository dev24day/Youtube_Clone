const express = require("express");
const app = express();
const PORT = 4000;

function handleListen(){
    console.log(`Listening on: localhost:${PORT}`);
}
app.listen(4000, handleListen);