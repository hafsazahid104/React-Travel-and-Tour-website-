import { Outlet } from 'react-router-dom'
import Header from './Pages/header'
import Footer from './Pages/Footer'

function Layout(){
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
