var express = require('express');
var router = express.Router();
var today = require('../models/today.js');
var tomorrow = require('../models/tomorrow.js');
var thisWeek = require('../models/thisWeek.js');
var thisMonth = require('../models/thisMonth.js');

// get route to index
router.get("/", function(req, res) {
  res.redirect("/todo");
});

router.get('/todo', function(req, res) {    
    today.all(function(todayData) {
        res.render('index', {today_data : todayData});
    }); 
});

// router.get('/todo', function(req, res) {
//     tomorrow.all(function(tomorrowData) {
//         res.render('index', {tomorrow_data : tomorrowData});
//     });
// });

router.post('/todo/today', function(req,res) {
	today.create(req.body.todo_name, function(data){
        console.log(data);
		res.redirect('/');
	});
});

// router.post('/todo/tomorrow', function(req,res) {
// 	tomorrow.create(req.body.todo_name, function(data){
//         console.log(data);
// 		res.redirect('/');
// 	});
// });

// router.post('/todo/thisweek', function(req,res) {
// 	thisWeek.create(req.body.todo_name, function(data){
//         console.log(data);
// 		res.redirect('/');
// 	});
// });

// router.post('/todo/thismonth', function(req,res) {
// 	thisMonth.create(req.body.todo_name, function(data){
//         console.log(data);
// 		res.redirect('/');
// 	});
// });

router.put("/todo/update", function(req, res) {

    today.update(req.body.todo_id, function(result){
        console.log(result)
        res.redirect('/')
    });

    // tomorrow.update(req.body.todo_id, function(result){
    //     console.log(result)
    //     res.redirect('/')
    // });

});
module.exports = router;