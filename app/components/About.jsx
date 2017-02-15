var React = require('react');
var movieDataBase = require('movieDataBase');
var $ = require('jQuery');

var About = React.createClass({
  getInitialState: function(){

    //Configuramos el estado inicial del componente::
    return{
      movies: [],
      showMovies: false
    }
  },
  componentWillMount: function(){

    //Llamamos el metodo de movieDataBase getMovies para obtener las peliculas,
    // y actualizamos el estado del componente con estas peliculas::
    movieDataBase.getMovies().then((response) => {
      this.setState({
        movies: response
      });
    });

  },
  // Función para visualizar las películas del API::
  renderMovies: function(){

    var {movies, showMovies} = this.state;
    var randomMovies = this.shuffle(movies);

    if(showMovies){
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
              <div className="demo-card-image mdl-card" style={movieImageStyle}>
                <div className="mdl-card__title mdl-card--expand"></div>
                <div className="mdl-card__actions">
                  <span className="demo-card-image__filename">{movie.title}</span>
                </div>
              </div>
            </div>
          );
        }
      });
    }

    if (movies.length === 0){
      return (
        <p>Sorry it looks that there are no movies to show</p>
      );
    }

  },
  // Función para ordenar de manera random el arreglo::
  shuffle: function(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    //Le agregamos este if para que solo busque en el top 10::
    if (currentIndex <= 10){
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
    }

    return array;
  },
  render: function(){

    //var {movies} = this.state;
    var logoImg = '../../images/profile-picture.jpg';
    var linkedinIconUrl = '../../images/icon/linkedin.png';
    var facebookIconUrl = '../../images/icon/facebook.png';

    var codeSchoolUrl = '../../images/logos/codeschool.png';
    var udacityUrl = '../../images/logos/udacity.png';
    var udemyUrl = '../../images/logos/udemy.jpg';

    var hobbyImg01 = '../../images/icon/swimming.svg';
    var hobbyImg02 = '../../images/icon/listen-music.svg';
    var hobbyImg03 = '../../images/icon/watching-movies.svg';

    var profileBgStyle = {
      height: '200px',
      background: 'url(../../images/profile-bg.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      color: 'white'
    }

    return (
      <div>
        <div id="about-container" className="column small-centered medium-centered large-centered small-10 medium-10 large-10">
          <div id="profile" className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title" style={profileBgStyle}>
              <div id="profile-image">
                <div className="profile-element profile-icon profile-icon-left small-2 medium-2 columns">
                  <a href="https://pa.linkedin.com/in/alexissua/en" target="_blank">
                    <img src={linkedinIconUrl} alt="" />
                  </a>
                </div>
                <div className="profile-element profile-image small-8 medium-8 columns">
                  <img src={logoImg} alt="" />
                </div>
                <div className="profile-element profile-icon profile-icon-right small-2 medium-2 columns">
                  <a href="https://www.facebook.com/alescarra" target="_blank">
                    <img src={facebookIconUrl} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mdl-card__supporting-text">
              <h2 className="mdl-card__title-text">Welcome... Thanks for stopping by!</h2>
              <p>
                 My name is Alex. I'm computer science engineer and I love to code.
                 I've been working for the past four years in companies from different areas such as:
                 Oil industry, IT and Digital advertising. <br />
              </p>
            </div>
            <hr />
            <div id="profile-courses" className="row">
              <p className="courses-title">These are some of the certificates I've got:</p>
              <div className="course medium-4 large-4 columns">
                <img src={codeSchoolUrl} alt="" />
                <p className="course-title">CODE SCHOOL</p>
              </div>

              <div className="course medium-4 large-4 columns">
                <img src={udacityUrl} alt="" />
                <p className="course-title">UDACITY</p>
              </div>

              <div className="course medium-4 large-4 columns">
                <img src={udemyUrl} alt="" />
                <p className="course-title">UDEMY</p>
              </div>
            </div>
            <br />
          </div>


          <div id="profile-hobbies" className="row">
            <div className="mdl-card__supporting-text columns large-10">
              <p>
                Here are a few things I love to do besides coding:
              </p>
            </div>

            <div className="hobby hobby-left medium-4 large-4 columns">
              <a href="https://www.simplyswim.com/blog/" target="_blank">
                <img src={hobbyImg01} alt="Logo profile 01" />
              </a>
            </div>
            <div className="hobby hobby-medium medium-4 large-4 columns">
              <a href="https://open.spotify.com/user/12143114479" target="_blank">
                <img src={hobbyImg02} alt="Logo profile 02" />
              </a>
            </div>
            <div className="hobby hobby-right medium-4 large-4 columns">
              <a href="http://www.imdb.com/user/ur26194134/watchlist?sort=list_order,asc&page=1&mode=simple" target="_blank">
                <img src={hobbyImg03} alt="Logo profile 03" />
              </a>
            </div>
          </div>

          <div id="profile-show-more" className="row">
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" onClick={() => {

              this.setState({showMovies: true});
              $('#movies').css('display','inline-block');
              $('#profile-show-more button i').html('remove');

              if (this.state.showMovies){
                this.setState({showMovies: false});
                $('#movies').css('display','none');
                $('#profile-show-more button i').html('more_vert');
              }
              else{
                this.setState({showMovies: true});
                $('#movies').css('display','inline-block');
                $('#profile-show-more button i').html('remove');
              }
            }}>
              <i className="material-icons">more_vert</i>
            </button>
          </div>
        </div>

        <div id="movies">
          <div className="row">
            <h2 className="mdl-card__title-text">
              These're a some examples of movies I enjoy.
            </h2>
            <p>
              These are some of the best drama and science fiction movies rated on 2016. I use a third party API to get the info. Check it out.
            </p>

            {this.renderMovies()}
          </div>

          <div id="powered-by" className="row">
            <div className="medium-11 large-11 columns">
              <p>API Powered by:</p>
            </div>
            <div className="medium-1 large-1 columns">
              <img src="https://www.themoviedb.org/assets/static_cache/41bdcf10bbf6f84c0fc73f27b2180b95/images/v4/logos/91x81.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    )
  }
});

module.exports = About;
