import React from 'react'
import { Store } from './Store'

const App: React.FC = () => {
  const store = React.useContext(Store)
  return (
    <React.Fragment>
    {console.log(store)}
      <h1>React and Morty</h1>
      <p>Rick and Morty Episode Picker</p>
    </React.Fragment>
  )
}

export default App
