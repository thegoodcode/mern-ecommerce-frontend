import Rating from 'components/Rating/Rating'
import { Card } from 'react-bootstrap'
import './Product.scss'

const Product = ({
	product: { name, _id, image, rating, numReviews, price }
}) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<a href={`/product/${_id}`}>
				<Card.Img src={image} variant='top' />
			</a>
			<Card.Body>
				<a href={`/product/${_id}`}>
					<Card.Title as='div'>
						<strong>{name}</strong>
					</Card.Title>
				</a>
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
