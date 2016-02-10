/**
 * Created by Christian on 30.01.2016.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res){
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.render('index');
});

router.get('/links', function(req, res){
    res.render('index');
});

router.get('/kalender', function(req, res){
    res.render('index');
});

router.get('/notizen', function(req, res){
    res.render('index');
});

router.get('/dokument', function(req, res){
    res.render('index');
});

router.get('/chat', function(req, res){
    res.render('index');
});

module.exports = router;
