import React from 'react'
import { observer } from 'mobx-react-lite'
import './counter.scss'

const buttonStyle = {
  background: '#455a6b',
}

const divStyleWithTwoButtons = {
  width: '15rem',
}

const divStyleWithOneButton = {
  width: 'auto',
}

const Counter = observer(({ counterStore }: any) => {
  return (
    <div
      className={'counter-container'}
      style={
        counterStore.count > 1 && counterStore.count < 4
          ? divStyleWithTwoButtons
          : divStyleWithOneButton
      }
    >
      {counterStore.count > 1 ? (
        <button style={buttonStyle} onClick={() => counterStore.decCounter()}>
          Back
        </button>
      ) : (
        <div></div>
      )}
      {counterStore.count < 4 ? (
        <button onClick={() => counterStore.incCounter()}>Next</button>
      ) : (
        <div></div>
      )}
    </div>
  )
})

export default Counter
