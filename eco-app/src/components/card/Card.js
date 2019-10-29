import React, { Component } from 'react';

class Card extends Component {
  render() {
    // const heading = 'Welcome to React';
    // const bodyText = 'Text on the body';
    return (
        <div className="card">
        <div className="card_header">
        <h4>{this.props.heading}</h4>
        </div>
        <div className="card_body">
        <p>
            {this.props.bodyText}
        </p>
        </div>
    </div>
    );
  }
}
export default Card;
  