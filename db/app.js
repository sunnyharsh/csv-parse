const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const csv = require('csv-parser')
const fs = require('fs')
const multer= require('multer')
 var upload=multer({dest:'uploads/'})
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sequelize = require('./utils/database');
const productContorller=require("./controllers/product.controller")

app.post('/file' , upload.single('mydata'), productContorller.product)
app.post('/fetch' , productContorller.productFetch)

sequelize
	.sync()
	.then((res) => {
		app.listen(1234, () => {
			console.log('server start on 1234');
		});
	})
	.catch((err) => {
		console.error(err);
	});