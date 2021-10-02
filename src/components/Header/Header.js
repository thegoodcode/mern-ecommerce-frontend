import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect fixed='top'>
				<Container>
					<Navbar.Brand href='/'>MERN E-Commerce</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav' style={{ flexGrow: 0 }}>
						<Nav className='ml-auto'>
							<Nav.Link href='/car'>
								<i className='fas fa-shopping-cart' /> Cart
							</Nav.Link>
							<Nav.Link href='/login'>
								<i className='fas fa-user' /> Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
