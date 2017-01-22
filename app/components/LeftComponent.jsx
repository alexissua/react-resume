var React = require('react');

var LeftComponent = React.createClass({
  render: function(){

    var logoImg = '../../images/profile-picture.jpg';

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
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="" target="_blank">
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
          <div className="container movie column medium-6 large-6">
            <p>1</p>
            <img />
          </div>
          <div className="container movie column medium-6 large-6">
            <p>2</p>
            <img />
          </div>
          <div className="container movie column medium-6 large-6">
            <p>3</p>
            <img />
          </div>
          <div className="container movie column medium-6 large-6">
            <p>4</p>
            <img />
          </div>
        </div>

      </div>
    )
  }
});

module.exports = LeftComponent;
