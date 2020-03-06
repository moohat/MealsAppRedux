import { connect } from 'react-redux'
import { editMeal } from '../actions'
import Meal from '../components/Meal'

const mapDispatchToProps = (dispatch, ownProps) => ({
  editMeal: (name, mealType) => dispatch(editMeal(ownProps.meal.id, name, mealType))
})

export default connect(
  null,
  mapDispatchToProps
)(Meal)
