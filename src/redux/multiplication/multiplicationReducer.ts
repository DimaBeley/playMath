/* eslint-disable @typescript-eslint/default-param-last */
import * as actionTypes from './actionTypes'
import { MultiplicationActionTypes } from './types'

const initialState = {
  gameConfiguration: {
    firstNumberRange: 0,
    secondNumberRange: 0,
    gameType: '',
  },
  randomNumbers: {
    firstNumber: 0,
    secondNumber: 0,
  },
  answer: '',
  gameStart: false,
  answersCount: {
    goodAnswer: 0,
    badAnswer: 0,
  },
}

export default (state = initialState, action: MultiplicationActionTypes) => {
  switch (action.type) {
    case actionTypes.SET_RANDOM_NUMBERS:
      return {
        ...state,
        randomNumbers: {
          firstNumber: action.payload.firstNumber,
          secondNumber: action.payload.secondNumber,
        },
      }
    case actionTypes.SET_START_GAME:
      return { ...state, gameStart: action.payload }
    case actionTypes.UPDATE_ANSWER:
      return { ...state, answer: action.payload }
    case actionTypes.SET_GOOD_ANSWER_COUNT:
      return {
        ...state,
        answersCount: {
          goodAnswer: state.answersCount.goodAnswer + 1,
          badAnswer: state.answersCount.badAnswer,
        },
      }
    case actionTypes.SET_BAD_ANSWER_COUNT:
      return {
        ...state,
        answersCount: {
          goodAnswer: state.answersCount.goodAnswer,
          badAnswer: state.answersCount.badAnswer + 1,
        },
      }
    case actionTypes.END_GAME:
      return initialState
    default:
      return state
  }
}
