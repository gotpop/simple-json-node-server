import cors from 'cors'
import express from 'express'
import { shopItems } from './data/shop.js'

const app = express();
const port = process.env.PORT || 9000;

app.get("/", cors(), (request, response) => {
    response.json(shopItems);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});