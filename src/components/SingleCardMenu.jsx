import { IMG_URL } from '../utils/contants'

// eslint-disable-next-line react/prop-types
const SingleCardMenu = ({ value, show }) => {
  const { imageId, description, finalPrice, price, isVeg } = value.card.info

  return (
    <>
      {show && (
        <div className='mr-4 mb-4 h-20 shadow-md hover:shadow-xl flex'>
          <img src={IMG_URL + imageId} alt='food image' width='100px' />
          <div className='ml-4'>
            <p className='font-bold'>{name}</p>
            <p>₹ {finalPrice ? finalPrice / 100 : price / 100}</p>
            <p className='text-slate-400'>{description}</p>
            <p className='text-slate-400'>{isVeg ? '🟢' : '🔴'}</p>
          </div>
          <div className='absolute'>
            <button className='bg-gray-800 text-slate-50'>Add +</button>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleCardMenu
