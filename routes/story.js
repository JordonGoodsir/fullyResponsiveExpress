var express = require('express');
var router = express.Router(); 
const {getWords} = require("../controller/storyController")

router.get('/', getWords);  

module.exports = router;
