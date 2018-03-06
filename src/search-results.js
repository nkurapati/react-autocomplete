import React, { Component } from 'react';
import './styles/search-results.css';

export default class SearchResults extends Component {
	constructor(props) {
        super(props);
        this.state = {
            results: []
        }
	}
	
	updateResults(resutls) {
        this.setState({
            results: resutls || []
        });
	}

	componentDidMount() {
        this.props.updateCallback(this.updateResults.bind(this));
    }
	
	render() {
		return (
			<ul className="results">
				{
					this.state.results.map(function(result, index) {
						return (<Result key={index} data={result}></Result>)
					})
				}
			</ul>
		);
	}
}

class Result extends Component{
	render() {
		var data = this.props.data;
		return (
			<li className="result">
				<a className="link" href={data.link} target="_blank">{data.title}</a>
                <p className="desc">{data.snippet}</p>
			</li>
		);
	}
};
