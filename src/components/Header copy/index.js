import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="text-center text-dark">Employee Directory</h1>
          </div>
        </div>
      </div>
    )
  }
}