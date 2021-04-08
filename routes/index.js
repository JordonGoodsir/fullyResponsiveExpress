var express = require('express');
var router = express.Router(); 
const {getTest,postTest} = require("../controller/indexController")

router.get('/', getTest); 

router.post("/", postTest)

module.exports = router;
