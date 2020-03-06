import React, { Component } from 'react';
import {enumOption} from '../constants/enum';
import MealOption from './MealOption';

export default class Meal extends Component{
  constructor(props){
    super(props)
    this.state = {
      editing: false,
      name: this.props.meal.name || '',
      mealType: this.props.meal.mealType || ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }

  handleTypeChange(e){
    this.setState({mealType: e.target.value})
  }

  handleEditClick(){
    this.setState({editing: true})
  }

  handleSave(event){
    if(this.state.name && this.state.mealType){
      this.props.editMeal(this.state.name, this.state.mealType)
      this.setState({name: "", state: ""});
    }
    event.preventDefault();
    this.setState({editing: false})
  }

  render(){
    const {meal} = this.props
    const mealOptions = enumOption.map((item, index) => <MealOption key={index} value={item} />)
    if (this.state.editing) {
      return(
        <tr>
        <th>{meal.id}</th>
        <td>
        <input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={this.handleNameChange} />
        </td>
        <td>
        <select className="form-control" value={this.state.mealType} onChange={this.handleTypeChange}>
        {mealOptions}
        </select>
        </td>
        <td>
        <button type="button" className="btn btn-primary" onClick={this.handleSave}><span className="glyphicon glyphicon-folder"></span> save </button>
        </td>
        </tr>
      )
    } else {
      return(
        <tr>
        <th>{meal.id}</th>
        <td>{meal.name}</td>
        <td>{meal.mealType}</td>
        <td>
        <div className="row row-cols-2">
        <div className="col">
        <button type="button" className="btn btn-success" onClick={this.handleEditClick.bind(this)}><span className="glyphicon glyphicon-pencil"></span> edit </button>
        </div>
        {
          !meal.sent &&
          <div className="alert alert-danger col" role="alert">
          update failed
          </div>
        }
        </div>
        </td>
        </tr>
      )
    }
  }
}
