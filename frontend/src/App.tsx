import { Routes, Route } from 'react-router'
// Pages
import Home from './pages/Home/Home'
import Smartphones from './pages/Catalog/Smartphones/Smartphones'
// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
// Context Provider
import { ActiveCatalogFilterContextProvider } from './context/ActiveCatalogFilterContext'
// SCSS
import './App.scss'
import Computers from './pages/Catalog/Computers/Computers'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header />
            <Home />
          <Footer />
        </>
      } />

      <Route path='/catalog/smartphones' element={
        <ActiveCatalogFilterContextProvider>
          <Header />
            <Smartphones />
          <Footer />
        </ActiveCatalogFilterContextProvider>
      } />

      <Route path='/catalog/computers' element={
        <ActiveCatalogFilterContextProvider>
          <Header />
            <Computers />
          <Footer />
        </ActiveCatalogFilterContextProvider>
      } />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes> 
  )
}

export default App
