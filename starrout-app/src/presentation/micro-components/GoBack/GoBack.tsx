import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './go-back.scss'

const GoBack = ({ navigate }: any) => {
  return (
    <div className="go-back-container">
      <div className="grid-template-areas">
        <div className="logo"></div>
        <div className="icon">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => navigate(-1)}
            size="4x"
            color="#fff"
          />
        </div>
      </div>
    </div>
  )
}

export default GoBack
