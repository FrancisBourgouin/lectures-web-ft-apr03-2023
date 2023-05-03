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

const question = process.argv[2];
const answer = process.argv[3];
const author_id = process.argv[4];
const rating = process.argv[5];

const insertAJoke = () => {
  const query = `
    INSERT INTO jokes
    (question, answer, author_id, rating)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *
  `;

  const values = [question, answer, author_id, rating];

  return client
    .query(query, values)
    .then((dbRes) => dbRes.rows[0])
    .then((row) => {
      console.log("Row inserted!");
      console.log(row);
    });
};

connectToDB()
  .then(insertAJoke)
  .catch((error) => {
    console.log("OH NO");
    console.log(error);
  });
