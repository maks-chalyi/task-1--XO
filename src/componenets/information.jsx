import classes from '../App.module.css'
import { FIELD } from '../data'
import { useEffect } from 'react'

export default function InformationContainer({ winner, field, setField, currentPlayer, setCurrentPlayer, isDraw, setIsDraw }) {

	useEffect(() => {
		if (!field.includes('') && !winner) {
			setIsDraw(true)
		}
		
		if (field.includes('')) {
			setIsDraw(false)
		}
	})

	function buttonClick() {
		setField(FIELD) // чтобы очистилось поле после нажатия кнопки
		setCurrentPlayer(true)

	}

	return (
		<>
			<InformationLayout
				isDraw={isDraw}
				currentPlayer={currentPlayer}
				winner={winner}
				buttonClick={buttonClick}>

			</InformationLayout>
		</>
	)
}

function InformationLayout({ currentPlayer, winner, buttonClick, isDraw }) {

	return (
		<div className={classes.infoContent}>
			<button
				onClick={buttonClick}
				className={classes.btn}>
				Очистить поле
			</button>
			<p className={classes.info}>
				{winner ? `Победитель - ${winner}` : `Следующий ход - ${currentPlayer ? 'x' : 'o'}`}
			</p>
			<p className={classes.draw}>
				{isDraw ? 'Ничья' : ''}
			</p>
		</div>
	)
}