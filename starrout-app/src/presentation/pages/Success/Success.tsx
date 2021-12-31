import React from 'react'
import { Link } from 'react-router-dom'

import './success.scss'
import { StarshipsDetails } from '../../components/StarshipDetails/StarshipDetails'

const Success = () => {
  const clientName = localStorage.getItem('personal_form_name')
  const clientEmail = localStorage.getItem('personal_form_email')
  const clientPhone = localStorage.getItem('personal_form_phone')

  const logradouro = localStorage.getItem('address_form_logradouro')
  const cep = localStorage.getItem('address_form_cep')
  const numero = localStorage.getItem('address_form_numero')
  const complemento = localStorage.getItem('address_form_complemento')
  const bairro = localStorage.getItem('address_form_bairro')
  const cidade = localStorage.getItem('address_form_cidade')
  const uf = localStorage.getItem('address_form_uf')

  return (
    <div className="success-container">
      <Link to="/">Home</Link>
      <div className="congrats">
        <h1>Congratulations,</h1>
        <h1> {clientName}</h1>
        <br />
        <h3>Now you will receive the Starship of your dreams!!!</h3>
      </div>

      <div className="content">
        <div className="delivery-container">
          <br />
          <h2>Delivery Information</h2>
          <br />
          <p>cep</p>
          <h4>{cep}</h4>
          <br />
          <p>Street</p>
          <h4>{logradouro}</h4>
          <br />
          <p>Number</p>
          <h4>{numero}</h4>
          <p>Complement </p>
          <h4>{complemento}</h4>

          <br />
          <p>District</p>
          <h4>{bairro}</h4>
          <p>City</p>
          <h4>{cidade}</h4>
          <br />
          <p>State</p>
          <h4>{uf}</h4>
          <br />
        </div>
        <div className="space"></div>
        <div className="starships">
          <StarshipsDetails />
        </div>
        <div className="personal"></div>
      </div>
    </div>
  )
}

export default Success
