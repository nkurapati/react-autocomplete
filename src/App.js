import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import AutoCompleteField from './auto-complete-field';
import SearchResults from './search-results';
import SuggestionsService from './services/suggestions-service';

class App extends Component {
  getSuggestions(key) {
    return SuggestionsService.getDataFromGoogle(key).then(response => {
      return response.map(item => {
        return item.title.split('-')[0];
      })
    });
  }

  updateCallback(callback) {
    this.updateResults = callback;
  }

  showResults(key) {
    return SuggestionsService.getDataFromGoogle(key)
    .then(response => {
      if(typeof this.updateResults == 'function') {
        this.updateResults(response);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo-wrpr"><img src={logo} className="App-logo" alt="logo" /></div>
          <AutoCompleteField minChars="3" getSuggestions={this.getSuggestions.bind(this)} showResults={this.showResults.bind(this)}></AutoCompleteField>
        </header>
          <SearchResults updateCallback={this.updateCallback.bind(this)}></SearchResults>
        <main>
        </main>
      </div>
    );
  }
}

export default App;
