import React from 'react';
import './Registration.css';
import { Form, Input, Button, DatePicker, Tooltip } from 'antd';
import registrationUser from '../../api/registrationUser';
import { QuestionCircleOutlined } from '@ant-design/icons';
import alert from '../../helpers/alert';


class Registration extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			successfully : null			
		}
		this.myForm = React.createRef()
		this.inputPass = React.createRef()
		this.validation=this.validation.bind(this)
	}

	validation( password ){
		const templatePassword = /[\p{L}\p{N}\p{P}]{5,}/iu;
		return templatePassword.test(password);

	}

	render(){
		const layout = {
			labelCol: {
				span: 8,
			},
			wrapperCol: {
				span: 8,
			},
		};
		const tailLayout = {
			wrapperCol: {
				offset: 8,
				span: 16,
			},
		}; 
		return(
			<div className="container my-4 d-flex-column "> 
				<h3 className="font-weight-light col-6 offset-3 ">
					Enter your contact info for registration 
				</h3>

				{(this.state.successfully)? 
					(
						alert("success", "Now you can log in.")
					) : (this.state.successfully === false) ? (
							alert("error", "Such user is already registered.")
						) : null   
				}
				
				<Form
					{...layout}
					ref = { this.myForm }
					id="basic"
					name="basic"
					initialValues={{
						remember: true,
					}}
					onFinish={ async (e)=>{ 
						const values = {
							...e,
							'date-picker': e['date-picker'].format('YYYY-MM-DD'),
						};
						
						if( !this.validation( values.password ) ){
							
							this.myForm.current.setFieldsValue({
								password : '',
							})

							this.inputPass.current.focus({
								cursor : 'start',
							})

							return
						}
						let answerRegUser = await registrationUser(
							values.email,
							values.number,
							values.fullname,
							values.password,
							values.username,
							values['date-picker']	
						);
						this.setState({successfully : answerRegUser});		
					}}		
				>
					<Form.Item
						label="Fullname"
						name="fullname"
						rules={[
							{
								required: true,
								message: 'Please input your fullname!',
							},
						]}
						>
						<Input />
					</Form.Item>

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
						label={
							<span className=" w-100 ">
								Password&nbsp;
							</span>
						}
						help = {'should be minimum 5 characters'}
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password  ref = { this.inputPass } />
					</Form.Item>

					<Form.Item
						label={ 
							<span className="w-100">
								Email&nbsp;
							</span>
						}
						name="email"
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your email!',
							},
						]}
						>
						<Input />
					</Form.Item>

					<Form.Item
						label="Phone"
						name="number"
						rules={[
							{
								required: true,
								message: 'Please input your number!',
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item 
						name="date-picker" 
						label="Birthday" 
						rules={[
							{ 
								type: 'object', 
								required: true, 
								message: 'Please select time!' 
							} 
						]}
					>
        				<DatePicker />
      				</Form.Item>

					<Form.Item {...tailLayout}>
						<Button 
							type="primary" 
							htmlType="submit" 
						>
							Send
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default Registration;
