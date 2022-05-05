const express = require('express');
const router = express.Router();
var mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'user001',
  password: '1234',
  database: 'cafeterrace',
  insecureAuth: true
})

// DB Connect
conn.connect(function(err){
  if (err){
    console.log('mysql connection error');
    console.log(err);
    throw err;
  }
})


router.get('/:type', function(req, res){
  const type = req.params.type;
  conn.query(`SELECT ID, NAME, BRIEF, KCAL, AMOUNT FROM ITEM_INFO WHERE TYPE = '${type}'`, function(err, rows){
    if(err) throw err;
    res.send(rows);
  });
});

router.get('/specific/:id', function(req, res){
  const id = parseInt(req.params.id, 10);
  
  conn.query(`SELECT ID, NAME, BRIEF, HOT, COLD, KCAL, AMOUNT, SUGAR, PROTEIN, FAT, CAFFEINE FROM ITEM_INFO WHERE ID = '${id}'`, function(err, rows){
    if(err) throw err;
    res.send(rows[0]);
  });
})

module.exports = router;