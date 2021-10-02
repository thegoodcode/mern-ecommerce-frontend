import Rating from 'components/Rating/Rating'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Product.scss'

const Product = ({
	product: { name, _id, image, rating, numReviews, price }
}) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/product/${_id}`}>
				<Card.Img src={image} variant='top' />
			</Link>
			<Card.Body>
				<Link to={`/product/${_id}`}>
					<Card.Title as='div'>
						<strong>{name}</strong>
					</Card.Title>
				</Link>
				<Card.Text as='div'>
					<Rating
						value={rating}
						text={`${rating} from ${numReviews} reviews`}
					/>
				</Card.Text>
				<Card.Text as='h3' className='price'>
					${price}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Product
