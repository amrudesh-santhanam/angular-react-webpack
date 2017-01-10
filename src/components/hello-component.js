"use strict";

import React, { Component } from 'react';

class HelloComponent extends Component {
  render(){
    return (
      <div>
        <div>Showing in React component inside {this.props.ctrlname}</div>
        <div>Hello {this.props.person.fname} {this.props.person.lname}</div>
      </div>
    );
  }
}

HelloComponent.propTypes = {
  person: React.PropTypes.object,
  ctrlname: React.PropTypes.string
};

export default HelloComponent;
