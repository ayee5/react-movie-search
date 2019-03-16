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
      searchText: e.target.value,
      currentPage: 1
    });

    this.fetchdata(e.target.value, this.state.currentPage);
  }

  clickPagintation(page) {
    if(page < 1 || page > this.state.totalPages) return;
    this.setState({
      currentPage: page
    });
    this.fetchdata(this.state.searchText, page);
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
          this.setState({
            movieList: resultObj.results,
            totalPages: resultObj.total_pages,
            currentPage: resultObj.page
          });
        }
      )
    }

  renderPagination() {
    let paginatedLinks = []
    if(this.state.totalPages == 0) return;
    let currentPage = this.state.currentPage;
    let linksPerPage = 8;
    let indexGroup = parseInt((currentPage - 1) / linksPerPage);
    let lastPage = (indexGroup + 1) * linksPerPage;
    let firstPage = lastPage - linksPerPage + 1;

    paginatedLinks.push(<a onClick={() => this.clickPagintation(firstPage-1)}>&laquo;</a>);
    for(let i=firstPage; i<=lastPage; i++) {
      if(lastPage > this.state.totalPages) break;
      if(i == currentPage) {
          paginatedLinks.push(<a className="active">{i}</a>);
      }
      else {
          paginatedLinks.push(<a onClick={() => this.clickPagintation(i)}>{i}</a>);
      }
    }
    paginatedLinks.push(<a onClick={() => this.clickPagintation(lastPage+1)}>&raquo;</a>);
    return paginatedLinks;
  }

  render() {
    return (
      <div className="App">
      <h1>Movie Search App</h1>
      <input
        type="text"
        onChange={(e) => this.changetext(e)}/>
      <div className="pagination">
        {this.renderPagination()}
      </div>
      <Movieresult
        movieObject={this.state.movieList}
        searchText={this.state.searchText}></Movieresult>
      </div>
    );
  }
}

export default App;
