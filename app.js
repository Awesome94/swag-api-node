import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

const api_prefix = 'api/v1' 

app.post(`${api_prefix}/register`, (req, res)=>{

});

app.post(`${api_prefix}/login`, (req, res)=>{

});