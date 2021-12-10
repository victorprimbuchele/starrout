import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router'

import personalSchema from '../../../protocols/yup/addressSchema'
import getACep from '../../../../infra/services/ViaCep/GetACep'
import { ViaCepApiResponse } from '../../../../protocols/types/ViaCepApiResponse'
import './address-form.scss'

const AddressForm = () => {
  let navigate = useNavigate()

  const onBlurCep = async (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: any
  ) => {
    const { value } = event.target
    const cep = value.replace(/[^0-9.]/g, '')
    if (cep?.length !== 8) {
      return
    }
    const payload: ViaCepApiResponse = await getACep.now(cep)
    setFieldValue('logradouro', payload.data?.logradouro)
    setFieldValue('bairro', payload.data?.bairro)
    setFieldValue('cidade', payload.data?.localidade)
    setFieldValue('uf', payload.data?.uf)
  }

  function handleClick() {
    navigate('/payment-method')
  }

  return (
    <div className="address-container">
      <h1>Address Information</h1>
      <Formik
        validationSchema={personalSchema}
        initialValues={{
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          cidade: '',
          uf: '',
        }}
        validateOnMount
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props) => (
          <Form>
            <div className="form_control_group">
              <label htmlFor="name">CEP</label>
              <Field
                name="cep"
                type="text"
                onBlur={(event: any) => onBlurCep(event, props.setFieldValue)}
              />
              <ErrorMessage name="cep" />
              {localStorage.setItem('address_form_cep', props.values.cep)}
            </div>
            <div className="form_control_group">
              <label htmlFor="logradouro">Logradouro</label>
              <Field name="logradouro" type="text" />
              <ErrorMessage name="logradouro" />
              {localStorage.setItem(
                'address_form_logradouro',
                props.values.logradouro
              )}
            </div>
            <div className="form_control_group">
              <label htmlFor="numero">Nº</label>
              <Field name="numero" type="text" />
              <ErrorMessage name="numero" />
              {localStorage.setItem('address_form_numero', props.values.numero)}
            </div>
            <div className="form_control_group">
              <label htmlFor="complemento">Complemento</label>
              <Field name="complemento " type="text" />
              <ErrorMessage name="complemento" />
              {localStorage.setItem(
                'address_form_complemento',
                props.values.complemento
              )}
            </div>
            <div className="form_control_group">
              <label htmlFor="bairro">Bairro</label>
              <Field name="bairro" type="text" />
              <ErrorMessage name="bairro" />
              {localStorage.setItem('address_form_bairro', props.values.bairro)}
            </div>
            <div className="form_control_group">
              <label htmlFor="cidade">Cidade</label>
              <Field name="cidade" type="text" />
              <ErrorMessage name="cidade" />
              {localStorage.setItem('address_form_cidade', props.values.cidade)}
            </div>
            <div className="form_control_group">
              <label htmlFor="uf">Estado</label>
              <Field component="select" name="uf">
                <option value="">Selecione o Estado</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
              </Field>
              <ErrorMessage name="uf" />
              {localStorage.setItem('address_form_uf', props.values.uf)}
            </div>

            <button
              type="button"
              disabled={!props.isValid}
              onClick={handleClick}
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddressForm
