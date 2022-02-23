require ('dotenv').config({path: './.env'});
const bcrypt = require ('bcryptjs');
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYQSL_DATABASE,
});
const notFound = require('../middleware/notFound.js');

db.connect(function(err) {
  console.log("Connecté à la base de données MySQL!");
  db.query("USE kohMantla;", function(err) {
    if (err) throw err;
  });

  function printDate(date_ob) {
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = ("0" + (date_ob.getHours())).slice(-2);
    let minutes = ("0" + (date_ob.getMinutes())).slice(-2);
    let seconds = ("0" + (date_ob.getSeconds())).slice(-2);
    return (year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds)
  }

  exports.printInfo = function(id, res) {
    db.query(`SELECT * FROM ${id};`, function(err, result) {
      if (err) throw err;
      if (result.length == 1)
        res.json({ id : String(result[0].id), email: result[0].email, password: result[0].password, created_at: printDate(result[0].created_at), firstname: result[0].firstname, name: result[0].name});
      else {
        var data = [];
        for (let i = 0; i < result.length; i++)
          data.push({ id: String(result[i].id), email: result[i].email, password: result[i].password, created_at: printDate(result[i].created_at), firstname: result[i].firstname, name: result[i].name})
        res.json(data);
      }
    });
  }

  exports.printInfoComment = function(id, res) {
    db.query("SELECT * FROM " + id + ";", function(err, result) {
      if (err) return res.json({msg: "internal server error"});
      if (result.length == 1)
        res.json({ id: String(result[0].id), title: result[0].title, description: result[0].description, created_at: printDate(result[0].created_at), due_time: printDate(result[0].due_time), user_id: String(result[0].user_id), status: result[0].status});
      else {
        var data = [];
        for (let i = 0; i < result.length; i++)
          data.push({ id: String(result[i].id), title: result[i].title, description: result[i].description, created_at: printDate(result[i].created_at), due_time: printDate(result[i].due_time), user_id: String(result[i].user_id), status: result[i].status});
        res.json(data);
      }
    });
  }

  exports.printInfoNotes = function(id, res) {
    db.query("SELECT * FROM " + id + ";", function(err, result) {
      if (err) return res.json({msg: "internal server error"});
      if (result.length == 1)
        res.json({ id: String(result[0].id), title: result[0].title, description: result[0].description, created_at: printDate(result[0].created_at), due_time: printDate(result[0].due_time), user_id: String(result[0].user_id), status: result[0].status});
      else {
        var data = [];
        for (let i = 0; i < result.length; i++)
          data.push({ id: String(result[i].id), title: result[i].title, description: result[i].description, created_at: printDate(result[i].created_at), due_time: printDate(result[i].due_time), user_id: String(result[i].user_id), status: result[i].status});
        res.json(data);
      }
    });
  }

  exports.deleteUser = function (id, res) {
    db.query("DELETE FROM user WHERE id = " + id + ";", function(err, result) {
      if (err) return res.json({msg: "internal server error"});
      res.json({ msg: 'successfully deleted record number : ' + id});
    });
  }

  exports.addUser = function (body, password) {
    db.query(`INSERT INTO user (email, password, name, firstname) VALUES ('${body.email}', '${password}', '${body.name}', '${body.firstname}');`);
  }

  exports.updateUser = function (id, body, password, res) {
    db.query(`UPDATE user SET email='${body.email}', password='${password}', name='${body.name}', firstname='${body.firstname}' WHERE id = '${id}';`, function(err, result) {
      if (err) return res.json({msg: "internal server error"});
    });
  }

  exports.findData = function (table, field, id, callback) {
    db.query(`SELECT ${field} FROM ${table} WHERE ${field} = '${id}';`, function(err, result) {
      if (err) return res.json({msg: "internal server error"});
      if (result.length > 0)
        callback(1);
      else
        callback(0);
    });
  }

  exports.compareData = function (table, field, id, callback, password) {
    db.query(`SELECT ${field} FROM ${table} WHERE email = '${id}';`, function(err, result) {
      if (err) return res.json({msg: "internal server error"});
      bcrypt.compare(password, result[0].password, function(err, resultCrypt) {
        if (resultCrypt == true)
          callback(1);
        else
          callback(0);
    });
    })
  }

  exports.retrieveId = function(email, callback) {
    db.query(`SELECT id FROM user WHERE email='${email}'`, function(err, result) {
      if (err) return res.json({msg: "internal server error"});
      callback(result[0].id);
    })
  }

  exports.updateNotes = function (id, body, res) {
    db.query(`UPDATE notes SET title='${body.title}', description='${body.description}', due_time='${body.due_time}', user_id='${body.user_id}', status='${body.status}' WHERE id = '${id}';`, function(err, result) {
      if (err) throw err;
      res.json({title: body.title, description: body.description, due_time: body.due_time, user_id: body.user_id, status: body.status});
    });
  }

  exports.addNotes = function (body, res, callback) {
    let str;
    if (body.status == undefined)
      str =  String(`INSERT INTO notes (title, description, due_time, user_id) VALUES ('${body.title}', '${body.description}', '${body.due_time}', '${body.user_id}');`);
    else
      str = String(`INSERT INTO notes (title, description, due_time, user_id, status) VALUES ('${body.title}', '${body.description}', '${body.due_time}', '${body.user_id}', '${body.status}');`);
    db.query(str, function(err, result) {
      if (err) return res.json({msg: "internal server error"});
    });

    db.query(`SELECT id FROM notes ORDER BY id DESC LIMIT 1;`, function(err, result) {
      if (err) return res.json({msg: "internal server error"});
      if (result[0].id == undefined) return res.json({msg: "internal server error"});
      callback(result[0].id);
    })
  }

    exports.addComment = function (body, res, callback) {
      let str;
      if (body.status == undefined)
        str =  String(`INSERT INTO comment (title, description, user_id) VALUES ('${body.title}', '${body.description}', '${body.user_id}');`);
      else
        str = String(`INSERT INTO comment (title, description, user_id, status) VALUES ('${body.title}', '${body.description}', '${body.user_id}', '${body.status}');`);
      db.query(str, function(err, result) {
        if (err) return res.json({msg: "internal server error"});
      });

      db.query(`SELECT id FROM comment ORDER BY id DESC LIMIT 1;`, function(err, result) {
        if (err) return res.json({msg: "internal server error"});
        if (result[0].id == undefined) return res.json({msg: "internal server error"});
        callback(result[0].id);
      })
    }

    exports.deleteComment = function (id, res) {
      db.query("DELETE FROM comment WHERE id = " + id + ";", function(err, result) {
        if (err) return res.json({msg: "internal server error"});
        res.json({ msg: 'successfully deleted record number : ' + id});
      });
    }

    exports.deleteNotes = function (id, res) {
      db.query("DELETE FROM notes WHERE id = " + id + ";", function(err, result) {
        if (err) return res.json({msg: "internal server error"});
        res.json({ msg: 'successfully deleted record number : ' + id});
      });
    }
});