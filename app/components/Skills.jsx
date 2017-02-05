var React = require('react');
var axios = require('axios');
var LeftComponent = require('LeftComponent');
var movieDataBase = require('movieDataBase');

var Skills = React.createClass({
  render: function(){

    var html5Url = '../../images/logos/html5.png';
    var css3Url = '../../images/logos/css3.png';
    var sassUrl = '../../images/logos/sass.png';
    var jQueryUrl = '../../images/logos/jquery.png';
    var nodeJsUrl = '../../images/logos/nodejs.jpg';
    var reactJsUrl = '../../images/logos/reactjs.png';
    var webpackUrl = '../../images/logos/webpack.png';
    var karmaUrl = '../../images/logos/karma.png';

    return(
      <div id="skills-container">
        <div id="skills-title">
          <h2 className="mdl-card__title-text">Development. </h2>
          <p>I love to create beautiful and watchable projects. I really enjoy working with front-end development... These are the technologies I've been using and that I used for my profile:</p>
        </div>

        <div className="row">
          <div className="skill-list medium-6 large-6 columns">
            <ul className="mdl-list">
              <li className="mdl-list__item mdl-shadow--2dp">
                <span className="mdl-list__item-primary-content">
                  <img className="round-list-img" src={html5Url} alt="" />
                  <span className="list-item-title">HTML5</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                  </label>
                </span>
              </li>

              <li className="mdl-list__item mdl-shadow--2dp">
                <span className="mdl-list__item-primary-content">
                  <img className="round-list-img" src={css3Url} alt="" />
                  <span className="list-item-title">CSS3</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                  </label>
                </span>
              </li>

              <li className="mdl-list__item mdl-shadow--2dp">
                <span className="mdl-list__item-primary-content">
                  <img className="round-list-img" src={sassUrl} alt="" />
                  <span className="list-item-title">SASS</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                  </label>
                </span>
              </li>

              <li className="mdl-list__item mdl-shadow--2dp">
                <span className="mdl-list__item-primary-content">
                  <img className="round-list-img" src={jQueryUrl} alt="" />
                  <span className="list-item-title">jQuery</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                  </label>
                </span>
              </li>

            </ul>
          </div>

          <div className="skill-list medium-6 large-6 columns">
            <ul className="mdl-list">
              <li className="mdl-list__item mdl-shadow--2dp">
                <span className="mdl-list__item-primary-content">
                  <img className="round-list-img" src={nodeJsUrl} alt="" />
                  <span className="list-item-title">Node JS</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                  </label>
                </span>
              </li>

              <li className="mdl-list__item mdl-shadow--2dp">
                <span className="mdl-list__item-primary-content">
                  <img className="round-list-img" src={reactJsUrl} alt="" />
                  <span className="list-item-title">React</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                  </label>
                </span>
              </li>

              <li className="mdl-list__item mdl-shadow--2dp">
                <span className="mdl-list__item-primary-content">
                  <img className="round-list-img" src={webpackUrl} alt="" />
                  <span className="list-item-title">Weppack</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                  </label>
                </span>
              </li>

              <li className="mdl-list__item mdl-shadow--2dp">
                <span className="mdl-list__item-primary-content">
                  <img className="round-list-img" src={karmaUrl} alt="" />
                  <span className="list-item-title">Karma Js</span>
                </span>
                <span className="mdl-list__item-secondary-content">
                  <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
                    <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                  </label>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div id="github-downloader" className="row">
          <div className="github-container small-centered small-10 medium-10 large-10 columns">
            <p>
              You also can download this project from Github here:
            </p>

            <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" href="https://github.com/alexissua/react-resume" target="_blank">
              <i className="material-icons">get_app</i> Download
            </a>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Skills;
