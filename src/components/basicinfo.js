import React, { Component } from 'react'

class BasicInfo extends React.Component {
  render() {
    const { person } = this.props;

    return (
      <div>
        <h1>Basic Info</h1>
        <p>Name: {person.name}</p>
        <p>Number: {person.number}</p>
        <p>Date of Birth: {person.dob}</p>
        <p>Occupation: {person.job}</p>
      </div>
    );
  }
}

export default BasicInfo;
