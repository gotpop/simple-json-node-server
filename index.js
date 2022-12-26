import cors from 'cors'
import express from 'express'
import { shopItems } from './data/shop.js'

const app = express();
const port = process.env.PORT || 9000;

app.use(cors())

app.get("/", (request, response) => {
    response.json(shopItems);
});

app.listen(port, () => {
    console.log(`JSON server listening at http://localhost:${port}`);
});