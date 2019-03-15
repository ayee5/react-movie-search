import React, { Component } from 'react';

class Movieresult extends Component {

  constructor(props) {
    super(props);
  }

  createTable() {
    let tableRow = []
    // Outer loop to create parent
    let movieList = this.props.movieObject;
    for (let key in movieList) {
      if (movieList.hasOwnProperty(key)) {
        let tableCell = [];
        tableCell.push(<td key={movieList[key].id+"_1"}>{movieList[key].title}</td>);
        tableCell.push(<td key={movieList[key].id+"_2"}>{movieList[key].overview}</td>);
        tableRow.push(<tr key={movieList[key].id}>{tableCell}</tr>);
      }
    }
    return tableRow;
  }

  render() {
    return (
      <div>
        <table>
            <tbody>
              {this.createTable()}
            </tbody>
        </table>
        {this.props.textVal}
      </div>
    );
  }
}

export default Movieresult;
