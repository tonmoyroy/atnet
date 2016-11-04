var express = require('express');
var router = express.Router();

var itemlist = [{id:1,desc:'ITEM 1'}, {id:2,desc:'ITEM 2'}];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My First Node JS Website',  itemlist});
});

router.post('/add',function(req,res){
    var val = req.body.item_name;
    itemlist.push({id:itemlist.length+1,desc:val });
    res.render('index', { title: 'My First Node JS Website',  itemlist});
});

module.exports = router;
