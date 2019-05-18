import React from 'react';


const BreweryListItem = props => {

// console.log(props)
return (<div className ='breweryItem'>
	<h3>{props.name}</h3>
	<h4>{props.type}</h4>
	<h4>{props.street}</h4>
	<h4>{props.website}</h4>
	</div>
	)
}


export default BreweryListItem