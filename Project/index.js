var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const user = require('./routes/user/user.js')
const comment = require('./routes/comment/comment.js')
const notes = require('./routes/notes/notes.js')
const auth = require('./routes/auth.js')
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user',user)
app.use('/comment', comment)
app.use('/notes', notes)
app.post('/register', (req, res) => {
  auth.register(req.body, res);
});
app.get('/login', (req, res) => {
  auth.login(req.body, res);
});

app.listen(port, () => {
  console.log(`kohMantla app listening at http://localhost:${port}`)
})