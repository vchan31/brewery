import React, { Component } from 'react';
import BreweryListItem from './BreweryListItem'

class BreweryList extends Component {


renderBreweries = () => {
	return this.props.breweries.map(function(brewery){
		return ([<BreweryListItem key={brewery.id} name={brewery.name} type={brewery.brewery_type} 
		street={brewery.street} city={brewery.city} state={brewery.state} zip={brewery.postal_code} 
		website={brewery.website_url} latitude={brewery.latitude} longitude={brewery.longitude} />, <br/>])
	})

}




render(){
	console.log(this.props.breweries)
	return(
		<div>
		<h2>New York City Breweries</h2>
		<br/>
		{this.renderBreweries()}
		</div>
		)
}




}




export default BreweryList