const express = require('express');
const router = express.Router();
const products = require('../simDatabase'); // Simulation a Database

router.get('/products', (req, res) => {
  res.json(products);
});

router.post('/products', (req, res) => {
  const { name } = req.body;
  console.log('name:', name);
  if(name){
    products.push({
      id: products.length + 1,
      name
    });
    res.json('Successfully created');
  } else{
    res.json('Product no created');
  }
});

router.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  products.map( product => {
    if(product.id == id) product.name = name
  })
  res.json('Successfully updated');
});

router.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  products.splice(products.findIndex( product => { product.id == id } ), 1);
  res.json('Successfully deleted');
});

module.exports = router;