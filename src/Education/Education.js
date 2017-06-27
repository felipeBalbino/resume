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
        <div className="row">
            <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                <span className="card-title">Card Title</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default Education;
