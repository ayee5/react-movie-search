import React, { Component } from 'react';
import './App.css';
import Movieresult from './Movieresult';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      totalPages: 0,
      currentPage: 1,
      movieList: null
    };
  }

  changetext(e) {
    this.setState({
      searchText: e.target.value
    });

    this.fetchdata( e.target.value, this.state.currentPage);
  }

  fetchdata(movie, page) {
    if(!movie) {
      this.setState({
        totalPages: 0,
        currentPage: 1,
        movieList: null
      });
      return;
    }

    fetch("https://api.themoviedb.org/3/search/movie?api_key=403ffcb3b4481da342203f94fb6e937e&language=en-US&query="+movie+"&page="+page)
      .then(res => res.json())
      .then(
        (resultObj) => {
          console.log(resultObj);
          this.setState({
            movieList: resultObj.results,
            totalPages: resultObj.total_pages,
            currentPage: resultObj.page
          });
        }
      )
    }

  render() {
    return (
      <div className="App">
      <h1>Movie Search App</h1>
      <input
        type="text"
        onChange={(e) => this.changetext(e)}/>
        <Movieresult
          movieObject={this.state.movieList}
          searchText={this.state.searchText}></Movieresult>
      </div>
    );
  }
}

export default App;
