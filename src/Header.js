import React from 'react';
// import Cards from './Cards';

export default class Product extends React.Component {
	render(){
		console.log(this.props.data)
		return (
			<header className="product-header">
				<p>rabdom text</p>
				<div className="sort-product">
					<p>Order by</p>
					<select>
						<option>Select</option>
						<option>Lowest to highest</option>
						<option>Highest to lowest</option>
					</select>
				</div>
			</header>
		)
	}
}