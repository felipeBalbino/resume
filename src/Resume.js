import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div id="page-wrap">
      
          <div id="contact-info" className="vcard">
          
              <h1 className="fn">Cezar Guimarães Carneiro</h1>
          
              <p>
                  <span >Goiânia, Brazil</span><br />
                  Email: <a href="mailto:cezargcarneiro@gmail.com">cezargcarneiro@gmail.com</a><br />
                  LinkedIn: <a href="https://www.linkedin.com/in/cezargcarneiro">/cezargcarneiro</a><br />
                  GitHub: <a href="https://github.com/cezar-carneiro/">/cezar-carneiro</a><br />
              </p>
          </div>
                  
          <div id="objective">
              <p>Software Developer with +4 of experience. Competent Full Stack Developer. Main focus on Android and Java back-end Development. Brazilian, fluent in English and Portuguese. </p>
          </div>
          
          <dl>
              <dd className="clear"></dd>

              <dd>
                  <h2>Withering Madness University - Planet Vhoorl</h2>
                  <p><strong>Major:</strong> Public Relations<br />
                    <strong>Minor:</strong> Scale Tending</p>
              </dd>
              
              <dd className="clear"></dd>
              
              <dd>
                  <h2>Office skills</h2>
                  <p>Office and records management, database administration, event organization, customer support, travel coordination</p>
                  
                  <h2>Computer skills</h2>
                  <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows</p>
              </dd>
              
              <dd className="clear"></dd>
              
              <dd>
                  <h2>Doomsday Cult <span>Leader/Overlord - Baton Rogue, LA - 1926-2010</span></h2>
                  <ul>
                      <li>Inspired and won highest peasant death competition among servants</li>
                      <li>Helped coordinate managers to grow cult following</li>
                      <li>Provided untimely deaths to all who opposed</li>
                  </ul>
                  
                  <h2>The Watering Hole <span>Bartender/Server - Milwaukee, WI - 2009</span></h2>
                  <ul>
                      <li>Worked on grass-roots promotional campaigns</li>
                      <li>Reduced theft and property damage percentages</li>
                      <li>Janitorial work, Laundry</li>
                  </ul> 
              </dd>
              
              <dd className="clear"></dd>
              
              <dd>World Domination, Deep Sea Diving, Murder Most Foul</dd>
              
              <dd className="clear"></dd>
              
              <dd>Available on request</dd>
              
              <dd className="clear"></dd>
          </dl>
          
          <div className="clear"></div>
      
      </div>);
  }
}

export default Resume;
