const fetch = require('node-fetch');  
const Story = require("../services/database/schemas/storySchema")


const getWords = async (req,res) =>{ 
    await fetch("https://random-words-api.vercel.app/word")     
    // await fetch("https://pokeapi.co/api/v2/pokemon/ditto")    
    .then((response) => response.json()) 
    .then((data) =>{   
        res.status(200); 
        console.log(data[0].word)
        res.send(data[0].word)
    }) 
    .catch((err) => {
        console.log(err);
        res.status(500);
        res.send("error");
      });    

}  

const postStory = (req,res) =>{  
     

    const story = new Story({ 
        title: req.body.title, 
        wordPrompts: req.body.wordPrompts, 
        body: req.body.body
    }) 

    story.save() 
    .then((data)=>{ 
        console.log(data) 
        res.send(data)
    }) 
    .catch((error)=>{  
        console.log(error)
        res.status(500) 
        res.send("error")
    }) 

}

  
module.exports = { 
    getWords, 
    postStory
  };