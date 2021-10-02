import Product from 'components/Product/Product'
import products from 'products'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map(product => (
					<Col key={product._id} sm={12} md={6} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	)
}

export default HomeScreen
