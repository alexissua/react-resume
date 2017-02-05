// Importamos las librerías::
var React = require("react");
var ReactDOM = require("react-dom");

//Route, Router, IndexRoute, hashHistory son variables que acceden a la propiedad de react-router::
//EJ: var Route = require("react-router").Route;
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var ResumeApp = require('ResumeApp');
var About = require('About');
var Skills = require('Skills');
var Education = require('Education');
var Contact = require('Contact');

// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
require("style!css!material-design-lite/dist/material.min.css");

$(document).foundation();


// Load CSS File::
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Router history={hashHistory} >
    <Route path="/" component={ResumeApp}>
      <IndexRoute component={About} />
      <Route path="skills" component={Skills} />
      <Route path="education" component={Education} />
      <Route path="contact" component={Contact} />
    </Route>

  </Router>,
    document.getElementById("app")
);
