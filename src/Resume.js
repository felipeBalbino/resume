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
            <div className="row">
              <Contact data={data.contact}/>

	            <section className="col s12 m12 l8 section">
                <div className="row">
                  <Education data={data.education}/>

                  <Objective data={data.objective}/>
              
                  <Jobs data={data.jobs}/>
              
                  <Courses data={data.courses}/>
                </div>
              </section>

            </div>
        );
  }
}

export default Resume;
