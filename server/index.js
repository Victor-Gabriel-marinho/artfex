import express from "express";

const app = express();

app.get("/", (req,ress) => {
    return {"info": "Hello World!"}
});

app.listen(5000, () => console.log("Express started at http://127.0.0.1:5000"));