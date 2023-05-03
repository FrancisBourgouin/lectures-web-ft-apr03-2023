const { Client, Pool } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "jokes",
  user: "labber",
  password: "labber",
});

const connectToDB = () => {
  client
    .connect()
    .then(() => console.log("Connected!"))
    .catch((err) => {
      console.log("OH NO.");
      console.log(err);
    });
};

const queryAllJokes = () => {
  const query = `
    SELECT jokes.*, authors.name, authors.funny, authors.description
    FROM jokes
    JOIN authors ON authors.id = jokes.author_id
  `;
  // const query = `
  //   SELECT *, jokes.id AS joke_id
  //   FROM jokes
  //   JOIN authors ON authors.id = jokes.author_id
  // `;
  const values = [];

  return client.query(query, values).then((dbRes) => dbRes.rows);
};

const queryJokeById = (id) => {
  const query = `
    SELECT jokes.*, authors.name AS author 
    FROM jokes 
    JOIN authors ON authors.id = jokes.author_id 
    WHERE jokes.id = $1
  `;
  const values = [id];

  return client.query(query, values).then((dbRes) => dbRes.rows[0]);
};

const insertAJoke = (jokeParams) => {
  const { question, answer, author_id, rating } = jokeParams;
  const query = `
    INSERT INTO jokes
    (question, answer, author_id, rating)
    VALUES
    ($1, $2, $3, $4)
    RETURNING id
  `;

  const values = [question, answer, author_id, rating];

  return client
    .query(query, values)
    .then((dbRes) => dbRes.rows[0])
    .then((row) => row.id);
};

module.exports = { connectToDB, queryAllJokes, queryJokeById, insertAJoke };
