import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'

import documentValidation from '../../../protocols/documentValidation'
import personalSchema from '../../../protocols/yup/personalSchema'
import CNPJInput from '../../../micro-components/Inputs/CNPJnput'
import CPFInput from '../../../micro-components/Inputs/CPFInput'
import './personal-form.scss'
import GoBack from '../../../micro-components/GoBack/GoBack'
import { StarshipDetails } from '../../../components/StarshipDetails/StarshipDetails'



const PersonalForm = () => {
  const [active, setActive] = useState<String>('cpf')
  const [cnpj, setCnpj] = useState('')
  const [cpf, setCpf] = useState('')
  const [cnpjErrors, setCnpjErrors] = useState('')
  const [cpfErrors, setCpfErrors] = useState('')
  const [validCnpj, setValidCnpj] = useState<boolean>()
  const [validCpf, setValidCpf] = useState<boolean>()
  let navigate = useNavigate()

  if (active !== 'cpf') {
    localStorage.setItem('personal_form_cnpj', cnpj)
  } else {
    localStorage.setItem('personal_form_cpf', cpf)
  }

  function handleRadio(event: React.ChangeEvent<HTMLInputElement>) {
    setActive(event.target.value)
    setCnpj('')
    setCpf('')
    if (!!cpf) {
      setValidCpf(false)
    } else if (!!cnpj) {
      setValidCnpj(false)
    }
  }

  function handleCnpj(event: React.ChangeEvent<HTMLInputElement>) {
    setCnpj(event.target.value)
  }

  function handleCpf(event: React.ChangeEvent<HTMLInputElement>) {
    setCpf(event.target.value)
  }

  function handleDocument() {
    if (active === 'cpf') {
      const thisDocumentIsValid = documentValidation(String(active), cpf)
      return thisDocumentIsValid
    } else {
      const thisDocumentIsValid = documentValidation(String(active), cnpj)

      return thisDocumentIsValid
    }
  }

  function handleClick() {
    navigate('/address')
  }

  useEffect(() => {
    if (handleDocument() === undefined) {
      setCnpjErrors('The CNPJ field cannot be blank.')
      setValidCnpj(false)

      setCpfErrors('The CPF field cannot be blank.')
      setValidCpf(false)
    } else {
      if (!handleDocument().isValid) {
        setCnpjErrors(handleDocument().message)
        setValidCnpj(false)

        setCpfErrors(handleDocument().message)
        setValidCpf(false)
      } else if (handleDocument().isValid) {
        setCnpjErrors('')
        setValidCnpj(true)

        setCpfErrors('')
        setValidCpf(true)
      }
    }
  }, [validCnpj, cnpj, validCpf, cpf])

  return (
    <div className="container">
      <GoBack navigate={navigate}/>
      <div className="content">
    <div className="personal-form-container">
      <h2>Personal Information</h2>
      <Formik
        validationSchema={personalSchema}
        initialValues={{ name: '', email: '', phone: '' }}
        validateOnMount
        // ALTERAR PARA USENAVIGATE QUANDO O FORMULÁRIO FOR ENVIADO
        onSubmit={(values, actions) => {
          console.log(values)
        }}
      >
        {({ values, errors, isValid }) => (
          <Form>
            {/* nome, e-mail, telefone e cpf/cnpj; */}
            <div className="form_control_group">
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" />
              <ErrorMessage name="name" />
              {localStorage.setItem('personal_form_name', values.name)}
            </div>

            <div className="form_control_group">
              <label htmlFor="email">Email</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" />
              {localStorage.setItem('personal_form_email', values.email)}
            </div>

            <div className="form_control_group">
              <label htmlFor="phone">Phone Number</label>
              <Field name="phone" type="text" />
              <ErrorMessage name="phone" />
              {localStorage.setItem('personal_form_phone', values.phone)}
            </div>

            <div className="form_control_radio_group">
              <fieldset>
                <label htmlFor="documentCPF">CPF</label>
                <input
                  type="radio"
                  name="document"
                  id="documentCPF"
                  value="cpf"
                  checked={active === 'cpf'}
                  onChange={handleRadio}
                />
                <label htmlFor="documentCPF">CNPJ</label>

                <input
                  type="radio"
                  name="document"
                  id="documentCNPJ"
                  value="cnpj"
                  checked={active === 'cnpj'}
                  onChange={handleRadio}
                />
              </fieldset>
            </div>
            {active === 'cpf' ? (
              <>
                <CPFInput value={cpf} onChange={handleCpf} />
                {!validCpf ? <span>your cpf number is invalid</span> : null}
              </>
            ) : (
              <>
                <CNPJInput value={cnpj} onChange={handleCnpj} />
                {!validCnpj ? <span>your cnpj number is invalid</span> : null}

              </>
            )}

            <button
              type="button"
              onClick={handleClick}
              disabled={!isValid || !validCnpj}
            >
              Next
            </button>
          </Form>
        )}
      </Formik>
    </div>
    <div className="starship-details">
        <StarshipDetails />
      </div>
      </div>
    </div>
  )
}

export default PersonalForm
