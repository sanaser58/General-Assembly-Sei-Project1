// const MOVIE_DB_API = '513a613112cab7c2d4141209480705dc';


// Selecting elements from the DOM
// const searchButton = document.querySelector('#search');;
// const searchInput = document.querySelector('#exampleInputEmail1');


const baseurl = "https://api.themoviedb.org/3";


const apiTester = async () => {
    const randomUserResponse = await axios.get(`${baseurl}/discover/movie?sort_by=popularity.desc&api_key=513a613112cab7c2d4141209480705dc`);
    console.log(randomUserResponse)
        //  console.log(randomUserResponse.data.results[0].popularity)

     };
    const highestRatedMovies =  axios.get(`${baseurl}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=513a613112cab7c2d4141209480705dc`);
    console.log(highestRatedMovies)

    // const moviesInTheatres = axios.get(`${baseurl}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=513a613112cab7c2d4141209480705dc`);
    // console.log(moviesInTheatres)
    
     apiTester();