import React from 'react'
import './button.scss'

const Button = ({ name, isDisabled }: any) => {
  return (
    <div className="button-container">
      <button type="submit" disabled={isDisabled}>
        {name}
      </button>
    </div>
  )
}

export default Button
