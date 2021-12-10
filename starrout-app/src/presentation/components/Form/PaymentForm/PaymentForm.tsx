import React from 'react'
import { Formik, Field, Form } from 'formik'

import Boleto from './payment-components/Boleto/Boleto'
import CreditCard from './payment-components/CreditCard/CreditCard'
import './payment-form.scss'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const PaymentForm = () => {
  const navigate = useNavigate()

  const handleCreditCard = () => {
    navigate('/payment-method=credit-card')
  }

  const handleBoleto = () => {
    navigate('/success')
  }

  return (
    <div className="payment-form-container">
      <div className="credit-card-container">
        <div className="image-border">
          <div className="credit-card-image">
            <FontAwesomeIcon
              icon={faCreditCard}
              onClick={handleCreditCard}
              size="6x"
            />
          </div>
        </div>
        <p>Credit Card</p>
      </div>
      <div className="boleto-container">
        <Boleto onClick={handleBoleto} />
      </div>
    </div>
  )
}

export default PaymentForm
