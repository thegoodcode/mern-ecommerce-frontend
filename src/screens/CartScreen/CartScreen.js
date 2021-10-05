import { addToCart, removeFromCart } from 'actions/cartActions'
import Message from 'components/Message/Message'
import { useEffect } from 'react'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id
	const qty = location.search ? Number(location.search.split('=')[1]) : 1
	const dispatch = useDispatch()
	const { cartItems } = useSelector(state => state.cart)
	useEffect(() => {
		if (productId) dispatch(addToCart(productId, qty))
	}, [dispatch, productId, qty])
	const removeFromCartHandler = id => {
		dispatch(removeFromCart(id))
	}
	const checkoutHandler = () => history.push('/login?redirect=shipping')
	return (
		<Row>
			<Col md={8}>
				<h1 className='py-4'>Shopping Cart</h1>
				{cartItems.length ? (
					<ListGroup variant='flush'>
						{cartItems.map(
							({ product, image, name, price, countInStock, qty }) => (
								<ListGroup.Item key={product}>
									<Row>
										<Col md={2}>
											<Image src={image} alt={name} fluid rounded />
										</Col>
										<Col md={3}>
											<Link to={`/product/${product}`}>{name}</Link>
										</Col>
										<Col md={2}>${price}</Col>
										<Col md={2}>
											<Form.Control
												as='select'
												value={qty}
												onChange={e =>
													dispatch(addToCart(product, Number(e.target.value)))
												}>
												{[...Array(countInStock).keys()].map(x => (
													<option key={x + 1} value={x + 1}>
														{x + 1}
													</option>
												))}
											</Form.Control>
										</Col>
										<Col md={2}>
											<Button
												type='button'
												variant='light'
												onClick={() => removeFromCartHandler(product)}>
												<i className='fas fa-trash'></i>
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							)
						)}
					</ListGroup>
				) : (
					<Message>
						Your cart is empty <Link to='/'>Go Back</Link>
					</Message>
				)}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2 className='py-3'>
								Subtotal: {cartItems.reduce((acc, { qty }) => acc + qty, 0)}
							</h2>
							$
							{cartItems
								.reduce((acc, { qty, price }) => acc + qty * price, 0)
								.toFixed(2)}
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								type='button'
								className='btn-block'
								disabled={cartItems.length === 0}
								onClick={checkoutHandler}>
								Proceed to Checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	)
}

export default CartScreen
