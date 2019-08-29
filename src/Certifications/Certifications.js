import React, { Component } from 'react';
import './Certifications.css';

class Certifications extends Component {
  render() {
    const degrees = this.props.data.map((entry, i) => (
        <div key={i} className="custom-content-wrapper">
            <h3>{entry.name}</h3>
            <h3><span>{entry.organization}</span></h3>
            <span>{entry.date} </span>
        </div>
    ));

    return (
        <div className="section-wrapper z-depth-1">
            <div className="section-icon col s12 m12 l2">
                <i className="fa fa-certificate"></i>
            </div>
            <div className="custom-content col s12 m12 l10">
                <h2>Certificates </h2>
                {degrees}
            </div>
        </div>
    );
  }
}

export default Certifications;
