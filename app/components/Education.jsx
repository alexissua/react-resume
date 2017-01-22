var React = require('react');
var LeftComponent = require('LeftComponent');

var Education = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Education Page</h3>

        <div className="row">
          <LeftComponent />

          <div id="education-right-container" className="column medium-6 large-6">
            <p>Right Container</p>

            <div id="education-dashboard">
              <div className="column medium-4 large-4">

              </div>

              <div className="column medium-4 large-4">

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Education;
