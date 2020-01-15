import React, { Component } from 'react';

import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { SortBox } from './components/sort-box/sort-box.component';


class App extends Component {
  constructor() {
    super();

    this.state = {
      models: [],
      searchField: '',
      sortDirection: 'descending'
    };
  }

  componentDidMount() {
    fetch('http://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      //.then(users => console.log(users.results))
      .then(users => this.setState({ models: users.results }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };



  onSortChange = event => {
    // console.log(event.target.value);
    this.setState({ sortDirection: event.target.value });
  };
  

  render() {
    const { models, searchField, sortDirection } = this.state;

    const filteredModels = models.filter(model =>
      model.name.toLowerCase().includes(searchField.toLowerCase())      
    );
    let sortdModels;
    if(sortDirection === 'descending') {
      sortdModels = models.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }else{
      sortdModels = models.sort((a, b) => (a.name > b.name) ? -1 : 1)
    }
    

    return (
      <div className='App'>
        <SearchBox onSearchChange={this.onSearchChange} />
        <SortBox onSortChange={this.onSortChange} />
        <CardList models={filteredModels || sortdModels } />
      </div>
    );
  }
}

export default App;