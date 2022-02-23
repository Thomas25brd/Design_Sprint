const db = require("../../config/db.js")

exports.viewAllUserNotes = (res) => {
    db.printInfoNotes("notes", res);
}

exports.updateNotesInfo = (id, body, res) => {
    db.updateNotes(id, body, res);
}

exports.addNotes = (body, res) => {
    db.addNotes(body, res, function getReturn(id) {
        db.printInfoNotes("notes WHERE id = " + id, res);
    })
}

exports.deleteNotes = (id, res) => {
    db.deleteNotes(id, res);
}

exports.viewNotesInfo = (id, res) => {
    db.printInfoNotes("notes WHERE id = " + id, res);
}


exports.viewNotesInfo = (id, res) => {
    db.printInfoNotes("notes WHERE id = " + id, res);
}
