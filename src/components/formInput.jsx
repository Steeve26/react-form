import React, { useState } from 'react'
import styles from './formInput.module.css'

export default function formInput(props) {
  const {change, name, type, placeholder, pass} = props
  const [error, setError] = useState('')

  function handleshit(e, name) {
    let val = e.target.value
    change(name, val)
    if (!val) 
      setError(`Field can't be blank`)
      else{
      setError('')
      if (name === 'username'){
        if (val.length <= 2)
          setError('Username needs to be atleast 3 characters')}
      if (name === 'password'){
        if (val.length <= 7)
          setError('Password needs to be atleast 8 characters')}
      if (name === 'confirmPassword')
        if (val !== pass)
          setError(`Passwords don't match`)
        }
  }

  return (
    <div className={styles.formInput}>
      <label htmlFor={name}>{name}</label>
      <br/>
      <input id={name} name={name} type={type} placeholder={placeholder} 
      onChange={e => handleshit(e, name)} />
      <br />
      <span className={styles.error}>{error}</span>
    </div>
  )
}
