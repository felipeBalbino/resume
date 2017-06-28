import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
                <aside className="col l4 m12 s12 sidebar z-depth-1" id="sidebar">

                    <div className="row">                      

                        <div className="heading">                                                                                

                            <div className="title col s12 m12 l9 right  wow fadeIn animated" data-wow-delay="0.1s">   
                                <h2>Al Rayhan</h2> 
                                <span>UI &amp; UX Expert</span>  
                            </div>                         
                        </div>

                        <div className="col l12 m12 s12 sort-info sidebar-item">
                            <div className="row">                               
                                <div className="col m12 s12 l3 icon"> 
                                   <i className="fa fa-user"></i>
                                </div>                                
                                <div className="col m12 s12 l9 info wow fadeIn a1 animated" data-wow-delay="0.1s" > 
                                    <div className="section-item-details">
                                        <p>{this.props.data.description}</p>
                                    </div>             
                                </div>
                            </div>         
                        </div>

                        <div className="col l12 m12 s12  mobile sidebar-item">
                            <div className="row">                                
                                <div className="col m12 s12 l3 icon">
                                    <i className="fa fa-phone"></i>
                                </div>                                
                                <div className="col m12 s12 l9 info wow fadeIn a2 animated" data-wow-delay="0.2s" >
                                    <div className="section-item-details">
                                        <div className="personal">
                                            <h4><a href="tel:555-555-5555">(111)-333-4444</a></h4>           
                                            <span>mobile</span> 
                                        </div>
                                        <div className="work">
                                            <h4><a href="tel:555-555-5555">(121)-323-3494</a></h4> 
                                            <span>work</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>             
                        </div>

                        <div className="col l12 m12 s12  email sidebar-item ">
                            <div className="row">                                
                                <div className="col m12 s12 l3 icon">
                                    <i className="fa fa-envelope"></i> 
                                </div>                                
                                <div className="col m12 s12 l9 info wow fadeIn a3 animated" data-wow-delay="0.3s" >
                                    <div className="section-item-details">
                                        <div className="personal">                                    
                                            <h4><a href="mailto:someone@example.com">mail@alrayhan.com</a></h4> 
                                            <span>personal</span> 
                                        </div>
                                        <div className="work">                                 
                                            <h4><a href="mailto:someone@example.com">ar@deviserweb.com</a></h4> 
                                            <span>work</span> <br/>
                                        </div>
                                    </div>
                                </div> 
                            </div>          
                        </div>
     
                        <div className="col l12 m12 s12  address sidebar-item ">
                            <div className="row">                                
                                <div className="col l3 m12  s12 icon">
                                    <i className="fa fa-home"></i> 
                                </div>                                
                                <div className="col m12 s12 l9 info wow fadeIn a4 animated" data-wow-delay="0.4s" >
                                    <div className="section-item-details">
                                        <div className="address-details"> 
                                            <h4>24 Golden Tower <span>(2nd floor)</span><br/>
                                            Amborkhana, Sylhet.<br/>
                                            <span>SYL-3RF87W</span></h4> 
                                        </div>                         
                                    </div>
                                </div>
                            </div>            
                        </div>
                        
                    </div>  
                </aside>

    );
  }
}

export default About;
