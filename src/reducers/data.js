import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { add, showForm, writeInputValue, clearInputValue , hideForm, removeData, setGraphQL } from 'actions';

const initialState = new Map({
  data: new Map().toList(),
  visibleForm: false,
  inputValue: '',
  GraphQLData: new Map()
})

export const dataReducer = handleActions({
  [add]: (state, action) => {
    const { id } = action.payload;
    return state.setIn(['data', id], fromJS(action.payload))
  },
  [showForm]: (state, action) => {
    return state.set('visibleForm', true)
  },
  [writeInputValue]: (state, action)=> {
    return state.set('inputValue', action.payload)
  },
  [clearInputValue]: (state, action) => {
    return state.set('inputValue', '')
  },
  [hideForm]: (state, action) => {
    return state.set('visibleForm', false)
  },
  [removeData]: (state, action) => {
    return state.removeIn(['data', action.payload])
  },
  [setGraphQL]: (state, action) => {
    return state.set('GraphQLData', fromJS(action.payload))
  }

}, initialState)

