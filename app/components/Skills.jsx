var React = require('react');
var LeftComponent = require('LeftComponent');

var Skills = React.createClass({
  render: function(){
    return(
      <div>
        <div className="mdl-grid">
          <LeftComponent />

          <div id="right-container" className="column medium-6 large-6">
            <p>Right Container</p>

            <h3 className="mdl-layout-title">Technology I used: </h3>
            <table id="skills-table" className="mdl-data-table mdl-js-data-table">
              <thead>
                <tr>
                  <th className="mdl-data-table__cell--non-numeric">Technology</th>
                  <th>Experience</th>
                  <th>Used in this project</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">HTML5</td>
                  <td>100%</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">CSS / SCSS</td>
                  <td>95%</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">jQuery</td>
                  <td>90%</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">Node JS</td>
                  <td>75%</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">ReactJS</td>
                  <td>80%</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">Webpack</td>
                  <td>60%</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

      </div>
    );
  }
});

module.exports = Skills;
