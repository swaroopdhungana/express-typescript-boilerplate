import express from "express";

const app = express();
app.use('/', (req, res) => {
    res.send('<h1>Thanks for using this repo! Make sure to give it a star</h1>');
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});