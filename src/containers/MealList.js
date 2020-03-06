import React, { Component } from 'react';
import Meal from './MealActive';
import { connect } from 'react-redux';
import { loadMeal } from '../actions'

class MealList extends Component {

  componentDidMount(){
    this.props.loadMeal();
  }

  render(){
    const nodes = this.props.meals.map(item =>{
      return (<Meal key={item.id} meal={item} />)
    })
    return(
      <table className="table table-striped">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Type</th>
        <th>actions</th>
      </tr>
      </thead>
      <tbody>
      {nodes}
      </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => ({
  meals: state.meals
})

const mapDispatchToProps = (dispatch) => ({
  loadMeal: () => dispatch(loadMeal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealList)
