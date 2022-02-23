const db = require('../config/db.js');

exports.findIdUser = function(req, res, next) {
    let email = 0;
    let str;
    for (let i = 0; i < req.params.id.length; i++) {
        if (req.params.id[i] == '@') {
            email = 1;
            break;
        }
    }
    if (email == 0)
        str = "id";
    else
        str = "email";
    db.findData("user", str, req.params.id, function getReturn(return_value){
        if (return_value == 0)
            res.json({msg: "Not found"});
        else
            next();
    })
}

exports.findIdComment = function(req, res, next) {
    db.findData("comment", "id", req.params.id, function getReturn(return_value){
        if (return_value == 0)
            res.json({msg: "Not found"});
        else
            next();
    })
}

exports.findIdNotes = function(req, res, next) {
    db.findData("notes", "id", req.params.id, function getReturn(return_value){
        if (return_value == 0)
            res.json({msg: "Not found"});
        else
            next();
    })
}