import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../../../context/AuthContext'
import './LoginForm.css'
import { useModalContext } from '../../../context/ModalContext'

const LoginForm = ({ onSuccess }) => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const { logIn } = useAuthContext()
  const { closeLogin } = useModalContext()

  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (values) => {
    setError('')
    setSuccess(false)

    const result = await logIn(values.email, values.password)

    if (result.success) {
      setSuccess(true)
      setTimeout(() => {
        onSuccess?.()
        closeLogin()
      }, 1500)
    } else {
      setError(result.error)
    }
  }

  return (
    <div className='formContainer signInContainer'>
      <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign In</h1>

        <input
          {...register('email', {
            required: 'Enter your email, please!'
          })}
          type='email'
          placeholder='Email'
          id='email'
        />
        {formState.errors.email && (
          <p className='formError'>{formState.errors.email.message}</p>
        )}

        <input
          {...register('password', {
            required: 'Enter your password, please!'
          })}
          type='password'
          placeholder='Password'
          id='password'
        />
        {formState.errors.password && (
          <p className='formError'>{formState.errors.password.message}</p>
        )}

        {error && <p className='formError'>{error}</p>}
        {success && <p>Logged!</p>}
        <button id='signInButton' type='submit' disabled={success}>
          {success ? 'Logging in..' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}

export default LoginForm
