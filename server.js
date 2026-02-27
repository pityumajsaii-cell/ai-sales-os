import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.json({ status: "Titanium AI Enterprise Running" });
});

app.listen(PORT, () => {
  console.log("🚀 TITANIUM ENTERPRISE RUNNING ON " + PORT);
});
