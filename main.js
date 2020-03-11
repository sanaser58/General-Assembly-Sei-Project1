// Initial Values
// api endpoint = "https://api.themoviedb.org/3/search/movie?api_key=513a613112cab7c2d4141209480705dc&query=furious"

// const MOVIE_DB_API = '513a613112cab7c2d4141209480705dc';
// const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';


// const baseurl = "https://api.themoviedb.org/3";
// // const baseurl = 'https://api.themoviedb.org/3/search/movie?api_key=513a613112cab7c2d4141209480705dc&query=furious';
// const newurl ="https://api.themoviedb.org/3/search/movie?api_key=513a613112cab7c2d4141209480705dc"



// const apiTester = async (searchInput) => {
//     const resp = await axios.get(`${baseurl}/search/movie?&api_key=${MOVIE_DB_API}&query=${searchInput}`);

   
//     randomUserResponse.data.results[0]
//     for (let i = 0; i < 20; i++){
//         moviesContainer.innerHTML += `
//         <h2>${randomUserResponse.data.results[i].original_title}</h2>
//         `
//     }
//     Console.log(randomUserResponse);
// };

// apiTester("furious");



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

    buildCard();
  }

});


buildCard = () => {
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
