import React from 'react'
import './Preloader.css'

class Preloader extends React.Component {
	render() {
		return (
			<div className="preloaderBack">
				<div className="preloaderDiv">
					<div
						id="preloaderDivCircle"
						className="d-flex justify-content-around"
					>
						<div className="rounded-circle "></div>
						<div className="rounded-circle "></div>
						<div className="rounded-circle "></div>
					</div>
					<p>Loading...</p>
				</div>
			</div>
		)
	}
}

export default Preloader
