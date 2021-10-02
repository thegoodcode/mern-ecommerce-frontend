import './Loading.scss'

const Loading = () => {
	return (
		<div className='Loading'>
			<h1>
				Loading
				<div className='dots'>
					<span className='dot z'></span>
					<span className='dot f'></span>
					<span className='dot s'></span>
					<span className='dot t'>
						<span className='dot l'></span>
					</span>
				</div>
			</h1>
		</div>
	)
}

export default Loading
