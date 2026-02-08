import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./utils.js";
import postRoutes from "./routes/post.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //middleware to parse URL-encoded bodies

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Based Access API");
});

app.use("/api/posts", postRoutes);

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
