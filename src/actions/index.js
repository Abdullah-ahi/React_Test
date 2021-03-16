import { createAction } from 'redux-actions';

export const add = createAction('Add data');
export const showForm = createAction('show add data form');
export const hideForm = createAction('hide form');
export const writeInputValue = createAction('save input value');
export const clearInputValue = createAction('clear value');
export const removeData = createAction('remove element');
export const setGraphQL = createAction('SET_GRAPHQL_DATA');
export const requestApiData = createAction('REQUEST_API_DATA')
