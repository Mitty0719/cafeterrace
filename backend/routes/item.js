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


router.get('/', function(req, res){
<<<<<<< HEAD
  conn.query('SELECT ID, NAME, BRIEF, KCAL, AMOUNT FROM ITEM_INFO', function(err, rows){
=======
  conn.query('SELECT NAME, DESCRIPTION, KCAL, AMOUNT FROM ITEM_INFO', function(err, rows){
>>>>>>> 7915519f4cc17534ba7fd0feef0259506b2ea636
    if(err) throw err;
    res.send(rows);
  });
});

router.get('/:id', function(req, res){
  const id = parseInt(req.params.id, 10);
  
<<<<<<< HEAD
  conn.query(`SELECT ID, NAME, BRIEF, HOT, COLD, KCAL, AMOUNT, SUGAR, PROTEIN, FAT, COFFEINE FROM ITEM_INFO WHERE ID = '${id}'`, function(err, rows){
=======
  conn.query(`SELECT NAME, DESCRIPTION, HOT, COLD, KCAL, AMOUNT, SUGAR, PROTEIN, FAT, COFFEINE FROM ITEM_INFO WHERE ID = '${id}'`, function(err, rows){
>>>>>>> 7915519f4cc17534ba7fd0feef0259506b2ea636
    if(err) throw err;
    res.send(rows[0]);
  });
})

module.exports = router;