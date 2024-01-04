import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './defaultData.js';

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
DefaultData();