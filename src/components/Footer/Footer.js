import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
	return (
		<footer>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						<h5>Copyright &copy; MERN E-Commerce {new Date().getFullYear()}</h5>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
