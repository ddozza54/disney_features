import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {

  return (
    <>
      <Header />
      App
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />

    </>
  )
}

export default App
