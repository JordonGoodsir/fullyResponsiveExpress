var express = require('express');
var router = express.Router(); 
const {getWords, postStory} = require("../controller/storyController")

router.get('/', getWords);  

router.post ("/", postStory)

module.exports = router;
