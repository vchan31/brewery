import React, { Component } from 'react';
import BreweryList from '../Components/BreweryList'

class HomePage extends Component {

state = {
	breweries: []
}

componentDidMount(){
	fetch("https://api.openbrewerydb.org/breweries?by_state=new_york").then(res=>res.json())
	.then(res=>{
		this.setState({
			breweries : res
		})
	})
}



	render (){
		// console.log(this.state.breweries)
		return(
			<div>
			<h1>Brewery Searcher</h1>
			<br/>
			<br/>
			<BreweryList breweries={this.state.breweries} handleOnClick={this.handleOnClick}/>
			</div>

			)

	}
}

export default HomePage