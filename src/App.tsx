import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import UpBtn from './components/UpBtn'

function App() {

  return (
    <div className='w-full flex flex-col justify-center'>
      <Header />
      <Outlet />
      <UpBtn />
    </div>
  )
}
export default App
