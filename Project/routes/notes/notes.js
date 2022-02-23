const middleware = require('../../middleware/auth.js')
const notFound = require('../../middleware/notFound.js')
const notesQuerry = require('./notes.query.js')
const express = require('express')
const bodyParser = require('body-parser')
let app = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', middleware.authenticateToken, function (req, red) {
    notesQuerry.addNotes(req.body, res);
})

app.get('/', middleware.authenticateToken, notFound.findIdNotes, function (req, res) {
    notesQuerry.viewAllUserNotes(req.params.id, res);
})

app.get('/:id', middleware.authenticateToken, notFound.findIdNotes, function (req, res) {
    notesQuerry.viewNotesInfo(req.params.id, res);
})

app.put('/:id', middleware.authenticateToken, notFound.findIdNotes, function (req, res) {
    noteQuerry.updateNoteInfo(req.params.id, req.body, res);
})

app.delete('/:id', middleware.authenticateToken, notFound.findIdNotes, function (req, res) {
    notesQuerry.deleteNotes(req.params.id, res);
})

module.exports = app