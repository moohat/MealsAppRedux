import axios from 'axios'
import * as actionTypes from '../constants/actionTypes'

const API_URL = 'http://api.wibs.sch.id/v2/meal/post'

const request = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {'Application-Token': 'geSzgVahOlowulcgHEtQmu9Ybofk1lRnPFd3V5atSEu1SD1dt2'}
});

// start load meal data
const loadMealSuccess = (meals) => ({
  type: actionTypes.LOAD_MEAL_SUCCESS,
  meals
})

const loadMealFailure = () => ({
  type: actionTypes.LOAD_MEAL_FAILURE
})

export const loadMeal = () => {
  return dispatch => {
    return request.post('datatable.food-category')
    .then(function (response) {
      console.log(response.data.data);
      
      dispatch(loadMealSuccess(response.data.data));
    })
    .catch(function (error) {
      console.error(error);
      dispatch(loadMealFailure())
    });
  }
}

// end load meal data

// start post meal data

const addMealSuccess = (meals) => ({
  type: actionTypes.ADD_MEAL_SUCCESS,
  meals
})

const addMealFailure = () => ({
  type: actionTypes.ADD_MEAL_FAILURE
})

const addMealRedux = (name, mealType) => ({
  type: actionTypes.ADD_MEAL, name, mealType
})


export const addMeal = (name, mealType) => {
  return dispatch => {
    dispatch(addMealRedux(name, mealType))
    return request.post(`food-category.store?name=${name}&type=${mealType}`)
    .then(function (response) {
      dispatch(addMealSuccess(response.data))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(addMealFailure())
    });
  }
}

// edit Meal

const editMealSuccess = (id) => ({
  type: actionTypes.EDIT_MEAL_SUCCESS,
  id
})

const editMealFailure = (id) => ({
  type: actionTypes.EDIT_MEAL_FAILURE, id
})

const editMealRedux = (id, name, mealType) => ({
  type: actionTypes.EDIT_MEAL, id, name, mealType
})


export const editMeal = (id, name, mealType) => {
  return dispatch => {
    dispatch(editMealRedux(id, name, mealType))
    return request.post(`food-category.update?id=${id}&name=${name}&type=${mealType}`)
    .then(function (response) {
      dispatch(editMealSuccess(id))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(editMealFailure(id))
    });
  }
}
// end edit meal
