import React from 'react'

import Button from './Button'
const Controls = props => {


    const { id, count, onClickAdd, onClickMinus } = props;
    const handleAddClick = () => {
      onClickAdd(id, count + 1);
    };
  
    const handleMinusClick = () => {
      onClickMinus(id, count - 1);
    };
    
    return (
      <div className="controls">
        <Button className='btn minus' onClick={handleMinusClick} type='button'> - </Button>
        <span className='number' id={id}>{count}</span>
        <Button className='btn add' onClick={handleAddClick} type='button'> + </Button>
      </div>
    );
  };
  
export default Controls;