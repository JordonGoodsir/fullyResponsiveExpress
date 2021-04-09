const fetch = require('node-fetch');


const getWords = async (req,res) =>{ 
    const response =  await fetch("https://random-words-api.vercel.app/word")  
    const word = await response.json() 
    console.log(word)  
    return word
} 

  
module.exports = { 
    getWords
  };