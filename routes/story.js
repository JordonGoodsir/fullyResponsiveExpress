var express = require('express');
var router = express.Router(); 
const {getWords, postStory, getStory} = require("../controller/storyController")

router.get('/', getWords);  

router.post ("/", postStory) 

router.get("/getStory", getStory)

module.exports = router;
