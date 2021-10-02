import './App.scss'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loading from 'components/Loading/Loading'

const HomeScreen = lazy(() => import('screens/HomeScreen/HomeScreen'))
const ProductScreen = lazy(() => import('screens/ProductScreen/ProductScreen'))

const App = () => {
	return (
		<Router>
			<Suspense fallback={<Loading />}>
				<Header />
				<main className='App py-4'>
					<Container>
						<Route path='/' exact component={HomeScreen} />
						<Route path='/product/:id' component={ProductScreen} />
					</Container>
				</main>
				<Footer />
			</Suspense>
		</Router>
	)
}

export default App
