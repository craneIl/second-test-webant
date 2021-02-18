import React from 'react'
import createMediaObject from '../../api/createMediaObject'
import requestUploadImage from '../../api/requestUploadImage'
import alert from '../../helpers/alert'
import Preloader from '../preloader/Preloader'

class UploadImage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			file: null,
			fileName: null,
			successfully: null,
			isLoading: false,
		}
		this.myForm = React.createRef();
	}

	async onFileChange(e) {
		const file = e.target.files[0]
		this.setState({
			file: file,
			fileName: file.name,
		})
	}

	async uploadImage() {
		this.setState({ isLoading: true })

		const form = this.myForm.current ; 

		if (!this.state.file) {
			return
		}

		const response = await createMediaObject(this.state.file)
		const result = await requestUploadImage(
			response,
			form.new.checked,
			form.popular.checked
		)

		this.setState({
			fileName: null,
			successfully: result,
			isLoading: false,
		})
	}

	render() {
		return (
			<div className="container my-4 d-flex-column ">
				<h3 className="font-weight-light col-6 offset-3 ">
					Here you can upload an image by filling out the form
				</h3>

				{this.state.isLoading ? <Preloader /> : null}

				{this.state.successfully
					? alert('success', 'Your image uploaded successfully.')
					: this.state.successfully === false
					? alert('error', 'Error while loading image.')
					: null}

				<div className="mt-4 container">
					<h3>Selected Photo</h3>

					<form ref={ this.myForm } >
						<input type="hidden" name="MAX_FILE_SIZE" value="64000" />

						<div className="custom-file col-6">
							<input
								id="file"
								name="file"
								type="file"
								className="col-3 mt-2 custom-file-input "
								onChange={this.onFileChange.bind(this)}
							/>
							<label className="custom-file-label" htmlFor="file">
								Choose file
							</label>
						</div>

						<div className=" my-1 input-group">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<input name="new" type="checkbox" />
								</div>
							</div>
							<label className=" mx-3 my-2" htmlFor="new">
								{' '}
								New{' '}
							</label>
						</div>

						<div className="input-group">
							<div className="input-group-prepend">
								<div className="input-group-text">
									<input name="popular" type="checkbox" />
								</div>
							</div>
							<label className=" mx-3 my-2 " htmlFor="popular">
								{' '}
								Popular{' '}
							</label>
						</div>

						<p className="mb-2">Filename : {this.state.fileName}</p>

						<div>
							<input
								type="button"
								onClick={this.uploadImage.bind(this)}
								value="Send"
								className=" btn btn-outline-secondary  "
							/>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default UploadImage
