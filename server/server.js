import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.json({
    message: "Hello mama I made it",
  });
});
console.log("Hello world");
app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
