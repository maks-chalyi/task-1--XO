
import './index.module.css'
import { useState } from 'react'
import { FIELD } from './data'
import FieldContainer from './componenets/field'
import InformationContainer from './componenets/information'
import { checkWinner } from './data'

export default function App() {

	const [field, setField] = useState(FIELD) // массив игрового поля
	const [currentPlayer, setCurrentPlayer] = useState(true) // ход игрока
	const [isDraw, setIsDraw] = useState(false) // была ли ничья
	const [isGameEnded, setIsGameEnded] = useState(false) // была ли завершена игра
	let winner = checkWinner(field)

	return (
		<>
			<InformationContainer
				winner={winner}
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isDraw={isDraw}
				setIsDraw={setIsDraw} />

			<FieldContainer
				winner={winner}
				isGameEnded={isGameEnded}
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer} />
		</>
	)
}