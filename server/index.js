import express from 'express';
import cors from 'cors';

const port = 8080;
const app = express();

app.use(cors());

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})

app.post('/signin', (req, res) => {
    res.send('Everything is ok')
})