import './App.css'
import Demo from './components/demo.jsx'

function App() {
  let arr = [1, 2, 3, 4, 5]
  return (
    <>
    <Demo phone='Android' />
    < Demo phone='IOS' strong='Efficient'/>
    <Demo strong={arr}/>
    </>
  )
}

export default App
