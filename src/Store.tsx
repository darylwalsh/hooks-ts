import React from 'react'

interface State {
  episodes: []
  favorites: []
}

interface Action {
  type: string
  payload: any
}

const initialState: State = {
  episodes: [],
  favorites: [],
}
export const Store = React.createContext<State | any>(initialState)

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    default:
      return state
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}
