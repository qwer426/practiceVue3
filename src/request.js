const API_KEY = "a08afc7e78cf3d2d1db78d2812458e6b";

// const requests = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
// };
const requests = [
    {
        name: 'fetchTrending',
        title: 'Trending Now',
        fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    {
        name: 'fetchNetflixOriginals',
        title: 'NetflixOriginals',
        fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: 'fetchTopRated',
        title: 'TopRated',
        fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    {
        name: 'fetchActionMovies',
        title: 'Action Movies',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    {
        name: 'fetchComedyMovies',
        title: 'Comedy Movies',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name: 'fetchHorrorMovies',
        title: 'Horror Movies',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    {
        name: 'fetchRomanceMovies',
        title: 'Romance Movies',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
    {
        name: 'fetchDocumentaries',
        title: 'Documentaries',
        fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    },
]
export default requests;
