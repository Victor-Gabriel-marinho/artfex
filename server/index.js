import express from "express";
import cors from "cors"
import userRoutes from "./routers/user.js";

const app = express();
app.use(cors());

app.use("/", userRoutes);

app.listen(5000, () => console.log("Express started at http://127.0.0.1:5000"));