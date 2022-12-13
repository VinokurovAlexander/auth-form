import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const port = 8080;
const app = express();

app.use(cors());

app.listen(port, () => {
    console.log(`✅  App listening on port ${port}`);
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL).then(() => {
    console.log('✅  Successfully connected to database');
}).catch(e => {
    console.log(`❌  Something went wrong. ${e.message}`)
})

app.post('/signin', (req, res) => {
    res.send('Everything is ok')
})