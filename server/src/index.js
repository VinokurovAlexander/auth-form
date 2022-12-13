import express from 'express';
import cors from 'cors';

import { initDb } from "./db.js";
import { authRouter } from './auth.js';

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

initDb();

app.listen(port, () => {
    console.log(`✅  App listening on port ${port}`);
})

app.use(authRouter);