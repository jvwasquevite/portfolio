import React, { createContext, useState } from 'react'

export const MenuContext = createContext()

export const MenuContextProvider = props => {
  const [active, setActive] = useState('Menu')

  return (
    <MenuContext.Provider value={{ active, setActive }}>
      {props.children}
    </MenuContext.Provider>
  )
}
