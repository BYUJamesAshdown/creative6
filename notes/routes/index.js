var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Note = mongoose.model('Note');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
	res.render('login');
});

router.get('/notes', function(req, res, next) {
	console.log(req.query);
	Note.findOne(req.query, function(err, note) {
		if (err) return next(err);
		res.json(note);
	});
});

router.post('/notes', function(req, res, next) {
	Note.findOne(req.body)
		.then(function success(data) {
			if (data) {
				console.log(data);
				return res.sendStatus(200);
			}

			res.sendStatus(404);
		});
});

module.exports = router;


/*
if (err) return next(err);
if (!note) {
	var newNote = new Note(req.body);
	newNote.save(function(err, note) {
		if (err) return next(err);
		res.json(note);
	});
}
console.log(note);
res.json(note);
*/
