import { listProducts } from 'actions/productActions'
import Loader from 'components/Loader/Loader'
import Message from 'components/Message/Message'
import Product from 'components/Product/Product'
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = () => {
	const dispatch = useDispatch()
	const { loading, error, products } = useSelector(state => state.productList)
	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])
	return (
		<>
			<h1>Latest Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{products.map(product => (
						<Col key={product._id} sm={12} md={6} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	)
}

export default HomeScreen
