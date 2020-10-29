import React from 'react'
import './Head.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import deleteAccessToken from '../../store/actionCreators/deleteAccessToken'

class Head extends React.Component {
	constructor(props) {
		super(props)
		this.state = {			
		}
		this.activeLink = this.activeLink.bind(this);
	}

	componentDidMount(){
		const linkAfterReboot = this.props.location.pathname		
		this.activeLink(linkAfterReboot)
	}

	activeLink( link ) {
		const nodeLink = document.querySelectorAll('.linkA');
		const arrayLink = Array.from(nodeLink);

		arrayLink.map( (oneLink) => {
			(oneLink.href === 'http://localhost:3000'+link)
			? oneLink.classList.add('currentLink')
			: oneLink.classList.remove('currentLink');
		})
	}

	render() {
		const access_token = this.props.myStore.access_token
		const refresh_token = this.props.myStore.refresh_token
		const current_link = this.props.location.pathname 
		
		return (
			<div className="mainHead">				
				{this.activeLink(current_link)}
				<div className="row mt-3">
					<div className="col-2">
						<img src="/img/Object.png" alt="logo" />
					</div>
					<div className="col-10 pt-2">
						<div className="row border-bottom headDiv d-flex justify-content-between">
							<div>
								<Link className="col-1 linkA" to="/">
									News
								</Link>
								<Link className="col-1 linkA" to="/popular">
									Popular
								</Link>
							</div>
							<div>
								{access_token && refresh_token ? (
									<div>
										<Link className="linkA col-1" to="/uploadImage">
											Upload image
										</Link>
										<Link
											to="/"
											className=" col-1 linkB"
											onClick={() => {
												this.props.deleteAccess()
											}}
										>
											Log out
										</Link>
									</div>
								) : (
									<div>
										<Link className="linkA col-1" to="/registration">
											Registration
										</Link>
										<Link className="linkA col-1" to="/authorization">
											Authorization
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default connect(
	(state) => ({
		myStore: state,
	}),
	(dispatch) => ({
		deleteAccess: () => {
			dispatch(deleteAccessToken())
		},
	})
)(Head)
