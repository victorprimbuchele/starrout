import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import StarshipStore from '../../contexts/stores/StarshipStore'
import './starship-details.scss'

export const StarshipsDetails: React.FC = observer(() => {
  const starshipStore = new StarshipStore()
  const [starshipList, setStarshipList] = useState([])

  const name = localStorage.getItem('starship_name')
  const MGLT = localStorage.getItem('starship_MGLT')
  const cargo_capacity = localStorage.getItem('starship_cargo_capacity')
  const consumables = localStorage.getItem('starship_consumables')
  const cost_in_credits = localStorage.getItem('starship_cost_in_credits')
  const length = localStorage.getItem('starship_length')
  const manufacturer = localStorage.getItem('starship_manufacturer')
  const max_atmosphering_speed = localStorage.getItem(
    'starship_max_atmosphering_speed'
  )
  const passengers = localStorage.getItem('starship_passengers')
  const starship_class = localStorage.getItem('starship_starship_class')
  const url = localStorage.getItem('starship_url')

  return (
    <div>
      <div className="starship-container">
        <h2>{name}</h2>
        <br />
        <p>Brand</p>
        <h4>{manufacturer}</h4>
        <br />
        <p>Megalight</p>
        <h4>{MGLT} MGLT per hour.</h4>
        <br />
        {cargo_capacity !== 'undefined' ? (
          <div>
            <p> Cargo Capacity</p> <h4>{cargo_capacity}</h4>
          </div>
        ) : null}
        <p>Consumables </p>
        <h4>{consumables}</h4>

        <br />
        <p>Length</p>
        <h4>{length} meters</h4>
        <p>
          {max_atmosphering_speed !== 'undefined'
            ? max_atmosphering_speed
            : null}
        </p>
        <br />
        <h3>R$ {cost_in_credits}</h3>
      </div>
    </div>
  )
})
