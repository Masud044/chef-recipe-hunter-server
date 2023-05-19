const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const recipe = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/recipe',(req,res)=>{
     res.send(recipe)
})

app.get('/recipe/:id', (req, res) => {
  const id = parseInt( req.params.id);
  
  const chef = recipe.find(r => r.id === id);
  res.send(chef)
 
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})