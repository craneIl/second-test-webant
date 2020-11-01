import React from 'react'
import './Head.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import deleteAccessToken from '../../store/actionCreators/deleteAccessToken'

class Head extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	getHeaderTabs(pathName) {
		const links = [
			{
				to: '/',
				title: 'New',
				key : 'new',
			},
			{
				to: '/popular',
				title: 'Popular',
				key : 'popular',
			},
		]

		return links.map((link) => {
			return (
				<Link
					className={`col-1 linkA ${pathName === link.to ? 'currentLink' : ''}`}
					to={link.to}
					key={link.key}
				>
					{link.title}
				</Link>
			)
		})
	}

	render() {
		const access_token = this.props.myStore.access_token
		const refresh_token = this.props.myStore.refresh_token
		const { pathname } = this.props.location

		return (
			<div className="mainHead">
				<div className="row mt-3">
					<div className="col-2 px-0">
						<img src="/img/Object.png" alt="logo" />
					</div>
					<div className="col-10 pt-2">
						<div className="row border-bottom headDiv d-flex justify-content-between">
							<div>{this.getHeaderTabs(pathname)}</div>

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
