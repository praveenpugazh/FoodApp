import './App.css'
import Header from './components/Header'
import RestaurantList from './components/RestaurantList'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import RestaurantDetails from './pages/RestaurantDetails'

function App() {
  return (
    <>
      <Header />
      <Routes path='/' element={<Header />}>
        <Route index path='/' element={<RestaurantList />} />
        <Route index path='/res/:id' element={<RestaurantDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App

