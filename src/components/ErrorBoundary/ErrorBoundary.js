import { Component } from 'react'
import './ErrorBoundary.scss'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)
		this.state = { error: null, errorInfo: null, hasError: false }
	}
	static getDerivedStateFromError(error) {
		return { hasError: true, error }
	}
	componentDidCatch(error, errorInfo) {
		console.log('error: ', error)
		console.log('error info: ', errorInfo)
		this.setState({ ...this.state, errorInfo })
	}
	render() {
		const { hasError } = this.state
		const { children } = this.props
		if (hasError) {
			return (
				<section className='ErrorBoundary'>
					<h3>Something went wrong.</h3>
				</section>
			)
		}
		return children
	}
}

export default ErrorBoundary
