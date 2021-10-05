import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
	return (
		<Alert variant={variant} style={{ margin: '50px auto' }}>
			{children}
		</Alert>
	)
}

Message.defaultProps = {
	variant: 'info'
}

export default Message
