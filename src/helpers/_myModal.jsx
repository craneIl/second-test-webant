import { Modal } from 'antd'
import 'antd/dist/antd.css'
import React from 'react'

export default class _myModal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: true,
		}
	}

	render() {
		return (
			<div>
				<Modal
					visible={true}
					footer={null}
					onOk={() => this.props.closeModal()}
					onCancel={() => this.props.closeModal()}
				>
					<div className="card">
						<img
							src={
								'http://gallery.dev.webant.ru/media/' +
								this.props.image.image.name
							}
							className=" w-100 "
							alt="images"
						/>
						<div className="card-body">Description</div>
					</div>
				</Modal>
			</div>
		)
	}
}
