import './App.css'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { Container } from 'react-bootstrap'
import HomeScreen from 'screens/HomeScreen'

const App = () => {
	return (
		<>
			<Header />
			<main className='main py-4'>
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default App
