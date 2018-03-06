import React, { Component } from 'react';
import sicon from './images/search.svg';
import './styles/auto-complete-field.css';

export default class AutoCompleteField extends Component {
    throttlingTimeout = null;
    minimumCharsRequired = 0;
    constructor(props) {
        super(props);
        this.minimumCharsRequired = parseInt(this.props.minChars);
        this.state = {
            searchText: '',
            suggestions: [],
            selectedIndex: -1
        }
    }

    onFocus(e) {
        this.getSuggestions();
    }

    onFocusOut(e) {
        //On suggestion select is losting, so adding set timeout
        setTimeout(this.emptySuggestions.bind(this), 200);
    }

    onKeyDown(e) {
        var lSuggestions = this.state.suggestions.length;
        if(!lSuggestions) {
            return;
        }
        var sindex = this.state.selectedIndex;
        var keyCode = e.keyCode;
        if(keyCode === 38 || keyCode === 40) {
            e.preventDefault();
            if(keyCode === 38) {
                sindex = (sindex <= 0)?lSuggestions:sindex;
                sindex--;
            } else if(keyCode === 40) {
                sindex = (sindex >= lSuggestions-1)?0:++sindex;
            }
            this.setState({
                searchText: this.state.suggestions[sindex],
                selectedIndex: sindex
            });
        } 
    }

    onChange(e) {
        var value = this.refs.search.value;
        this.setState({searchText: value});
        this.getSuggestions(value);
    }

    onSubmit(e) {
        e.preventDefault();
        this.emptySuggestions();
        this.showResutls();
    }

    emptySuggestions(suggestions = []) {
        this.setState({
            suggestions: suggestions,
            selectedIndex: -1
        });
    }

    getSuggestions(value) {
        clearTimeout(this.throttlingTimeout);
        value = value || this.state.searchText;
        if(value && value.length >= this.minimumCharsRequired) {
            //Making ajax request when user stops typing 
            this.throttlingTimeout = setTimeout(()=>{
                this.props.getSuggestions(value)
                .then(response => {
                    this.emptySuggestions(response);
                })
            }, 500);
        } else {
            this.emptySuggestions();
        }
    }

    onSuggestionSelect(value) {
        this.setState({
            searchText: value
        });
        this.emptySuggestions();
        this.showResutls(value);
    }

    showResutls(value) {
        clearTimeout(this.throttlingTimeout);
        value = value || this.state.searchText;
        this.props.showResults(value);
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
                    suggestions={this.state.suggestions}
                    selectedIndex={this.state.selectedIndex}  
                    onSuggestionSelect={this.onSuggestionSelect.bind(this)}>
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
                            <Suggestion 
                                key={index}
                                index={index}
                                selectedIndex={props.selectedIndex}
                                suggestion={suggestion}
                                onSelect={props.onSuggestionSelect}>
                            </Suggestion>
                        )
					})
				}
			</ul>
		);
	}
}

class Suggestion extends Component{
    onSelect(e) {
        var value = this.props.suggestion
		this.props.onSelect(value);
    }
    
	render() {
		var props = this.props;
		return (
			<li id={props.index} 
                className={"suggestion" + ((props.selectedIndex === props.index)?" active":"")}
                onClick={this.onSelect.bind(this)}>
				{props.suggestion}
			</li>
		);
	}
};
