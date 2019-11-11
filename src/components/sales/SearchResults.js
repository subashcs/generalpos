import React, { Component } from 'react';
import Result from './result.js';

export default class SearchResults extends Component {
	state = {
		
	};
	render() {
		return (
			<div className="results">
			<ul className="list-group" >
				{this.props.result.map((product) => <Result product={product} key={product.id}  changeProduct={this.props.changeProduct} />)}
			</ul>
			</div>
		);
	}
}
