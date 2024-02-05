// Tutorial TIme: 1.10.00

import dotenv from 'dotenv';
import express from 'express';
import authRoutes from "./routes/auth.routes.js"
import cookieParser from 'cookie-parser';
import messageRoutes from "./routes/messages.routes.js"
import connectToMongoDB from "./db/dbConnect.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
    res.send("Yo bro! Anime is best");
});

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server running: http://localhost:${PORT}`);
});