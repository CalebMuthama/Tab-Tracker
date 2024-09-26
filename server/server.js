import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import users from "./routes/userRoutes.js";
import connectDB from "./config/dbConfig.js";
import mongoose from "mongoose";

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 8081;
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", users);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server is running on: ${PORT}`));
});
