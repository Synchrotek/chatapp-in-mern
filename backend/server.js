import dotenv from 'dotenv';
import express from 'express';
import authRoutes from "./routes/auth.routes.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Yo bro! Anime is best");
})

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
})