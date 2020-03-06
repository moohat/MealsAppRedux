import * as actionTypes from '../constants/actionTypes'

const meals = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOAD_MEAL_SUCCESS:
    return action.meals.map((item)=>{
      item.sent = true;
      item.mealType = item.type;
      return item
    })

    case actionTypes.ADD_MEAL:
    return [
      ...state,
      {
        id: state.reduce((maxId, data) => Math.max(data.id, maxId), -1) + 1,
        name: action.name,
        mealType: action.mealType,
        sent: true
      }
    ]

    case actionTypes.EDIT_MEAL_FAILURE:
    case actionTypes.ADD_MEAL_FAILURE:
    return state.map(item => item.id.toString() === action.id.toString() ? Object.assign({}, item, {sent: false}) : item)

    case actionTypes.EDIT_MEAL:
    return state.map(item => item.id.toString() === action.id.toString() ? Object.assign({}, item, {name: action.name, mealType: action.mealType}) : item)

    case actionTypes.EDIT_MEAL_SUCCESS:
    return state.map(item => item.id.toString() === action.id.toString() ? Object.assign({}, item, {sent: true}) : item)

    case actionTypes.ADD_MEAL_SUCCESS:
    case actionTypes.LOAD_MEAL_FAILURE:
    default:
    return state
  }
}

export default meals
