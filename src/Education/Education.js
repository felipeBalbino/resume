import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
  render() {
    const degrees = this.props.data.map((entry, i) => (
        <p key={i}>
            {entry.name}, {entry.level}<br />
            {entry.date} <br />
            {entry.institution}, {entry.location}
        </p>
    ));

    return (
        // <div id="education">
        //     <h2>Education</h2>
        //     {degrees}
        // </div>
        <div className="section-wrapper z-depth-1">
            <div className="section-icon col s12 m12 l2">
                <i className="fa fa-graduation-cap"></i>
            </div>
            <div className="custom-content col s12 m12 l10 wow fadeIn a1 animated" data-wow-delay="0.1s" >
                <h2>Education </h2>
                
                <div className="custom-content-wrapper wow fadeIn a2 animated" data-wow-delay="0.2s" >
                    <h3>Art &amp; Multimedia <span>@Oxford University</span></h3>
                    <span>JAN 2013 - DEC 2013 </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="custom-content-wrapper wow fadeIn a3 animated" data-wow-delay="0.3s">
                    <h3>Post Graduation <span>@Lorem</span></h3>
                    <span>JAN 2013 - DEC 2013 </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="custom-content-wrapper wow fadeIn a4" data-wow-delay="0.4s" >
                    <h3>TTMP Degree <span>@Creative School</span></h3>
                    <span>JAN 2013 - DEC 2013 </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
        </div>
    );
  }
}

export default Education;
