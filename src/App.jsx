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
      label: 'username',
      type: 'text',
      name: 'username',
      placeholder: 'username',
      errorMessage: 'must be 3-20 characters'
    },
    {
      id: 2,
      label: 'email',
      type: 'email',
      name: 'email',
      placeholder: 'email',
      errorMessage: 'enter a valid email'
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
      label: 'password',
      type: 'password',
      name: 'password',
      placeholder: 'password',
      errorMessage: 'must include atleast 8 characters with 1 letter, 1 number and 1 special character'
    },
    {
      id: 5,
      label: 'confirmPassword',
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'confirm password',
      errorMessage: `passwords don't match`
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
