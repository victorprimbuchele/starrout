import { validateCNPJ, validateCPF } from 'validations-br'
import * as Yup from 'yup'

//  nome, e-mail, telefone e cpf/cnpj;
const personalSchema = Yup.object().shape({
  name: Yup.string().min(4).required(),
  email: Yup.string().email().required(),
  phone: Yup.string().min(10).required(),
})

export default personalSchema
