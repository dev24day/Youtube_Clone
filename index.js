import express from "express";
const app = express();
const PORT = 4000;

const handleListen = () => console.log(`Listening on: localhost:${PORT}`);

const handleHome = (req, res) => res.send("Respond success");
const handlePlus = (req, res) => res.send("Success again");

const handleMiddle = (req, res, next) => {
  console.log("I am Middleware");
  next();
};

app.use(handleMiddle);
//Put as much as Middlewares with app.use()
app.get("/", handleHome);
app.get("/plus", handlePlus);

app.listen(4000, handleListen);
