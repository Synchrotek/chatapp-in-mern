const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const app = express();
PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Yo bro! Anime is best");
})

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
})