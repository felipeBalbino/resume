import React, { Component } from 'react';
import Contact from './Contact';
import Objective from './Objective';
import Education from './Education';
import Jobs from './Jobs';
import Courses from './Courses';

import data from './data/data.json';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
        <div id="page-wrap">
            <Contact data={data.contact}/>

            <Objective data={data.objective}/>

            <div className="clear"></div>

            <Education data={data.education}/>
            
            <div className="clear"></div>
            
            <Jobs data={data.jobs}/>
            
            <div className="clear"></div>
            
            <Courses data={data.courses}/>

            <div className="clear"></div>
      </div>);
  }
}

export default Resume;
