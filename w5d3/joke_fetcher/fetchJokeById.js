const { Client, Pool } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "jokes",
  user: "labber",
  password: "labber",
});

const parseAndOutputJoke = (joke) => {
  console.log("\n*--**--***--*--*");
  console.log(`Question: ${joke.question}`);
  console.log(`Answer: ${joke.answer}`);
  console.log(`This wonderful joke has a rating of ${joke.rating}, by ${joke.author}`);
  console.log("*--**--***--*--*\n");
};

const connectToDB = () => {
  return client.connect().then(() => {
    console.log("Connected!");
  });
};

const queryJokeById = (id) => {
  const query = `
    SELECT jokes.*, authors.name AS author 
    FROM jokes 
    JOIN authors ON authors.id = jokes.author_id 
    WHERE jokes.id = $1
  `;
  const values = [id];

  return client
    .query(query, values)
    .then((dbRes) => dbRes.rows[0])
    .then(parseAndOutputJoke);
};

const currentId = process.argv[2];

connectToDB()
  .then(() => queryJokeById(currentId))
  .catch((error) => {
    console.log("OH NO");
    console.log(error);
  })
  .finally(() => {
    client.end();
  });
