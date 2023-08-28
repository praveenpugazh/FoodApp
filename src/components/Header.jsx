import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const cart = useSelector((store) => store.cart.items)
  console.log(cart)
  return (
    <div className='flex justify-between h-16 items-center mb-10 md:flex lg:flex'>
      <div className='logo w-3/12 flex items-center'>
        <img src={logo} alt='company logo' width='100px' />
        <h2 className='cursor-pointer'>Food App</h2>
      </div>
      <div className='navLinks w-9/12'>
        <ul className='flex justify-around'>
          <Link to='/'>
            <li className='cursor-pointer'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='cursor-pointer'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='cursor-pointer'>Contact</li>
          </Link>
          <Link to='/grocery'>
            <li className='cursor-pointer'>Grocery</li>
          </Link>
          <Link to='/cart'>
            <li className='cursor-pointer'>Cart({cart.length} items)</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
