import React, { Component } from 'react';
import sicon from './images/search.svg';
import './styles/auto-complete-field.css';

export default class AutoCompleteField extends Component {
    throttlingTimeout = null;
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            suggestions: []
        }
    }

    onFocus(e) {
        //Get suggestions if value is there
    }

    onFocusOut(e) {
        //Hide suggestions
    }

    onKeyDown(e) {
        //Handle up & down arrows
    }

    onChange(e) {
        //Update value
        //Get suggestions
    }

    onSubmit(e) {
        e.preventDefault();
        //Get Search resutls
    }


    render() {
        return (
            <div className="acf">
                <form name="autoCompleteform" onSubmit={this.onSubmit.bind(this)}>
                    <div className="search">
                        <input className="sfield" type="search" placeholder="Search" ref="search" value={this.state.searchText} 
                            onFocus={this.onFocus.bind(this)}
                            onBlur={this.onFocusOut.bind(this)}
                            onChange={this.onChange.bind(this)}
                            onKeyDown={this.onKeyDown.bind(this)} />
                        <button type="submit" className="sicon" value="Search">
                            <img src={sicon} className="icon" alt="Search" />
                        </button>
                    </div>
                </form>
                <Suggestions 
                    suggestions={this.state.suggestions}>
                </Suggestions>
            </div>
        );
    }
}

class Suggestions extends Component {
	render() {
		var props = this.props;
		var suggestions = props.suggestions || [];
		return (
			<ul className="suggestions">
				{
					suggestions.map(function(suggestion, index) {
						return (
                            <Suggestion key={index}
                                suggestion={suggestion}>
                            </Suggestion>
                        )
					})
				}
			</ul>
		);
	}
}

class Suggestion extends Component{
	render() {
		var props = this.props;
		return (
			<li id={props.index} className="suggestion">
				{props.suggestion}
			</li>
		);
	}
};
