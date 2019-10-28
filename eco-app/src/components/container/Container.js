import React from 'react';
import './Container.css';

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 'Hello!'};
  }

  render() {
    return (
      <div class="container" id="{this.props.id}" onClick={this.bar}>
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Container;
