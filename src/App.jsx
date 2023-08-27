import './App.css'
import Header from './components/Header'
import RestaurantList from './components/RestaurantList'
import { Route, Routes } from 'react-router-dom'
import RestaurantDetails from './pages/RestaurantDetails'
import NotFound from './components/NotFound'
import Shimmer from './components/Shimmer'
import { lazy, Suspense } from 'react'
const Grocery = lazy(() => import('./pages/Grocery'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <>
      <Header />
      <Routes path='/' element={<Header />}>
        <Route index path='/' element={<RestaurantList />} />
        <Route index path='/res/:id' element={<RestaurantDetails />} />
        <Route
          path='/contact'
          element={
            <Suspense>
              <Contact />
            </Suspense>
          }
        />
        ``
        <Route
          path='/about'
          element={
            <Suspense fallback={Shimmer}>
              <About />
            </Suspense>
          }
        />
        <Route
          path='/grocery'
          element={
            <Suspense fallback={Shimmer}>
              <Grocery />
            </Suspense>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

