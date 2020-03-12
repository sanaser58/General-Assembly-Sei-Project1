//Api got from one of our class homework
const domain = 'http://www.omdbapi.com/';
const api_key = '9b732962'
const button = document.querySelector('#search');
let userInput = document.querySelector('#blank');
let TITLES;
let POSTERS;
let YEARS;
let movieContainer = document.querySelector("#movie-container");

button.addEventListener('click', async (event) => {

  let base_url = `${domain}?apikey=${api_key}&s=${userInput.value}`;
  let response = await axios.get(`${base_url}`);
  let movieList = response.data.Search;

  movieContainer.innerHTML = "";

  for (let i = 0; i < movieList.length; i++) {
    TITLES = movieList[i].Title;
    POSTERS = movieList[i].Poster;
    YEARS = movieList[i].Year;

    buildImageBox();
  }

});

buildImageBox = () => {
  const card = document.createElement("div");
  card.className = "movie-card";
  const title = document.createElement("h3");
  title.className = "movieTitle";
  title.innerHTML = `${TITLES}<br/>${YEARS}`;
  const poster = document.createElement("img");
  poster.className = "moviePoster";
  poster.setAttribute("src", POSTERS);
  card.appendChild(poster);
  card.appendChild(title);
  movieContainer.appendChild(card);

};
