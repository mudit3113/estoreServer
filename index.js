const express = require('express');
const app = express();
const mysql = require('mysql');
const product = require('./Routes/product');
const cors = require('cors');

app.use(cors());

app.use("/", product);


const PORT = 5001;
//creating the server 
app.listen(PORT, () => {
    console.log("App is running on the port:", PORT);
})