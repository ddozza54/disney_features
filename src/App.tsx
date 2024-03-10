import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {

  return (
    <div className='w-full flex flex-col'>
      <Header />
      App
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />

    </div>
  )
}

export default App
