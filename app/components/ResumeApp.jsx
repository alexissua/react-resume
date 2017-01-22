var React = require('react');

var Nav = require('Nav');
var Footer = require('Footer');

var ResumeApp = function(props){
  return(
    <div>
      <Nav />
      <br />
      <br />

      <div id="main-container">
        {props.children}
      </div>

      <br />
      <Footer />
    </div>
  );
};

module.exports = ResumeApp;
