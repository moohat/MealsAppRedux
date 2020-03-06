import React, { Component } from 'react';
import {enumOption} from '../constants/enum';
import MealOption from '../components/MealOption';
import { connect } from 'react-redux';
import { addMeal } from '../actions';

class MealForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      mealType: ""
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e){
    this.setState({name: e.target.value})
  }

  handleTypeChange(e){
    this.setState({mealType: e.target.value})
  }

  handleSubmit(event){
    if(this.state.name && this.state.mealType){
      this.props.addMeal(this.state.name, this.state.mealType)
      this.setState({name: "", mealType: ""});
    }
    event.preventDefault();
  }

  render(){
    const mealOptions = enumOption.map((item, index) => <MealOption key={index} value={item} />)
    return(
      <form onSubmit={this.handleSubmit}>

      <div className="form-group row">
      <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
      <input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={this.handleNameChange} />
      </div>
      </div>

      <div className="form-group row">
      <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
      <div className="col-sm-10">
      <select className="form-control" value={this.state.mealType} onChange={this.handleTypeChange}>
      {mealOptions}
      </select>
      </div>
      </div>

      <div className="form-group row">
      <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Kirim</button>
      </div>
      </div>

      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addMeal: (name, mealType) => dispatch(addMeal(name, mealType))
})

export default connect(
  null,
  mapDispatchToProps
)(MealForm)
