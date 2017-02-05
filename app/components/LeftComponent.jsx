var React = require('react');

var LeftComponent = React.createClass({
  getDefaultProps: function(){
		return {
			movies: []
		};
	},
  propTypes: {
    movies: React.PropTypes.array
  },
  render: function(){

    var {movies} = this.props;
    var logoImg = '../../images/profile-picture.jpg';
    //var moviesImageStyle = [''];

    // Función para ordenar de manera random el arreglo::
    function shuffle(array){
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    // Función para visualizar las películas del API::
    function renderMovies(){

      var randomMovies = shuffle(movies);

      return randomMovies.map((movie, index) => {
        if (index < 4){

          var url = "http://image.tmdb.org/t/p/w500/" + movie.poster_path;
          var movieImageStyle = {
            backgroundImage: 'url('+ url +')',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          };

          return (
            <div className="container movie column medium-6 large-6">
              <div className="demo-card-image mdl-card mdl-shadow--2dp" style={movieImageStyle}>
                <div className="mdl-card__title mdl-card--expand"></div>
                <div className="mdl-card__actions">
                  <span className="demo-card-image__filename">{movie.title}</span>
                </div>
              </div>
            </div>
          );
        }
      });

      if (movies.length === 0){
        return (
          <p>Sorry it looks that there are no movies to show</p>
        );
      }

    };

    return (
      <div id="left-container" className="column medium-6 large-6">
        <p>Left Container</p>

        <div id="profile" className="mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title">
            <div id="profile-image" className="mdl-card__title-text">
              <img src={logoImg} alt="" />
            </div>
          </div>
          <div className="mdl-card__supporting-text">
            <h2 className="mdl-card__title-text">Welcome... Thanks for stopping by!</h2>
            <p>
               My name is Alex. I'm computer science engineer and I love to code.
               I've been working for the past four years in companies from different aras such as:
               Oil industry, IT and Digital advertising. <br /><br />
               Here are a few things I love to do besides coding:
            </p>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://www.simplyswim.com/blog/" target="_blank">
              Swimming
            </a>
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://open.spotify.com/user/12143114479" target="_blank">
              Listen to music
            </a>
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="http://www.imdb.com/user/ur26194134/watchlist?sort=list_order,asc&page=1&mode=simple" target="_blank">
              And of course... Movies
            </a>
          </div>
          <div className="mdl-card__menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className="material-icons">share</i>
            </button>
          </div>
        </div>

        <div id="movies" className="row">
          <div className="mdl-card mdl-shadow--2dp">
            {renderMovies()}
          </div>
        </div>

      </div>
    )
  }
});

module.exports = LeftComponent;
