import { validateCNPJ, validateCPF } from 'validations-br'

const documentValidation = (method: string, document: string): any => {
  try {
    if (method === 'cpf') {
      const isValid = validateCPF(document)
      if (!isValid) {
        return { isValid: isValid, message: 'Your CPF is invalid.' }
      }
      return {
        isValid: isValid,
        message: 'It sounds good.',
      }
    } else if (method === 'cnpj') {
      const isValid = validateCNPJ(document)

      if (!isValid) {
        return { isValid: isValid, message: 'Your CNPJ is invalid.' }
      }
      return {
        isValid: isValid,
        message: 'It sounds good.',
      }
    }
  } catch (err: any) {
    return {
      error: err,
      message: 'Internal error.',
    }
  }
}

export default documentValidation
