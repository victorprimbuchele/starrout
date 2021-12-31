import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarcode } from '@fortawesome/free-solid-svg-icons'

import './boleto.scss'

const Boleto = ({ onClick }: any) => {
  return (
    <div className="boleto-container">
      <div className="image-border">
        <div className="boleto-image">
          <FontAwesomeIcon icon={faBarcode} onClick={onClick} size="8x" />
        </div>
      </div>
      <p>Boleto</p>
    </div>
  )
}

export default Boleto
