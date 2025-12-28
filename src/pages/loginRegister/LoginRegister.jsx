import React, { useState } from 'react'
import IntegratedForm from '../../components/Forms/loginRegisterForms/IntegratedForm'
import Button from '../../components/UI/button/Button'
import { useModalContext } from '../../context/ModalContext'
import './LoginRegister.css'

const LoginRegister = () => {
  const { isLoginOpen, closeLogin } = useModalContext()
  const [isClosing, setIsClosing] = useState(false)

  if (!isLoginOpen && !isClosing) return null

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      closeLogin()
    }, 1000)
  }

  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlayBlur') {
      handleClose()
    }
  }

  return (
    <div
      id='overlayBlur'
      className={isLoginOpen && !isClosing ? 'active' : ''}
      onClick={handleOverlayClick}
    >
      <section id='login' className={isClosing ? 'closeLogin' : 'login'}>
        <IntegratedForm onSuccess={handleClose} />
        <Button text='X' className='x' fnc={handleClose} />
      </section>
    </div>
  )
}

export default LoginRegister
