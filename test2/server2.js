import express, { json, urlencoded } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
const PORT = 9000;

app.get('/', (req,res)=>{
    res.send('hi')
})


app.listen(PORT)