import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div id="page-wrap">
      
          <div id="contact-info" className="vcard">
          
              <h1 className="fn">Cezar Guimarães Carneiro</h1>
          
              <p>
                  <span >Goiânia, Brazil</span><br />
                  Email: <a href="mailto:cezargcarneiro@gmail.com">cezargcarneiro@gmail.com</a><br />
                  LinkedIn: <a href="https://www.linkedin.com/in/cezargcarneiro">/cezargcarneiro</a><br />
                  GitHub: <a href="https://github.com/cezar-carneiro/">/cezar-carneiro</a><br />
              </p>
          </div>
                  
          <div id="objective">
              <p>Software Developer with +4 of experience. Competent Full Stack Developer. Main focus on Android and Java back-end Development. Brazilian, fluent in English and Portuguese. </p>
          </div>
          
          <dl>
              <dd className="clear"></dd>

              <dd>
                  <h2>Education</h2>
                  <p>
                    Computer Science, Bachelor<br />
                    August, 2014 <br />
                    Pontifical Catholic University, Brazil
                  </p>
              </dd>
              
              <dd className="clear"></dd>
              
              <dd>
                  <h2>Professional Experience</h2>
                  <p><strong>November, 2016 - Today</strong><br/>
                  <strong>Plain Android Developer</strong><br />
                  <strong>“Máxima Sistemas”, Goiânia</strong><br />
                  Maintain and evolve mature Android Apps, designs new functionalities and implements them.
                  Optimize performance, improves usability and applies new technologies and techniques to the apps.</p>

                  <p><strong>January, 2014 - November, 2016</strong><br/>
                  <strong>Plain software Developer</strong><br />
                  <strong>“DataEasy Tecnologia e Serviços”, Goiânia</strong><br />
                  Worked in a corporate search engine written in Java. Acted in the design and implementation
                  of RESTful APIs with Jersey 2, did some front-end programming on top of AngularJS and Angular2 and did back-end development, dealing with indexing technologies such as Apache Solr/Lucene.
                  </p>

                  <p><strong>May, 2013 - January, 2014</strong><br/>
                  <strong>Trainee Developer</strong><br />
                  <strong>“DataEasy Tecnologia e Serviços””, Goiânia</strong><br />
                  Worked in a corporate search engine written in Java. Did back-end development dealing
                  with indexing technologies such as Apache Solr/Lucene and did front-end development using the
                  toolchain GWT (Google Web Toolkit).
                  </p>

                  <p><strong>March, 2012 – January, 2013</strong><br/>
                  <strong>Trainee Developer</strong><br />
                  <strong>“Banco do Brasil”, Goiânia</strong><br />
                  Worked in a software project written in Java that utilized JSP (JavaServer Pages) on top of
                  Struts 2, JDBC (Java Database Connectivity) and the PostgreSQL Database.</p>
              </dd>
              
              <dd className="clear"></dd>
              
              <dd>
                  <h2>Relevant Courses</h2>
                  <ul>
                      <li><strong>Architecture and Design of Java Projects</strong>, “Caelum Ensino e Inovação”, Brasilia, 2014</li>
                      <li><strong>Java Web Development</strong>, “3way Networks”, Goiânia, 2011</li>
                      <li><strong>Java Object Oriented</strong>, “3way Networks”, Goiânia, 2011</li>
                  </ul>
                 
              </dd>

              <dd className="clear"></dd>
          </dl>
          
          <div className="clear"></div>
      
      </div>);
  }
}

export default Resume;
