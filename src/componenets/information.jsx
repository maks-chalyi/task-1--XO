import classes from '../App.module.css'
import { FIELD } from '../data'
import PropTypes from 'prop-types'

export default function InformationContainer({ winner, field, setField, currentPlayer, setCurrentPlayer, isDraw, setIsDraw }) {

	FieldContainer.PropTypes = {
		winner: PropTypes.string,
		field: PropTypes.array,
		setField: PropTypes.func,
		currentPlayer: PropTypes.bool,
		setCurrentPlayer: PropTypes.func,
		isDraw: PropTypes.bool,
		setIsDraw: PropTypes.func,
	}

	function buttonClick() {
		setField(FIELD)
		setCurrentPlayer(true)
	}

	// условие для появления сообщения что в игре ничья
	// если раскомментировать это условие то выдаст такую ошибку
	// я так понимаю не обновляется состояние isDraw в корневой папке из дочк=ерней, как исправить не знаю
	// Не удается обновить компонент ("App") при отображении другого компонента ("InformationContainer"). Чтобы найти неисправный вызов setState() внутри "Information Container", выполните трассировку стека

	// if (!field.includes('') && !winner) {
	// 	setIsDraw(true)
	// }

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

	FieldContainer.PropTypes = {
		winner: PropTypes.string,
		currentPlayer: PropTypes.bool,
		buttonClick: PropTypes.func,
		isDraw: PropTypes.bool,
	}

	
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
			{/* <p className={classes.draw}>
				{isDraw ? Ничья : ''}
			</p> */}
		</div>
	)
}