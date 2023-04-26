// Contractual Donation Non-Recurring ? NO
// Content Delivery Network

// Footguns ==

const removePost = (event) => {
  $(event.currentTarget).remove();
};

const createPostButKindaBad = (postData) => {
  // const title = postData.title
  // const body = postData.body
  // const id = postData.id
  // const userId = postData.userId

  const { title, body, id, userId } = postData;

  return `
  <article>
  <h1>#${id} - ${title}</h1>
  <p>
   ${body}
  </p>
</article>
`;
};

const createPost = (postData) => {
  // Extract the necessary data
  const { title, body, body2, id, userId } = postData;

  // Build the blocks making the post
  const $article = $("<article>");
  const $h1 = $("<h1>");
  const $p = $("<p>");
  const $optionalP = $("<p>");

  // Populate the blocks with content
  $h1.text(`Post #${id} - ${title}`);
  $p.text(body);
  $optionalP.text(body2);

  // Build the tree structure
  $article.append($h1, $p);
  body2 && $article.append($optionalP);
  // $article.append($p);

  // Add event listeners and misc. content
  $article.on("click", removePost);

  return $article;
};

const addRemotePost = (event) => {
  event.preventDefault();

  const title = $("#title").val();
  const body = $("#content").val();

  $.ajax({
    method: "POST",
    url: "http://localhost:3001/api/posts",
    data: { title, body },
  }).then((res) => {
    const newPost = createPost(res);
    $("section").append(newPost);
  });
};

const addLocalPost = (event) => {
  event.preventDefault();

  const title = $("#title").val();
  const body = $("#content").val();

  const id = somePosts.length + 1;

  const newPost = { id, title, body, userId: 1 };

  somePosts.push(newPost);

  const post = createPost(newPost);

  $("main section:first-of-type").append(post);
};

const loadInitialPosts = () => {
  for (const post of somePosts) {
    const newPost = createPost(post);
    $("section").append(newPost);
  }
};

const fetchOneRandomPost = () => {
  const idToFetch = Math.ceil(Math.random() * 100);

  $.get(`https://jsonplaceholder.typicode.com/posts/${idToFetch}`).then((res) => {
    const newPost = createPost(res);
    $("section").prepend(newPost);
  });
};

const loadRemotePosts = () => {
  $.ajax({
    method: "GET",
    url: "http://localhost:3001/api/posts",
    // url: "https://jsonplaceholder.typicode.com/posts",
  }).then((res) => {
    for (const post of res) {
      const newPost = createPost(post);
      $("section").append(newPost);
    }
  });
};

const createWeatherParagraph = (weatherObj) => {
  const description = weatherObj.weather[0].description;
  const temp = weatherObj.main.temp;
  const goodTemp = Math.round(temp - 273.15) + "°C";
  const name = weatherObj.name;

  const string = `It's currently ${description}, temp is : ${goodTemp} in ${name}`;

  const $p = $("<p>");
  $p.text(string);

  return $p;
};

const loadLocalWeather = () => {
  const newParagraph = createWeatherParagraph(weatherExample);
  $("header").append(newParagraph);
};

const loadRemoteWeather = () => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${"Ushuaia"}&appid=${"09fd719b4b698ec0260e424f83378e3d"}`;
  $.ajax({
    method: "GET",
    url: url,
  }).then((res) => {
    const newParagraph = createWeatherParagraph(res);
    $("header").append(newParagraph);
  });
};

$(document).ready(() => {
  loadRemotePosts();
  loadRemoteWeather();
  $("form").on("submit", addRemotePost);
});
