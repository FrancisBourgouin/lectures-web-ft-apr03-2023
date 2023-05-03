const { Client, Pool } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "jokes",
  user: "labber",
  password: "labber",
});

const connectToDB = () => {
  return client.connect().then(() => {
    console.log("Connected!");
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

  return client
    .query(query, values)
    .then((dbRes) => dbRes.rows)
    .then(console.log);
};

connectToDB()
  .then(queryAllJokes)
  .catch((error) => {
    console.log("OH NO");
    console.log(error);
  })
  .finally(() => {
    client.end();
  });
