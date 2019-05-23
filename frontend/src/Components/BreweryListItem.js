import React, { Component } from 'react';


class BreweryListItem extends Component {

	handleOnClick = () => {
	
	}

	render(){
	return (
		<div className ='breweryItem' onClick={this.handleOnClick}>
			<h3>{this.props.name}</h3>
			<h4>{this.props.type}</h4>
			<h4>{this.props.street}</h4>
			<h4>{this.props.city}</h4>
			<h4>{this.props.state}</h4>
			<h4>{this.props.street}</h4>
			<h4>{this.props.website}</h4>
		</div>
		)

	}
}

export default BreweryListItem