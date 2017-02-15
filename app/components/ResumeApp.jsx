var React = require('react');
var moment = require('moment');

var Nav = require('Nav');
var Sleeping = require('Sleeping');
var Footer = require('Footer');

var ResumeApp = React.createClass({
  getDefaultProps: function(){
    return{
      minLaborHour: 5,
      maxLaborHour: 23
    }
  },
  propTypes: {
    minLaborHour: React.PropTypes.number,
    maxLaborHour: React.PropTypes.number
  },
  renderElements: function(){
    var hourNumber = moment().hour();

    if ((hourNumber >= this.props.minLaborHour && hourNumber < this.props.maxLaborHour)){
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
