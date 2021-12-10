import React from 'react'
import { observer } from 'mobx-react-lite'

import counterStore from '../../contexts/stores/CounterStore'
import Counter from '../../components/Counter/Counter'
import { StarshipsList } from '../../components/StarshipList/StarshipsList'

import './home.scss'

const Home = observer(() => {
  return (
    <div className="home-container">
      <div>
        <h1>Choose the Starship of your Dreams</h1>
      </div>
      <div className="starships">
        <StarshipsList />
      </div>
      <div className="buttons">
        <Counter counterStore={counterStore} />
      </div>
    </div>
  )
})

export default Home
