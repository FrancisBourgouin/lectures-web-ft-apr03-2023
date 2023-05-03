//   ('Knock knock, whos there, to who', 'no, to whom',3, 1),

// Question / Answer / Author / Rating

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
  const query =
    "SELECT jokes.*, authors.name AS author FROM jokes JOIN authors ON authors.id = jokes.author_id";

  return client
    .query(query)
    .then((dbRes) => dbRes.rows)
    .then((rows) => {
      rows.forEach(parseAndOutputJoke);
    });
};

const addAJoke = () => {};

connectToDB()
  .then(queryAllJokes)
  // .then(addAJoke)
  .catch((error) => {
    console.log("OH NO");
    console.log(error);
  });

// const joke = {
//   question: "Knock knock, whos there, to who",
//   answer: "no, to whom",
//   author: "Francis",
//   rating: 1,
// };

const parseAndOutputJoke = (joke) => {
  console.log("\n*--**--***--*--*");
  console.log(`Question: ${joke.question}`);
  console.log(`Answer: ${joke.answer}`);
  console.log(`This wonderful joke has a rating of ${joke.rating}, by ${joke.author}`);
  console.log("*--**--***--*--*\n");
};

// parseAndOutputJoke(joke);
