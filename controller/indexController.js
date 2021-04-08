const getTest = (req, res) => {
      console.log(req)
  }; 
 

  const postTest = (req, res) => {
 console.log(req.body.entry)  
 res.sendStatus(200);

  }; 

  
module.exports = { 
    getTest, 
    postTest
  };