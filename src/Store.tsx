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
export const Store = React.createContext<State>(initialState)

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    default:
      return state
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}
