const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("Hi there");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});