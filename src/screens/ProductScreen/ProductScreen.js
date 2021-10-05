import { listProductDetails } from 'actions/productActions'
import Loader from 'components/Loader/Loader'
import Message from 'components/Message/Message'
import Rating from 'components/Rating/Rating'
import { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './ProductScreen.scss'

const ProductScreen = ({ match, history }) => {
	const [qty, setQty] = useState(1)
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
	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`)
	}
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
								{countInStock > 0 && (
									<ListGroup.Item>
										<Row>
											<Col>Qty</Col>
											<Col>
												<Form.Control
													as='select'
													value={qty}
													onChange={e => setQty(e.target.value)}>
													{[...Array(countInStock).keys()].map(x => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</Form.Control>
											</Col>
										</Row>
									</ListGroup.Item>
								)}
								<ListGroup.Item>
									<Button
										onClick={addToCartHandler}
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
