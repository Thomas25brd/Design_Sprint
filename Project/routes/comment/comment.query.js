const db = require("../../config/db.js")

exports.viewAllUserComment = (res) => {
    db.printInfoComment("comment", res);
}

exports.addComment = (body, res) => {
    db.addComment(body, res, function getReturn(id) {
        db.printInfoComment("todo WHERE id = " + id, res);
    })
}

exports.deleteComment = (id, res) => {
    db.deleteComment(id, res);
}

exports.viewCommentInfo = (id, res) => {
    db.printInfoComment("todo WHERE id = " + id, res);
}
