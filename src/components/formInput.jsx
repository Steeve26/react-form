import React, { useState } from 'react'
import styles from './formInput.module.css'

export default function formInput(props) {
  const {change, id, label, pass, errorMessage, required, ...input} = props
  const [focused, setFocused] = useState('')

  return (
    <>
      <div className={styles.formInput}>
        <label htmlFor={label} title={required && 'Required'}>{label}</label>
        <br/>
        <input id={label} {...input} focused={focused.toString()} onBlur={() => setFocused(false)}
        onChange={(e) => change(e.target.name, e.target.value)} autoComplete="off" />
        <br/>
        <span className={styles.error}>{errorMessage}</span>
      </div>
    </>
  )

}
