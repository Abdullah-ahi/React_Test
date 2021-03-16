import React, { Fragment, useEffect } from 'react';
import './component.css'
import { List, ListItem, ListItemText } from 'material-ui-core';
import Snackbar from '@material-ui/core/Snackbar';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import classNames from 'classnames';

export const Component = (props) => {
  const { data, formState, showForm, inputValue } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const handleAddData = () => {
    const { addData, id, clearValue } = props;
    if (validInputValue(inputValue)){
      addData({id, data: inputValue});
      clearValue();
    }else {
      renderError();
    }
  }
  const handleKeyDown = (event) => {
    const { addData, id, clearValue } = props;
    if (event.keyCode == 13 && !validInputValue(inputValue)){
      renderError();
    }else if(event.keyCode == 13 && validInputValue(inputValue)) {
      addData({id, data: inputValue});
      clearValue();
    }
  }
  const renderError = () => {
    document.querySelector('.error') && document.querySelector('.error').remove();
    let error = `<span class='error'>Длина строки от 2-х до 15 символов</span>`
    let input = document.querySelector('.add-data-input');
    input.insertAdjacentHTML('afterend', error);
    removeError();
  }
  const removeError = () => {
    setTimeout(() => {
      document.querySelector('.error').remove()
    }, 2000)
  }
  const openDataAddForm = () => {
    showForm();
  }
  const formClasses = classNames('form',{
    'visible': formState
  })
  const handleInputChange = (event) => {
    const { writeChanges } = props;
    writeChanges(event.target.value)
  }
  const handleFormHide = () => {
    const { hideForm, clearValue } = props;
    clearValue();
    hideForm();
  }
  const handleDataRemove = (id) => {
    const { remove } = props;
    let agree = confirm('Вы действительно хотите удалить элемент?')
    agree && remove(id);
  }
  const handleSagaRequest = () => {
    const { request } = props;
    request();
    setTimeout(() => {
      handleClick();
    }, 500)
  }
  const validInputValue = (value) => {
    return value.match(/^[0-9a-zA-Zа-яА-Я]{2,15}$/)
  }
  const { id, username, email } = props.GraphQLData
  return (
    <Fragment>
      <List className='data-list'>
        {data.map((el, idx) => 
        <ListItem key={idx}>
          <ListItemText primary={el.data}/>
          <CloseIcon onClick={() => handleDataRemove(idx)}>Удалить</CloseIcon>
        </ListItem>
        )}
      </List>
      <button onClick={openDataAddForm} className='open-form-btn'>Добавить</button>
      <div className={formClasses}>
        <input type="text" className='add-data-input' value={inputValue} onKeyDown={handleKeyDown} onChange={handleInputChange}/>
        <div className="form-control-btns">
          <button className='data-add-btn form-btn' onClick={handleAddData}>OK</button>
          <button className='cancel-data-add-btn form-btn' onClick={handleFormHide}>Отмена</button>
        </div>
      </div>
      <button className = 'request-api-btn' onClick={handleSagaRequest} >Тест GraphQL</button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`id: "${id}", username: "${username}", email: "${email}"`}
        action={
          <div>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </div>
        }
      />
    </Fragment>
  )
}
