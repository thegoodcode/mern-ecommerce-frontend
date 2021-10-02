import './App.css'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { Container } from 'react-bootstrap'

const App = () => {
	return (
		<>
			<Header />
			<main className='main py-3'>
				<Container>
					<h1>WELCOME TO MERN ECOMMERCE</h1>
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
