import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormInput from './components/formInput'
import './App.css'
import formInput from './components/formInput'

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  })

  console.log(values);
  const formattributes = [
    {
      id: 1,
      label: 'username*',
      type: 'text',
      name: 'username',
      placeholder: 'username',
      errorMessage: 'must be 3-20 characters',
      required: 'true',
      pattern: `\\w{3,20}`
    },
    {
      id: 2,
      label: 'email*',
      type: 'email',
      name: 'email',
      placeholder: 'email',
      errorMessage: 'enter a valid email',
      required: 'true',
      pattern: `^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$`
    },
    {
      id: 3,
      label: 'birthday',
      type: 'date',
      name: 'birthday',
      placeholder: 'date of birth',
    },
    {
      id: 4,
      label: 'password*',
      type: 'password',
      name: 'password',
      placeholder: 'password',
      errorMessage: 'must include atleast 8 characters with 1 letter, 1 number and 1 special character',
      required: 'true',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
      id: 5,
      label: 'confirm password*',
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'confirm password',
      errorMessage: `passwords don't match`,
      required: 'true',
      pattern: [values.password]
    },
  ]

  function handleChange(name, val) {
    setValues({...values, [name]: val})
  }

  return (
    <div className="App">
      <form>
        {formattributes.map((input) => {
          return(
            <FormInput key={input.id} {...input} pass={values.password} change={handleChange}/>
          )
        })}
        <button type='submit' onClick={e => {e.preventDefault()}}>submit</button>
      </form>
    </div>
  )
}

export default App
