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
        <div id="education">
            <h2>Education</h2>
            {degrees}
        </div>
    );
  }
}

export default Education;
