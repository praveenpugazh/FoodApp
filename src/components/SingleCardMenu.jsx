import { IMG_URL } from '../utils/contants'
import { useDispatch } from 'react-redux'
import { addItem } from '../slices/cartSlice'
// eslint-disable-next-line react/prop-types
const SingleCardMenu = ({ value, show }) => {
  const dispatch = useDispatch()
  const { imageId, description, finalPrice, price, isVeg, name } =
    value.card.info
  console.log(value)

  const handleAddItems = (value) => {
    dispatch(addItem(value))
    console.log(value, 'add clicked')
  }

  return (
    <>
      {show && (
        <div className='mr-4 mb-4 hover:shadow-xl flex'>
          <img src={IMG_URL + imageId} alt='food image' width='100px' />
          <div className='ml-4'>
            <p className=''>{name}</p>
            <p>₹ {finalPrice ? finalPrice / 100 : price / 100}</p>
            <p className='text-slate-400'>{description}</p>
            <p className='text-slate-400'>{isVeg ? '🟢' : '🔴'}</p>
          </div>
          <div className='absolute'>
            <button
              className='bg-gray-800 text-slate-50 rounded-md'
              onClick={() => handleAddItems(value)}
            >
              Add +
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleCardMenu
