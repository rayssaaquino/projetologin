const express = require("express")
const fs = require("fs") //file system
const path = require("path") //caminho do arquinho
const bcrypt = require("bcript");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`Servidor rodando https://localhost:${port}`)
})

