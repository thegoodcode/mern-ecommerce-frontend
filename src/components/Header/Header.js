import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect fixed='top'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>MERN E-Commerce</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav' style={{ flexGrow: 0 }}>
						<Nav className='ml-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart' /> Cart
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user' /> Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
