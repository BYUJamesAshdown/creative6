var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
	uid: String,
	text: String,
});

mongoose.model('Note', NoteSchema);