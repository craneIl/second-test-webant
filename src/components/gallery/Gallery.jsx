/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Gallery.css'
import Preloader from '../preloader/Preloader'
import requestGallery from '../../api/requestGallery'
import { Pagination } from 'antd'
import 'antd/dist/antd.css'
import _myModal from '../../helpers/_myModal'

class Gallery extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			images: [],
			isLoading: true,
			totalPageNum: 0,
			error: false,
			description: null,
			openedImage: null,
			currentPage: 1,
		}
		this.showErrorMessage = this.showErrorMessage.bind(this)
	}

	componentDidMount() {
		this.request(this.state.currentPage)
	}

	closeImageModal() {
		this.setState({
			openedImage: null,
		})
	}

	showErrorMessage() {
		return (
			<div className="col-6 px-0 d-flex-column ">
				<img 
					src="/img/error.jpg" 
					className="my-3 ml-4"	
				/>				
				<h3 className="" >Oh,Shucks</h3>
				<p>
					Slow or no internet connection. Please check your internet settings
				</p>			
			</div>
		)
	}

	async request(page) {
		this.setState({ isLoading: true, currentPage: page })

		try {
			const response = await requestGallery(
				page,
				this.props.isNew,
				this.props.isPopular
			)

			this.setState({
				images: response.data,
				totalPageNum: response.countOfPages,
				error: false,
			})
		} catch {
			this.setState({
				error: true,
			})
		} finally {
			this.setState({
				isLoading: false,
			})
		}
	}

	getImages() {
		let collectionElem = this.state.images
		return collectionElem.map((OneElemRecord) => {
			return (
				<div className="col-3 my-3" key={OneElemRecord.id}>
					<div
						className=" imgMenu "
						onClick={() => {
							this.setState({ openedImage: OneElemRecord })
						}}
					>
						<img
							src={
								'http://gallery.dev.webant.ru/media/' + OneElemRecord.image.name
							}
							alt="description"
						/>
					</div>
				</div>
			)
		})
	}

	render() {
		return (
			<div>
				{this.state.isLoading ? <Preloader /> : null}
				<div className="mt-4">
					<div className="row d-flex-column justify-content-around" >
						<div className="row d-flex justify-content-start ">
							{this.getImages()}
						</div>
						{this.state.error 
						? this.showErrorMessage()
						: (
							<div>
								<Pagination
									className="my-3"
									current={this.state.currentPage}
									total={this.state.totalPageNum * 10}
									showSizeChanger={false}
									onChange={(page) => this.request(page)}
								/>
							</div>
						)}
					</div>
				</div>

				{this.state.openedImage ? (
					<_myModal
						image={this.state.openedImage}
						closeModal={this.closeImageModal.bind(this)}
					/>
				) : null}
			</div>
		)
	}
}

export default Gallery
