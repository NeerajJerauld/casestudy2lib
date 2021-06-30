const express = require('express');
const deleteauthorRouter = express.Router();
const Authordata = require('../model/Authordata');
const fs = require('fs');


deleteauthorRouter.use(express.static('./public'));

var updatedetail = [];
function router(nav) {


    deleteauthorRouter.get('/:author', function (req, res) {


        var query = { "author": req.params.author };
        console.log(req.params.author);


        console.log("Delete vlaue----");
        Authordata.findOneAndDelete(
            { author: req.params.author },
            function (err, result) {
                if (err) {
                    res.send(err);
                } else {

                 console.log("--------------After delete"+result);

                    res.redirect("/listauthorsforupdate");

                }
            }
        );
        console.log("After delete.....")


    });




    return deleteauthorRouter;

}
module.exports = router;