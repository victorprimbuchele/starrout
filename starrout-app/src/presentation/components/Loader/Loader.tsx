import React from 'react'
import { observer } from 'mobx-react-lite'
import './loader.scss'
import { ClipLoader, MoonLoader } from 'react-spinners'

const Loader = observer(({ isLoading }: any) => {
  console.log(isLoading)

  return <>{!!isLoading ? <ClipLoader color="#fff" size={150} /> : null}</>
})

export default Loader
