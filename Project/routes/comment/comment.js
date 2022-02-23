const middleware = require('../../middleware/auth.js')
const notFound = require('../../middleware/notFound.js')
const commentQuerry = require('./comment.query.js')
const express = require('express')
const bodyParser = require('body-parser')
let app = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', middleware.authenticateToken, function (req, res) {
    commentQuerry.addComment(req.body, res);
})

app.get('/', middleware.authenticateToken, notFound.findIdComment, function (req, res) {
    commentQuerry.viewAllUserComment(res);
})

app.get('/:id', middleware.authenticateToken, notFound.findIdComment, function (req, res) {
    commentQuerry.viewCommentInfo(req.params.id, res);
})

app.delete('/:id', middleware.authenticateToken, notFound.findIdComment, function (req, res) {
    commentQuerry.deleteComment(req.params.id, res);
})

module.exports = app