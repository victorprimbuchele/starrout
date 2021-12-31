import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router'

import './credit-card.scss'

const CreditCard = () => {
  let navigate = useNavigate()

  return (
    <div className="credit-card-container">
      <h1></h1>
      <Formik
        initialValues={{
          cardnumber: '',
          expirationdate: '',
          printedname: '',
          cvvcode: '',
        }}
        onSubmit={() => navigate('/success')}
      >
        {(props) => (
          <Form>
            <div className="form_control_group">
              <label htmlFor="printedname">Printed Name</label>
              <Field name="printedname" type="text" />
              <ErrorMessage name="printedname" />
              {localStorage.setItem(
                'payment_form_printedname',
                props.values.printedname
              )}
            </div>
            <div className="form_control_group">
              <label htmlFor="cardnumber">Card Number</label>
              <Field name="cardnumber" type="text" />
              <ErrorMessage name="cardnumber" />
              {localStorage.setItem(
                'payment_form_cardnumber',
                props.values.cardnumber
              )}
            </div>
            <div className="form_control_group">
              <label htmlFor="expirationdate">Expiration date</label>
              <Field name="expirationdate" type="text" />
              <ErrorMessage name="expirationdate" />
              {localStorage.setItem(
                'payment_form_expirationdate',
                props.values.expirationdate
              )}
            </div>
            <div className="form_control_group">
              <label htmlFor="cvvcode">CVV Code</label>
              <Field name="cvvcode" type="text" />
              <ErrorMessage name="cvvcode" />
              {localStorage.setItem(
                'payment_form_cvvcode',
                props.values.cvvcode
              )}
            </div>
            <button>Finish</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreditCard
