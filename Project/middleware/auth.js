require ('dotenv').config({path: '../.env'});
const jwt = require('jsonwebtoken');

exports.authenticateToken = function(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.json({msg: "No token, authorization denied"});

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) return res.json({msg: "Token is not valid"});
    req.user = user
    next()
  })
}