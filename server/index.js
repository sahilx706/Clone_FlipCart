import express from 'express';
import Connection from './database/db.js';

const app = express();

const PORT = 8000;

app.get('/', (req, res)=>{
    res.send("<h1>Hello, I am from Backend</h1>")
})

// db connection
Connection();

app.listen(PORT, ()=>{
    console.log(`Server Started successfully on port ${PORT}`);
})