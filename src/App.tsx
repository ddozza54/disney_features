import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      App
      <Outlet />
    </>
  )
}

export default App
