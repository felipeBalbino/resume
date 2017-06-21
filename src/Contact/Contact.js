import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
        <div id="contact">
            <h1>{this.props.data.name}</h1>
            <p>
                <span >{this.props.data.location}</span><br />
                Email: <a href={this.props.data.email.address}>{this.props.data.email.label}</a><br />
                LinkedIn: <a href={this.props.data.linkedin.address}>{this.props.data.linkedin.label}</a><br />
                GitHub: <a href={this.props.data.github.address}>{this.props.data.github.label}</a><br />
            </p>
        </div>
    );
  }
}

export default Contact;
