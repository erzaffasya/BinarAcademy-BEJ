const express = require('express');
const app = express();
const port = 3000;
// app.get('/' , (req, res) => res.send('Hello World'));

app.set('view engine', 'ejs');
app.use(express.json());
app.listen(port, () => console.log('Server Berhasil dijalankan dengan port ' + port));

app.get('/' , (req, res) => {
    res.render('index');
});


app.get('/signup' , (req, res) => {
    res.render('signup');
});

app.get('/signin' , (req, res) => {
    res.render('signin');
});


app.post('/signup' , (req, res) => {

    const {username, email, password} = req.body;
    // const id = posts[posts.lenght - 1].id + 1;
    const post = { username, email, password};

    let posts = require('./db/database.js');

    posts.push(post)
    res.render('index');
});

app.post('/signin' , (req, res) => {

    const {username, email, password} = req.body;
    // const id = posts[posts.lenght - 1].id + 1;
    const post = { username, email, password};

    let posts = require('./db/database.js');
    posts.push(post)
    res.render('index');
});