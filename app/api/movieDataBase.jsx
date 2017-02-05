var axios = require('axios');

const MOVIE_DATA_BASE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=097fe9691e6ebb1c7d77e1c9d9fa007d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18,878&year=2016';

module.exports = {
  getMovies: function(){

    // We fetch the data with then::
		return axios.get(MOVIE_DATA_BASE_URL).then((response) => {
      if ((response.data.results.length > 0) && (response.data.total_results > 0)){
        return response.data.results;
      }
		}, (error) => {
			throw new Error("Unable to fetch movies from that location");
		});
  }
};
