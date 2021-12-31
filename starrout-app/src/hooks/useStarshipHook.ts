import React, { useEffect, useState } from 'react'
import axios from 'axios'

import IStarshipProps from '../protocols/types/Starship'

export default function useStarshipHook(pageNumber: number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [starships, setStarships] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel: Function
    axios({
      method: 'GET',
      url: 'https://swapi.dev/api/starships/',
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken((c): Function => (cancel = c)),
    })
      .then((res) => {
        setStarships((prevstarships: any): any => {
          return [
            ...new Set([
              ...prevstarships,
              //   alterar
              ...res.data.results.map((starship: IStarshipProps) => {
                return starship
              }),
            ]),
          ]
        })
        setHasMore(res.data.detail !== 'Not found')
        if (!hasMore) {
          setLoading(false)
        }
        setLoading(false)
      })
      .catch((e: React.ChangeEvent<HTMLInputElement>) => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    return () => cancel()
  }, [pageNumber])
  return { loading, error, starships, hasMore }
}
