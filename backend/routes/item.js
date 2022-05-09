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
  conn.query(`SELECT ID, NAME, BRIEF, KCAL, AMOUNT, IMAGEPATH FROM ITEM_INFO WHERE TYPE = '${type}'`, function(err, rows){
    if(err) throw err;
    res.send(rows);
  });
});

router.get('/specific/:id', function(req, res){
  const id = parseInt(req.params.id, 10);
  
  conn.query(`SELECT ID, NAME, BRIEF, HOT, COLD, KCAL, AMOUNT, SUGAR, PROTEIN, FAT, CAFFEINE, IMAGEPATH, ITEMLIKE, ITEMDISLIKE FROM ITEM_INFO WHERE ID = '${id}'`, function(err, rows){
    if(err) throw err;
    res.send(rows[0]);
  });
})

router.put('/specific/:id/like', function(req, res){
  const id = parseInt(req.params.id, 10);
  conn.query(`UPDATE cafeterrace.ITEM_INFO SET ITEMLIKE = (SELECT A.ITEMLIKE FROM (SELECT ITEMLIKE FROM cafeterrace.ITEM_INFO WHERE ID = '${id}') AS A) + 1 WHERE ID = '${id}'`, function(err){
    if(err) throw err;
    res.send('success');
  })
})
router.put('/specific/:id/like', function(req, res){
  const id = parseInt(req.params.id, 10);
  conn.query(`UPDATE cafeterrace.ITEM_INFO SET ITEMDISLIKE = (SELECT A.ITEMDISLIKE FROM (SELECT ITEMDISLIKE FROM cafeterrace.ITEM_INFO WHERE ID = '${id}') AS A) + 1 WHERE ID = '${id}'`, function(err){
    if(err) throw err;
    res.send('success');
  })
})

module.exports = router;