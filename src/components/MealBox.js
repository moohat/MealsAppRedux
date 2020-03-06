import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MealList from '../containers/MealList';
import MealForm from '../containers/MealForm';

export default class MealBox extends Component {
  render(){
    return(
      <div className="container">
      <div className="card">
      <div className="card-header text-center">
      <h5 className="card-title">Meal List</h5>
      </div>
      <div className="card-body">
      <h5 className="card-title">you can add new meal here.</h5>
      <MealForm />
      </div>
      <div className="card-footer">
    
      <MealList />

      </div>
      </div>
      </div>
    )
  }
}
