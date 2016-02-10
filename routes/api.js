var express = require('express');
var router = express.Router();

var Link = require('../app/models/link');
var Note = require('../app/models/note');

/* GET link */
/*router.get('/', function(req, res, next) {
  res.json({ message: 'test test test' });
});*/


//++++++++++++++++ Start Links ++++++++++++++++++
function getLinks(res){
    Link.find(function(err, links) {
        if (err)
            res.send(err);

        res.json(links);
    });
}
router
	.get('/links', function(req, res) {
        getLinks(res);
    })

    .get('/links/:link_id', function(req, res){
        Link.findById({
            _id :req.params.link_id
            }, function(err, link){
                if(err)
                    res.send(err);
                else
                    res.json(link);
        });
    })

    .put('/links/:link_id', function(req, res){
        Link.findById({
                _id: req.params.link_id
            }, function(err, link){
                if(err)
                    res.send(err);

                link.name=req.body.name;
                link.url=req.body.url;
                link.desc=req.body.desc;
                link.save(function(err){
                    if(err)
                        res.send(err);
                    getLinks(res);
                })
        })
    })

	.post('/links', function(req, res) {

        Link.create({
            name: req.body.name,
            url: req.body.url,
            desc: req.body.desc
        }, function(err, link){
            if(err)
                res.send(err);
            //res.send('OK');
            getLinks(res);
        });
        /*var link = new Link();
        link.name = req.body.name; 
        link.url = req.body.url;
        link.desc = req.body.desc; 

        link.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Link created!' });
        });*/
        
    })
    .delete('/links/:link_id', function(req, res){
        Link.remove({
            _id : req.params.link_id
        }, function(err, todo) {
            if (err)
                res.send(err);
            //res.send('OK');
            getLinks(res);

        });
    })


    ;
//++++++++++++++++ End Links ++++++++++++++++++

//++++++++++++++++ Start Notes ++++++++++++++++++

function getNotes(res){
    Note.find(function(err, notes) {
        if (err)
            res.send(err);

        res.json(notes);
    });
};
router
    .get('/notes', function(req, res) {
        getNotes(res);
    })

    .post('/notes', function(req, res) {

        Note.create({
            text: req.body.text
        }, function(err, note){
            if(err)
                res.send(err);
            //res.send('OK');
            getNotes(res);
        });
    })
    .delete('/notes/:note_id', function(req, res){
        Note.remove({
            _id : req.params.note_id
        }, function(err, note) {
            if (err)
                res.send(err);
            //res.send('OK');
            getNotes(res);

        });
    })


;
//++++++++++++++++ End Notes ++++++++++++++++++

module.exports = router;
