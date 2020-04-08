import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express();
const PORT = 4000;

const handleListen = () => console.log(`Listening on: localhost:${PORT}`);

const handleHome = (req, res) => res.send("Respond success");
const handlePlus = (req, res) => res.send("Success again");

//middleware에서 res.send를 실행하면 연결을 끊어버림
const middleWare = (req, res, next) => res.send("Not Happening");

app.use(cookieParser()); // understand cookie from user to use session
app.use(bodyParser.json()); //access to request obj that has form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/plus", handlePlus);

app.listen(4000, handleListen);
