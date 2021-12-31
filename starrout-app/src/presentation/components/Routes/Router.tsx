import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Success from '../../pages/Success/Success'
import AddressForm from '../../pages/Form/AddressForm/AddressForm'
import CreditCard from '../../pages/Form/PaymentForm/payment-components/CreditCard/CreditCard'
import PaymentForm from '../../pages/Form/PaymentForm/PaymentForm'
import PersonalForm from '../../pages/Form/PersonalForm/PersonalForm'
import StarshipList from '../../pages/StarshipList/StarshipList'

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StarshipList />} />
      <Route path="/form" element={<PersonalForm />} />
      <Route path="/address" element={<AddressForm />} />
      <Route path="/payment-method" element={<PaymentForm />} />
      <Route path="/payment-method=credit-card" element={<CreditCard />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}

export default Router
