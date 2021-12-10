import { validateCNPJ, validateCPF } from 'validations-br'
import * as Yup from 'yup'

//  nome, e-mail, telefone e cpf/cnpj;
const personalSchema = Yup.object().shape({
  cep: Yup.string().min(8).required(),
  logradouro: Yup.string().min(4).required(),
  numero: Yup.string().min(2).required(),
  bairro: Yup.string().min(2).required(),
  cidade: Yup.string().min(2).required(),
  uf: Yup.string().min(2).required(),
})

export default personalSchema
