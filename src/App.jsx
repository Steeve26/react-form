import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormInput from './components/formInput'
import './App.css'
import formInput from './components/formInput'

function App() {
  const [values, setValues] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  console.log(values);
  const formattributes = [
    {
      id: 1,
      type: 'text',
      name: 'username',
      placeholder: 'username'
    },
    {
      id: 2,
      type: 'password',
      name: 'password',
      placeholder: 'password'
    },
    {
      id: 3,
      type: 'password',
      name: 'confirmPassword',
      placeholder: 'confirm password'
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
        <button onClick={e => {e.preventDefault()}}>submit</button>
      </form>
    </div>
  )
}

export default App
