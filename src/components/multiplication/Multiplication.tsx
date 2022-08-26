import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionTypes, selectors } from '../../features/multiplication'
import { getRandomRangeNumber } from '../../features/multiplication/utils'

const Multiplication: React.FC = () => {
  const gameStart = useSelector(selectors.getGameStart)
  const answer = useSelector(selectors.getAnswer)
  const randomNumbers = useSelector(selectors.getRandomNumbers)
  const getCheckAnswer = useSelector(selectors.getCheckAnswer)
  const dispatch = useDispatch()
  // const GameMode = useSelector(selectors.getGameMode)
  // TODO next round
  const next = () => {
    dispatch({ type: actionTypes.UPDATE_ANSWER, payload: '' })
    const newRandomNumbers = {
      firstNumber: getRandomRangeNumber(1, 9),
      secondNumber: getRandomRangeNumber(10, 99),
    }
    return dispatch({
      type: actionTypes.SET_RANDOM_NUMBERS,
      payload: newRandomNumbers,
    })
  }
  const startButtonHandler = () => {
    dispatch({ type: actionTypes.SET_START })
    dispatch({
      type: actionTypes.SET_RANDOM_NUMBERS,
      payload: {
        firstNumber: getRandomRangeNumber(1, 9),
        secondNumber: getRandomRangeNumber(10, 99),
      },
    })
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: actionTypes.UPDATE_ANSWER,
      payload: event.target.value.replace(/\D/g, ''),
    })
  }
  const checkAnswer = () => {
    if (getCheckAnswer) {
      alert('well done')
      return next()
    } else {
      return alert('try again :(')
    }
  }
  const StartButton = (): JSX.Element => {
    if (!gameStart) {
      return (
        <button type="button" onClick={() => startButtonHandler()}>
          Start
        </button>
      )
    } else {
      return <div></div>
    }
  }
  const Game = (): JSX.Element => {
    if (gameStart) {
      return (
        <>
          <div>{randomNumbers.firstNumber}</div> * <div>{randomNumbers.secondNumber}</div>
          <input
            autoFocus={true}
            type="text"
            value={answer}
            onChange={handleChange}
          />
          <button type="submit" onClick={() => checkAnswer()}>
            check answer
          </button>
        </>
      )
    } else {
      return <div></div>
    }
  }
  return (
    <div>
      <StartButton />
      <Game />
    </div>
  )
}

export default Multiplication
