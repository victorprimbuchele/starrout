import React from 'react'
import ReactInputMask from 'react-input-mask'

import './inputs.scss'

const onlyNumbers = (str: string) => {
  const regex = str.replace(/[^0-9]/g, '')
  return regex
}

const CNPJInput = ({ value, onChange }: any) => {
  function handleChange(event: any) {
    onChange({
      ...event,
      target: {
        ...event.targe,
        value: onlyNumbers(event.target.value),
      },
    })
  }

  return (
    <div className="button-container">
      <div className="form_control_group">
        <label htmlFor="CNPJ">CNPJ</label>
        <ReactInputMask
          mask="99.999.999/9999-99"
          value={value}
          onChange={handleChange}
        />
        <span></span>
      </div>
    </div>
  )
}

export default CNPJInput
