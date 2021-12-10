import { swapiAPI } from '../../../infra/services/SWAPI/serviceSWAPI'
import counterStore from '../../contexts/stores/CounterStore'

class StarshipStore {
  starshipsList = []

  setStarshipsList(starships: any) {
    this.starshipsList = starships
  }

  getAll = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await swapiAPI.get(`?page=${counterStore.count}`)
        await this.setStarshipsList([...response.data.results])
        return resolve(this.starshipsList)
      } catch (error) {
        return reject(error)
      }
    })
  }
}

export default StarshipStore
