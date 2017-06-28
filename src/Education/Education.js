import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
  render() {
    const degrees = this.props.data.map((entry, i) => (
        <div key={i} className="custom-content-wrapper wow fadeIn a2 animated">
            <h3>{entry.name}, {entry.level}</h3>
            <h3><span>{entry.institution}</span></h3>
            <span>{entry.date} </span>
            <p>{entry.location} </p>
        </div>
    ));

    return (
        <div className="section-wrapper z-depth-1">
            <div className="section-icon col s12 m12 l2">
                <i className="fa fa-graduation-cap"></i>
            </div>
            <div className="custom-content col s12 m12 l10 wow fadeIn a1 animated">
                <h2>Education </h2>
                {degrees}
            </div>
        </div>
    );
  }
}

export default Education;
