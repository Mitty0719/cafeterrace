const express = require('express');
const router = express.Router();
const items = require('../item.json');

router.get('/', function(req, res){
  res.send(items);
});

router.get('/:id', function(req, res){
  const id = parseInt(req.params.id, 10);
  const item = items.filter(item => item.id === id);
  console.log(id, item);
  res.send(item);
})

module.exports = router;