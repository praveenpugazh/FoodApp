/* eslint-disable no-unsafe-optional-chaining */
import { IMG_URL } from '../utils/contants'
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const RestaurantCard = ({ resData }) => {
  // eslint-disable-next-line react/prop-types
  const { name, avgRating, locality, cuisines, cloudinaryImageId, id } =
    // eslint-disable-next-line react/prop-types
    resData?.info

  // const IMG_URL =
  //   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

  return (
    <Link to={`res/${id}`}>
      <div className='mr-4 mb-8 h-96 w-60 shadow-md hover:shadow-lg cursor-pointer rounded-md'>
        <div className='w-60 h-40 rounded-md'>
          <img
            className='w-60 h-40 rounded-md'
            src={IMG_URL + cloudinaryImageId}
            alt='food logo'
            width='15rem'
            height='7.5rem'
          />
        </div>
        <div className='cardContent p-4'>
          <h1 className='font-bold'>{name}</h1>
          <p className=''>{avgRating} ⭐</p>
          <p className='text-gray-500'>
            {cuisines.length < 6
              ? cuisines.join(', ')
              : cuisines.join(', ').substr(0, 60)}{' '}
          </p>
          <p className='text-gray-500'>Location: {locality}</p>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantCard
