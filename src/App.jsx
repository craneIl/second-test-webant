import React from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import Head from './components/head/Head'
import Gallery from './components/gallery/Gallery'
import registrationApp from './api/registrationApp'
import Registration from './components/registration/Registration'
import Authorization from './components/authorization/Authorization'
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
		const WrappedHead = withRouter(Head);
		
		return (
			<BrowserRouter>
				<div>
					<WrappedHead />
					<div>
						<Route
							render={(props) => <Gallery isNew={true} {...props} />}
							exact
							path="/"
						/>

						<Route
							render={(props) => <Gallery isPopular={true} {...props} />}
							exact
							path="/popular"
						/>

						<Route component={Registration} path="/registration" />
						<Route component={Authorization} path="/authorization" />
						<Route component={UploadImage} path="/uploadImage" />
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

export default App
