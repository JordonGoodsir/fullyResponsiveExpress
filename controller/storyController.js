const fetch = require('node-fetch');


const getWords = async (req,res) =>{ 
    // await fetch("https://random-words-api.vercel.app/word")     
    // // await fetch("https://pokeapi.co/api/v2/pokemon/ditto")    


    // .then((response) => response.json()) 
    // .then((data) =>{   
    //     res.status(200);
    //     console.log(data[0].word) 
    //     return "HELLO"
    // }) 
    // .catch((err) => {
    //     console.log(err);
    //     res.status(500);
    //     res.send("error");
    //   });   


    return "hello"

   

} 

  
module.exports = { 
    getWords
  };