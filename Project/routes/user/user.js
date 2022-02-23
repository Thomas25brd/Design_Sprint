const middleware = require('../../middleware/auth.js')
const notFound = require('../../middleware/notFound.js')
const userQuerry = require('./user.query.js')
const express = require('express')
const bodyParser = require('body-parser')
let app = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));

app.put('/:id', middleware.authenticateToken, notFound.findIdUser, function (req, res) {
    userQuerry.updateUserInfo(req.param.id, rep.body, res);
})

app.delete('/:id', middleware.authenticateToken, notFound.findIdUser, function (req, res) {
    userQuerry.deleteUser(req.params.id, res);
})

module.exports = app