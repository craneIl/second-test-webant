import React from 'react'
import './Authorization.css'
import { Form, Input, Alert, Button } from 'antd'
import authorizationUser from '../../api/authorizationUser'
import { connect } from 'react-redux'
import addAccessToken from '../../store/actionCreators/addAccessToken'


class Authorization extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	async login(username, password) {
		try {
			let answerAuthUser = await authorizationUser(password, username)

			this.props.add_Access(answerAuthUser)

			this.props.history.push('/')
		} catch (e) {
			this.setState({
				loginError: true,
			})
		}
	}

	render() {
		const layout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 8,
			},
		}

		const tailLayout = {
			wrapperCol: {
				offset: 8,
				span: 16,
			},
		}

		return (
			<div className="container my-4 d-flex-column ">
				

				<h3 className="font-weight-light col-6 offset-3 ">Authorization</h3>

				{this.state.loginError ? (
					<Alert
						className="my-4"
						message="Error"
						description={'Invalid username and password combination'}
						type="error"
						showIcon
					/>
				) : null}

				<Form
					{...layout}
					id="basic"
					name="basic"
					initialValues={{
						remember: true,
					}}
					onFinish={async (e) => {
						this.login(e.username, e.password)
					}}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Log in
						</Button>
					</Form.Item>
				</Form>
			</div>
		)
	}
}

export default connect(
	(state) => ({
		myStore: state,
	}),
	(dispatch) => ({
		add_Access: (access) => {
			dispatch(addAccessToken(access))
		},
	})
)(Authorization)
