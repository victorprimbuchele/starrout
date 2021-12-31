import React, { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import useStarshipHook from '../../../hooks/useStarshipHook'
import IStarshipProps from '../../../protocols/types/Starship'
import startshipList from './import/starshipList'
import './starshiplist.scss'

localStorage.clear()

const StarshipList: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { error, loading, starships, hasMore } = useStarshipHook(pageNumber)
  const observer: React.MutableRefObject<any> = useRef()
  const lastStarshipElementRef = useCallback(
    (node: any) => {
      if (loading) {
        return
      }
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) {
        observer.current.observe(node)
      }
    },
    [loading, hasMore]
  )

  function handleChoose(event: any, starship: any): any {
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

  return (
    <div className="container">
      <h1>Choose the Starship of your Dreams</h1>
      <div className="starship-container">
        {starships.map((starship: IStarshipProps, index) => {
          if (starships.length === index + 1) {
            return (
              <>
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
                  <div
                    className="starship"
                    data-tip
                    data-for={starship.name}
                    ref={lastStarshipElementRef}
                  >
                    <div className="image-container">
                      <div className="image">
                        <img src={startshipList[starship.name]} alt="" />
                      </div>
                    </div>
                    <p>{starship.name}</p>
                  </div>
                </Link>
                <ReactTooltip id={starship.name} place="right" effect="solid">
                  <div className="tooltip-container">
                    <h2>{starship.name}</h2>
                    <div className="key-container">
                      <table>
                        {Object.keys(starship).map((item: string) => (
                          <tr>{item}</tr>
                        ))}
                      </table>
                    </div>
                    <div
                      className="value-container"
                      data-tip
                      data-for={starship.name}
                    >
                      <table>
                        {Object.values(starship).map(
                          (item: any, index: number) => (
                            <tr>{item}</tr>
                          )
                        )}
                      </table>
                    </div>
                  </div>
                </ReactTooltip>
              </>
            )
          }
          return (
            <>
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
                    <div className="image-container">
                      <div className="image">
                        <img src={startshipList[starship.name]} alt="" />
                      </div>
                    </div>
                    <p>{starship.name}</p>
                  </div>
                </Link>
              </div>

              <ReactTooltip id={starship.name} place="right" effect="solid">
                <div className="tooltip-container">
                  <h2>{starship.name}</h2>
                  <div className="key-container">
                    <table>
                      {Object.keys(starship).map((item: string) => (
                        <tr>{item}</tr>
                      ))}
                    </table>
                  </div>
                  <div className="value-container">
                    <table>
                      {Object.values(starship).map(
                        (item: any, index: number) => (
                          <tr>{item}</tr>
                        )
                      )}
                    </table>
                  </div>
                </div>
              </ReactTooltip>
            </>
          )
        })}

        <div>{loading && pageNumber < 5 && 'Loading...'}</div>
        <div>{error && pageNumber < 5 && 'Error...'}</div>
      </div>
    </div>
  )
}

export default StarshipList
