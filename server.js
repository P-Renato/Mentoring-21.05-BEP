import express from 'express';


const app = express()
const PORT = 8000;

app.use(express.json());

app.use(express.static('public'))

app.get('/message', (req,res)=>{
    res.json({message: 'Hello from Renato'})
})

app.listen(PORT, ()=>{ console.log('Server running on PORT ', PORT)})