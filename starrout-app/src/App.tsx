import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './presentation/components/Routes/Router'

const App: React.FC = () => {
  // const starships = await gimmeStarships.now(count)

  return (
    <BrowserRouter>
      <div>
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
