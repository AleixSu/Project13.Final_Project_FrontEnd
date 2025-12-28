import { createContext, useContext, useState } from 'react'

const ModalContext = createContext(null)

export const useModalContext = () => {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModalContext has to be used inside ModalProvider')
  }
  return context
}
export const ModalProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const openLogin = () => {
    setIsLoginOpen(true)
  }
  const closeLogin = () => setIsLoginOpen(false)
  const toggleLogin = () => setIsLoginOpen((prev) => !prev)

  return (
    <ModalContext.Provider
      value={{ isLoginOpen, openLogin, closeLogin, toggleLogin }}
    >
      {children}
    </ModalContext.Provider>
  )
}
