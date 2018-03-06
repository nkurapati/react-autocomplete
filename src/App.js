import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import AutoCompleteField from './auto-complete-field';
import SearchResults from './search-results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <AutoCompleteField></AutoCompleteField>
        </header>
          <SearchResults></SearchResults>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
