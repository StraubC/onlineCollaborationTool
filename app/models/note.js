/**
 * Created by Christian on 08.02.2016.
 */
var mongoose = require('mongoose');
/*var Schema = mongoose.Schema;

 var LinkSchema = new Schema({
 name: String,
 url: String,
 desc: String
 });*/

/*
 module.exports = mongoose.model('link', LinkSchema);*/
module.exports = mongoose.model('notes', {
    text : {type : String, default: ''}
});