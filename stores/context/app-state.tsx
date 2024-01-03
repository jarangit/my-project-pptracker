import React, { createContext, useState } from 'react'

export const AppContext = createContext("")

const AppState = ({ children }: any) => {
  const [showLoading, setShowLoading] = useState<boolean>(false)

  return (
    <AppContext.Provider
      // @ts-ignore
      value={{
        showLoading, setShowLoading,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState