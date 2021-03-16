import React, { useEffect } from 'react'
import { Component } from 'component';
import { connect } from 'react-redux';
import { add, showForm, writeInputValue, clearInputValue, hideForm, removeData, setGraphQL, requestApiData } from'actions';
const CompContainer = (props) => {
  
  const { data, addData, id, showForm, formState, inputValue, writeChanges, clearValue, hideForm, remove, setGraphQL,GraphQLData, request } = props;
  return (
    <Component data={data} addData={addData} id={id} showForm={showForm}
               formState={formState} inputValue={inputValue} 
               writeChanges={writeChanges} clearValue={clearValue} hideForm={hideForm}
               remove={remove} setGraphQL={setGraphQL} GraphQLData={GraphQLData}
               request={request}
    />
  )
}
function mapStateToProps(state, ownProps){
  const data = state.get('data').toJS();
  const formState = state.get('visibleForm');
  const inputValue = state.get('inputValue');
  const GraphQLData = state.get('GraphQLData').toJS();
  const id = data.length
  return {
    data,
    id,
    formState,
    inputValue,
    GraphQLData,
  }
}
function mapDispatchToProps(dispatch){
  return {
    addData: (data) => dispatch(add(data)),
    showForm: () => dispatch(showForm()),
    writeChanges: (data) => dispatch(writeInputValue(data)),
    clearValue: () => dispatch(clearInputValue()),
    hideForm: () => dispatch(hideForm()),
    remove: (id) => dispatch(removeData(id)),
    setGraphQL: (data) => dispatch(setGraphQL(data)),
    request: () => dispatch(requestApiData())
  }
}

export const CompRedux = connect(mapStateToProps, mapDispatchToProps)(CompContainer)