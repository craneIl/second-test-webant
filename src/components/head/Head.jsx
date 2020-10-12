import React from 'react'
import './Head.css'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import deleteAccessToken from '../../store/actionCreators/deleteAccessToken'


class Head extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			redirect : false
		}
	}

	render() {
		let access_token = this.props.myStore.access_token;
		let refresh_token = this.props.myStore.refresh_token;
		let redirect = this.state.redirect;

		return (

			<div className="mainHead">
				{redirect ? <Redirect to="/" /> : null}
				<div className="row mt-3">
					<div className="col-2">
						<img src="/img/Object.png" />
					</div>
					<div className="col-10 pt-2">
						<div className="row border-bottom headDiv d-flex justify-content-between">
							<div>
								<Link className="col-1 linkA" to="/gallery">
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
										<a
											className=" col-1 linkA"
											onClick={() => {
												this.props.deleteAccess();
												this.setState({
													redirect : true
												})
												setTimeout(() =>{
													this.setState({redirect : false})
												}, 1000);		
											}}
										>
											Log out
										</a>
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
