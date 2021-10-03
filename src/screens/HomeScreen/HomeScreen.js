import axios from 'axios'
import Product from 'components/Product/Product'
import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		const getProducts = async () => {
			try {
				const { data } = await axios.get('/api/products')
				setProducts(data)
			} catch (err) {
				throw err
			}
		}
		getProducts()
	}, [])
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
