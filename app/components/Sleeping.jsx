var React = require('react');

var Sleeping = React.createClass({
  render: function(){
    var chandlerSleepingImg = '../../images/chandler-sleeping.gif';
    var cardStyle = {
      color: '#fff',
      height: '176px',
      background: 'url(' + chandlerSleepingImg + ')'
    };

    return(
      <div id="sleeping-container">

        <div className="row">
          <div id="sleeping-contact" className="medium-6 medium-centered large-6 large-centered columns">
            <div className="small-7 small-centered columns">
              <div className="profile-element profile-image">
                <img src={chandlerSleepingImg} alt="" />
              </div>
            </div>

            <div id="sleeping-contact-title">
              <h2>Thanks for stopping by but...</h2>
              <p>Unfortunately I'm not available at this hour. Please come back in labor hours <strong>(8:00 am to 6:00 pm UTC)</strong>. You won't get to see all the awesome stuff from my resume but you can always check my <strong>LinkedIn</strong> profile<strong>:</strong></p>
              <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" href="https://pa.linkedin.com/in/alexissua/en" target="_blank">Go to my LinkedIn profile</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Sleeping;
