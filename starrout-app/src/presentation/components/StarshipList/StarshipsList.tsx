import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import counterStore from '../../contexts/stores/CounterStore'
import { swapiAPI } from '../../../infra/services/SWAPI/serviceSWAPI'
import startshipList from './starshipList'
import './starshiplist.scss'

export const StarshipsList: React.FC = observer(({ starshipStore }: any) => {
  const [starships, setStarships] = useState([])
  const [chosenStarship, setChosenStarship] = useState('')

  function handleChoose(event: any, starship: any): any {
    console.log(starship)
    const name: string = starship.name
    const MGLT: string = starship.MGLT
    const cargo_capacity: string = starship.cargo_capacity
    const consumables: string = starship.consumables
    const cost_in_credits: string = starship.cost_in_credits
    const length: string = starship.length
    const manufacturer: string = starship.manufacturer
    const max_atmosphering_speed: string = starship.max_atmosphering_speed
    const passengers: string = starship.passengers
    const starship_class: string = starship.starship_class
    const url: string = starship.url

    localStorage.setItem('starship_name', name)
    localStorage.setItem('starship_MGLT', MGLT)
    localStorage.setItem('starship_cargo_capacity', cargo_capacity)
    localStorage.setItem('starship_consumables', consumables)
    localStorage.setItem('starship_cost_in_credits', cost_in_credits)
    localStorage.setItem('starship_length', length)
    localStorage.setItem('starship_manufacturer', manufacturer)
    localStorage.setItem(
      'starship_max_atmosphering_speed',
      max_atmosphering_speed
    )
    localStorage.setItem('starship_passengers', passengers)
    localStorage.setItem('starship_starship_class', starship_class)
    localStorage.setItem('starship_url', url)
  }

  useEffect(() => {
    const init = async () => {
      return new Promise(async (resolve, reject) => {
        try {
          localStorage.clear()

          const response = await swapiAPI.get(`?page=${counterStore.count}`)
          console.log(response.data.results)

          setStarships(response.data.results)

          return resolve(response.data.results)
        } catch (error) {
          return reject(error)
        }
      })
    }
    init()
  }, [counterStore.count])

  return (
    <div>
      <div className="starship-container">
        {starships.map((starship: any, index: number) => {
          return (
            <div>
              <Link
                to="/form"
                onClick={(event) => {
                  handleChoose(event, {
                    name: starship.name,
                    MGLT: starship.MGLT,
                    capacity: starship.cargo_capacity,
                    consumables: starship.consumables,
                    cost_in_credits: starship.cost_in_credits,
                    length: starship.length,
                    manufacturer: starship.manufacturer,
                    speed: starship.max_atmosphering_speed,
                    passengers: starship.passengers,
                    class: starship.starship_class,
                    url: starship.url,
                  })
                }}
              >
                <div className="starship" data-tip data-for={starship.name}>
                  <p>{starship.name}</p>
                </div>
              </Link>
              <ReactTooltip id={starship.name} place="right" effect="solid">
                <div className="image-container">
                  <div className="image">
                    <img src={startshipList[starship.name]} alt="" />
                  </div>
                </div>
              </ReactTooltip>
            </div>
          )
        })}
      </div>
    </div>
  )
})
