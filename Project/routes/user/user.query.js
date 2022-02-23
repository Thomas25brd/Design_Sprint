const db = require("../../config/db.js");
const bcrypt = require('bcryptjs');

exports.updateUserInfo = (id, body, res) => {
    bcrypt.hash(body.password, 10, function(err, hash) {
        db.updateUser(id, body, hash, res);
    });
    db.printInfo("user WHERE id = " + id, res);
}

exports.deleteUser = (id, res) => {
    db.deleteUser(id, res);
}