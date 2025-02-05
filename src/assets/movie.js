import axios from "axios";

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGJhM2IwNzE1OGU2ZmYyYzM2MTNmYTBmNjU0YjdlMCIsIm5iZiI6MTczODc4ODc3NC40NTcsInN1YiI6IjY3YTNjZmE2NzdiOGNlZDQ1NjY2YzQwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S93Rvw_oFlzLEjOXywq3VWujPtWf6KwO_BQz8mC7L8I';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchTrendingMovies() {
    try {
        const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
            headers: {
                Autorization: `Bearer ${API_TOKEN}`
            }
        });
        console.log(response.data.results);
    } catch (error) {
    console.log(error);
}
} 
fetchTrendingMovies();