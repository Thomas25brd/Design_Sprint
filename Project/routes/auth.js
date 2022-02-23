require ('dotenv').config({path: '../.env'});
const db = require("../config/db.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

function generateAccessToken(email) {
    return jwt.sign(email, process.env.SECRET, { expiresIn: '1800s' });
}

exports.register = (body, res) => {
    if (body.email == undefined || body.name == undefined || body.firstname == undefined || body.password == undefined)
        return res.json({msg: "Invalid Credentials"});
    db.findData("user", "email", body.email, function getReturn(return_value){
        if (return_value == 1)
            res.json({msg: "account already exists"});
        else {
            bcrypt.hash(body.password, 10, function(err, hash) {
                db.addUser(body, hash);
            });
            const token = generateAccessToken({email: body.email});
            res.json({token: token});
        }
    })
}

exports.login = (body, res) => {
    db.findData("user", "email", body.email, function getReturn(return_value) {
        if (return_value == 1) {
            db.compareData("user", "password", body.email, function getReturn(return_value) {
                if (return_value == 0)
                    res.json({msg: "Invalid Credentials"});
                else {
                    const token = generateAccessToken({email: body.email});
                    res.json({token: token});
                }
            }, body.password)
        } else
            res.json({msg: "Invalid Credentials"});
    });
}