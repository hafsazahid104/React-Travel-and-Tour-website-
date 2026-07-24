import { Outlet } from 'react-router-dom'
import Header from './Pages/Header.jsx'
import Footer from './Pages/Footer.jsx'

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
