import express from "express";
import { matchRouter } from "./routes/matches.routes.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use("/matches", matchRouter);

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
