import React, { useRef, useState } from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import './IntegratedForm.css'
import Button from '../../UI/button/Button'
import { useModalContext } from '../../../context/ModalContext'

const IntegratedForm = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false)

  return (
    <article
      id='loginRegisterArticle'
      className={`loginRegisterArticle ${
        isRightPanelActive ? 'rightPanelActive' : ''
      }`}
    >
      <RegisterForm />
      <LoginForm />
      <div className='overlayContainer'>
        <div className='overlay'>
          <div className='overlayPanel overlayLeft'>
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>

            <Button
              className={'ghost'}
              text={'Sign In'}
              fnc={() => setIsRightPanelActive(false)}
            />
          </div>
          <div className='overlayPanel overlayRight'>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start the journey with us</p>
            <Button
              className={'ghost'}
              text={'Sign Up'}
              fnc={() => setIsRightPanelActive(true)}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default IntegratedForm
