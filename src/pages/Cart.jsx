import SingleCardMenu from '../components/SingleCardMenu'
import { useSelector, useDispatch } from 'react-redux'
import { clearItem } from '../slices/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((store) => store.cart.items)

  return (
    <div className='w-6/12 text-center m-auto'>
      {cart.length === 0 && <h2>No items in cart, Add items to cart!!!</h2>}
      {cart.length > 0 &&
        cart.map((item, index) => (
          <>
            {' '}
            <SingleCardMenu key={index} value={item} show={true} />
          </>
        ))}
      {cart.length > 0 && (
        <div>
          <button
            className='cursor-pointer bg-black text-white px-2 py-4 rounded-sm mt-4'
            onClick={() => dispatch(clearItem())}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
