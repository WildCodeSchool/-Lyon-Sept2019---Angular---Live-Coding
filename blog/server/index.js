const express = require("express");
const bodyParser = require('body-parser');
const connection = require('./conf');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// List all posts
app.get('/api/posts', (request, response) => {
  connection.query('SELECT * from posts', (err, results) => {
    if (err) {
      response.status(500).send('Error retrieving posts');
    }
    else {
      response.json(results);
    }
  });
});

// List one posts by id
app.get('/api/posts/:id', (request, response) => {
  connection.query(`SELECT * from posts WHERE id = ${request.params.id}`, (err, results) => {
    if (err) {
      response.status(500).send('Error retrieving posts');
    }
    else {
      response.json(results[0]);
    }
  });
});

// Create a post
app.post('/api/posts', (request, response) => {
  const post = request.body;
  console.log(post);
  connection.query(`INSERT INTO posts (title, content, creationDate) VALUES(?, ?, NOW())`, [post.title, post.content], (err, results) => {
    console.log(err);
    if (err) {
      response.status(500).send('Error retrieving posts');
    }
    else {
      connection.query('SELECT * from posts ORDER BY id DESC LIMIT 1;', (err, results) => {
        response.json(results[0]);
      });
    }
  });
});

// Update a post
app.put('/api/posts/:id', (request, response) => {
  const post = request.body;
  connection.query(`UPDATE posts SET title='${mysql.escape(post.title)}', content='${mysql.escape(post.content)}' WHERE id=${request.params.id}`, (err, results) => {
    if (err) {
      response.status(500).send('Error retrieving posts');
    }
    else {
      connection.query(`SELECT * FROM posts WHERE id=${request.params.id}`, (err, results) => {
        response.json(results[0]);
      });
    }
  });
});

// Update a post
app.delete('/api/posts/:id', (request, response) => {
  const post = request.body;
  connection.query(`DELETE FROM posts WHERE id = ${request.params.id}`, (err, results) => {
    if (err) {
      response.status(500).send('Error retrieving posts');
    }
    else {
      response.status(204);
    }

    response.send();
  });
});

app.listen(8000, () => console.log("Express server is running"));
