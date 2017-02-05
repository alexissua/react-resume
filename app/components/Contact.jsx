var React = require('react');

var Contact = React.createClass({
  render: function(){

    var logoImg = '../../images/contact-profile-image.png';
    var RedAndBlacklogoUrl = '../../images/logo-camarondigital-negro-rojo.png';
    //var contactProfileImg = '../../images/contact-profile-image.png';
    var cardStyle = {
      color: '#fff',
      height: '176px',
      background: 'url(' + logoImg + ')'
    };

    return(
      <div id="contact-container">

        <div className="row">
          <div id="contact" className="medium-6 medium-centered large-6 large-centered columns">
            <div className="small-4 small-centered columns">
              <img src={RedAndBlacklogoUrl} alt="Logo Camaron Digital Oficial" />
            </div>

            <div id="contact-title">
              <h2>Thanks for stopping by!</h2>
              <p>If you want to see more of my work please check Camaron Digital. It is a little brand I use to do some freelance work.</p>
            </div>

            <div id="contact-card" className="mdl-card mdl-shadow--2dp">
              <div className="profile-element profile-image">
                <img src={logoImg} alt="" />
              </div>
              <div id="contact-card-buttons">
                <div className="contact-card-button">
                  <a className="mdl-button mdl-js-button mdl-button--raised" href="http://camarondigital.tumblr.com/" target="_blank">Go to Camaron Digital</a>
                </div>
                <p>or...</p>
                <div className="contact-card-button">
                  <a className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" href="https://pa.linkedin.com/in/alexissua/en" target="_blank">Go to my LinkedIn profile</a>
                </div>
              </div>
              <div id="contact-card-goback">
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

module.exports = Contact;
