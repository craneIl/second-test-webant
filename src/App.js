import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Head from './components/head/Head'
import Gallery from './components/gallery/Gallery'
import registrationApp from './api/registrationApp'
import Registration from './components/registration/Registration'
import Authorization from './components/authorization/Authorization'
import PopularMenu from './components/popular/PopularMenu'
import UploadImage from './components/uploadImage/UploadImage'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		registrationApp()
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Head />
					<div>
						<Route 
							render={
								(props)=><Gallery 
									isNew={true}  
									{...props}
								/>
							} 
							exact path="/" 
						/>
						<Route 
							render={
								(props)=><Gallery 
									isNew={true} 
									{...props}
								/>
							} 
							path="/gallery" 
						/>
						<Route component={Registration} path="/registration" />
						<Route component={Authorization} path="/authorization" />
						<Route component={PopularMenu} path="/popular" />
						<Route component={UploadImage} path="/uploadImage" />
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
