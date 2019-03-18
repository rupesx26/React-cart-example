import React from 'react'
import PropTypes from 'prop-types'

//export button types
export const ButtonType = {
    BUTTON: "button",
    RESET: "reset",
    SUBMIT: "submit"
  };

//Main class component
const Button = props => {
    const { type, onClick, disabled, children, className } = props;
    return (
      <button
        className={className}
        tyep={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  Button.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
  };

export default Button
