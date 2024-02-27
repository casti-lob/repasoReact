
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import { Navbar } from './navbar/Navbar'
import { Layout } from './layout'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <div className="container">
          <Layout/>
        </div>
      </Router>
    </>
  )
}

export default App
