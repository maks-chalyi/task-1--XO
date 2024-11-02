import classes from '../app.module.css'
import PropTypes from 'prop-types'

export default function FieldContainer({ winner, field, setField, currentPlayer, setCurrentPlayer, isGameEnded }) {

	FieldContainer.PropTypes = {
		winner: PropTypes.string,
		field: PropTypes.array,
		currentPlayer: PropTypes.bool,
		isGameEnded: PropTypes.bool,
		setField: PropTypes.func,
		setCurrentPlayer: PropTypes.func,
	}

	function handleClick(index) {
		let fieldCopy = [...field]
		if (winner || fieldCopy[index]) return

		if (field[index]) return // чтобы не повторялся клик по ячейке
		fieldCopy[index] = (currentPlayer) ? 'x' : 'o'
		setCurrentPlayer(!currentPlayer)
		setField(fieldCopy)
	}




	return (
		<>
			<FieldLayout
				field={field}
				isGameEnded={isGameEnded}
				handleClick={handleClick}
			>
			</FieldLayout>
		</>
	)
}


function FieldLayout({ field, isGameEnded, handleClick }) {

	FieldContainer.PropTypes = {
		field: PropTypes.array,
		isGameEnded: PropTypes.bool,
		handleClick: PropTypes.func,
	}

	return (
		<div className={classes.gameField} >
			{field.map((elem, index) => (
				<button
					disabled={isGameEnded}
					key={index}
					onClick={() => handleClick(index)}>
					{elem}
				</button>
			))}
		</div>

	)
}