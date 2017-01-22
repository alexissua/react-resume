var React = require("react");
var {Link, IndexLink} = require("react-router");

var Skills = require("Skills");
var Education = require("Education");
var Contact = require("Contact");

var Nav = React.createClass({
  render: function(){

    // Mantenemos los estilos acá para luego pasarlo al css::
    var logoStyle = {
      maxWidth: 100
    };

    var logoUrl = '../../images/logo-camarondigital-negro-rojo.png';

    return (

      <div id="navbar" className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <img src={logoUrl} alt="Logo Camarón Digital" />
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <IndexLink to="/" className="mdl-navigation__link" activeClassName="active-link">Skills</IndexLink>
              <IndexLink to="/education" className="mdl-navigation__link" activeClassName="active-link">Education</IndexLink>
              <IndexLink to="/contact" className="mdl-navigation__link" activeClassName="active-link">Contact</IndexLink>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <div className="logo-menu-expanded">
            <img src={logoUrl} alt="Logo Camarón Digital" />
          </div>
          <nav className="mdl-navigation">
            <IndexLink to="/" className="mdl-navigation__link" activeClassName="active-link">Skills</IndexLink>
            <IndexLink to="/education" className="mdl-navigation__link" activeClassName="active-link">Education</IndexLink>
            <IndexLink to="/contact" className="mdl-navigation__link" activeClassName="active-link">Contact</IndexLink>
          </nav>
        </div>
      </div>

    );
  }
});

module.exports = Nav;
