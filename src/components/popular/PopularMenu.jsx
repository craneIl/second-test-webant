import React from 'react';
import './PopularMenu.css';
import Gallery from '../gallery/Gallery';


class PopularMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		}	
	}

	render(){
		
		return(
			<div className="container">	
				<Gallery isPopular={true}/>
			</div>
		);
	}
}

export default PopularMenu;