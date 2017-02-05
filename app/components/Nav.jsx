var React = require("react");
var {Link, IndexLink} = require("react-router");

var Skills = require("Skills");
var Education = require("Education");
var Contact = require("Contact");

var Nav = React.createClass({
  render: function(){

    //var logoUrl = '../../images/logo-camarondigital-negro-rojo.png';
    var logoUrl = '../../images/logo-camaron-blanco.png';
    var RedlogoUrl = '../../images/logo-camaron-rojo.png';

    return (

      <div id="navbar" className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <img src={logoUrl} alt="Logo Camarón Digital" />
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <IndexLink to="/" className="mdl-navigation__link" activeClassName="active-link">About</IndexLink>
              <IndexLink to="/skills" className="mdl-navigation__link" activeClassName="active-link">Development</IndexLink>
              <IndexLink to="/contact" className="mdl-navigation__link" activeClassName="active-link">Contact</IndexLink>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <div className="logo-menu-expanded">
            <img src={RedlogoUrl} alt="Logo Camarón Digital" />
          </div>
          <nav className="mdl-navigation">
            <IndexLink to="/" className="mdl-navigation__link" activeClassName="active-link">About</IndexLink>
            <IndexLink to="/skills" className="mdl-navigation__link" activeClassName="active-link">Development</IndexLink>
            <IndexLink to="/contact" className="mdl-navigation__link" activeClassName="active-link">Contact</IndexLink>
          </nav>
        </div>
      </div>

    );
  }
});

module.exports = Nav;
