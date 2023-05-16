import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req, res):void => {
    res.send('<h1>Thanks for using this repo! Make sure to give it a star</h1>');
});

app.listen(8000, () => console.log("server started on http://localhost:8000/"));
