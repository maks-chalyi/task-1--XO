import '../app.module.css'

export default function Cell({ value, handleClick, winner, isGameEnded, setIsGameEnded  }) {

	if (winner) {
		setIsGameEnded(true)
	}

	return (
		<>
			<button
				disabled={isGameEnded}
				onClick={handleClick}>
				{value}
			</button>
		</>
	)
}