import { listProductDetails } from 'actions/productActions'
import Loader from 'components/Loader/Loader'
import Message from 'components/Message/Message'
import Rating from 'components/Rating/Rating'
import { useEffect } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './ProductScreen.scss'

const ProductScreen = ({ match }) => {
	const dispatch = useDispatch()
	const {
		loading,
		error,
		product: {
			name,
			image,
			rating,
			numReviews,
			price,
			description,
			countInStock
		}
	} = useSelector(state => state.productDetails)
	useEffect(() => {
		dispatch(listProductDetails(match.params.id))
	}, [match, dispatch])
	return (
		<>
			<Link to='/' className='btn btn-light my-3 border'>
				Go Back
			</Link>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<Col md={6}>
						<Image src={image} alt={name} fluid />
					</Col>
					<Col md={3}>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h3>{name}</h3>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating value={rating} text={`${numReviews} reviews`} />
							</ListGroup.Item>
							<ListGroup.Item>Price: ${price}</ListGroup.Item>
							<ListGroup.Item>Description: ${description}</ListGroup.Item>
						</ListGroup>
					</Col>
					<Col md={3}>
						<Card>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<Row>
										<Col>Price:</Col>
										<Col>
											<strong>${price}</strong>
										</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Row>
										<Col>Status:</Col>
										<Col>{countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
									</Row>
								</ListGroup.Item>
								<ListGroup.Item>
									<Button
										className='btn-block add-button'
										type='button'
										disabled={countInStock === 0}>
										Add to Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Card>
					</Col>
				</Row>
			)}
		</>
	)
}

export default ProductScreen
