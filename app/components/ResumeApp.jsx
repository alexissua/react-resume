var React = require('react');
var moment = require('moment');

var Nav = require('Nav');
var Sleeping = require('Sleeping');
var Footer = require('Footer');

var ResumeApp = React.createClass({
  renderElements: function(){
    var hourNumber = moment().hour();
    var minLaborHour = 8;
    var maxLaborHour = 18;

    if ((hourNumber >= minLaborHour && hourNumber < maxLaborHour)){
      //Se muestran los elementos completos del app:
      return(
        <div>
          <Nav />
          <br />
          <br />

          <div id="main-container">
            {this.props.children}
          </div>

          <br />
          <br />
          <br />
          <Footer />
        </div>
      )
    }else{
      return(
        <div>
          <Sleeping />
        </div>
      )
    }
  },
  render: function(){
    return(
      <div>
        {this.renderElements()}
      </div>
    )
  }
});

/*var ResumeApp = function(props){
  return(
    <div>
      <Nav />
      <br />
      <br />

      <div id="main-container">
        {props.children}
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};*/

module.exports = ResumeApp;
