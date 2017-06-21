import React, { Component } from 'react';
import './Courses.css';

class Courses extends Component {
  render() {
    const courses = this.props.data.map((entry, i) => (
        <li key={i}><strong>{entry.name}</strong>, {entry.company}, {entry.location}, {entry.date}</li>
    ));

    return (
        <div id="courses">
            <h2>Relevant Courses</h2>
            <ul>
                {courses}
            </ul>
        </div>
    );
  }
}

export default Courses;
