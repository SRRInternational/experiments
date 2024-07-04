// YourComponent.jsx
import React from 'react';
import _ from 'https://unpkg.com/lodash@4/lodash.min.js';

const YourComponent = ({ message }) => {
  const upperCaseMessage = _.upperCase(message);
  return <div>{upperCaseMessage}</div>;
};

export default YourComponent;
