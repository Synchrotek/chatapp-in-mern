// Tutorial TIme: 42.35

import dotenv from 'dotenv';
import express from 'express';
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/dbConnect.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Yo bro! Anime is best");
});

app.listen(PORT, () => {
    // connectToMongoDB()
    console.log(`Server running: http://localhost:${PORT}`);
});