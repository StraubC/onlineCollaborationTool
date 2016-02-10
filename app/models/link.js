var mongoose = require('mongoose');
/*var Schema = mongoose.Schema;

var LinkSchema = new Schema({
	name: String,
	url: String,
	desc: String
});*/

/*
module.exports = mongoose.model('link', LinkSchema);*/
module.exports = mongoose.model('links', {
	name : {type : String, default: ''},
	url : {type : String, default:'' },
	desc : {type : String, default: ''}
});