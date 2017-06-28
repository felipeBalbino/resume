import React, { Component } from 'react';
import './Courses.css';

class Courses extends Component {
  render() {
    const courses = this.props.data.map((entry, i) => (
        <li key={i}><strong>{entry.name}</strong>, {entry.company}, {entry.location}, {entry.date}</li>
    ));

    return (
        <div className="section-wrapper z-depth-1">
            <div className="section-icon col s12 m12 l2">
                <i className="fa fa-book"></i>
            </div>
            <div className="custom-content col s12 m12 l10 wow fadeIn a1 animated">
                <h2>Relevant Courses </h2>
                {courses}
            </div>
        </div>
    );
  }
}

export default Courses;
