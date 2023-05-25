const express = require('express');

const product = express.Router();

const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "P@ssw0rd!2023",
    database: "estore",
    port: 3306,
    multipleStatements: true
})

product.get("/productCategories", (req, res) => {

    pool.query("Select * from categories", (error, categories) => {
        if (error) {
            categorydata = error;
            res.status(500).send(categoryData);
        }
        categoryData = categories;
        res.status(200).send(categoryData);
    })

})

product.get("/getProduct", (req, res) => {
    let productData;

    pool.query("Select * from products", (error, rows) => {
        if (error) {
            res.status(500).send(categoryData);
        }
        productData = rows;
        res.status(200).send(productData);
    })

})


module.exports = product;