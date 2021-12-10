import viaCepApi from './ViaCepApi'

class GetACep {
  async now(cep: string) {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const json = await viaCepApi.get(`/${cep}/json/`)
        return resolve(json)
      } catch (error) {
        return reject({
          msg: 'Houve um erro ao coletar o CEP',
          error: error,
        })
      }
    })
  }
}

export default new GetACep()
