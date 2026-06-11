import Profile from './components/Profile'
import './App.css'
import { HardSkills } from './components/HardSkills'
import { Fragment } from 'react/jsx-runtime'

function App() {
  return (
    <Fragment>
      <HardSkills />
      <h1> Hello World</h1>
        <Profile />
    </Fragment>  
  )
}  

export default App
