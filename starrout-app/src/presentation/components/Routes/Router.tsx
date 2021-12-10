import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Success from '../../pages/Success/Success'
import AddressForm from '../Form/AddressForm/AddressForm'
import CreditCard from '../Form/PaymentForm/payment-components/CreditCard/CreditCard'
import PaymentForm from '../Form/PaymentForm/PaymentForm'
import PersonalForm from '../Form/PersonalForm/PersonalForm'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<PersonalForm />} />
      <Route path="/address" element={<AddressForm />} />
      <Route path="/payment-method" element={<PaymentForm />} />
      <Route path="/payment-method=credit-card" element={<CreditCard />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}

export default Router
