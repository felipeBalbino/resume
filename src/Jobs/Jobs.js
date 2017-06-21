import React, { Component } from 'react';
import './Jobs.css';

class Jobs extends Component {
  render() {
    const jobs = this.props.data.map((entry, i) => (
        <p key={i}>
            <strong>{entry.period}</strong><br/>
            <strong>{entry.title}</strong><br />
            <strong>{entry.company}, {entry.location}</strong><br />
            {entry.description}
        </p>
    ));

    return (
        <div id="jobs">
            <h2>Professional Experience</h2>
            {jobs}
        </div>
    );
  }
}

export default Jobs;
