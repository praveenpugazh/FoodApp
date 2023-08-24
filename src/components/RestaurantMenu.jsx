import { IMG_URL } from '../utils/contants'

// eslint-disable-next-line react/prop-types
const RestaurantMenu = ({ menu }) => {
  // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  const { name, finalPrice, imageId, price } = menu?.card?.info
  return (
    <>
      <div className='mr-4 mb-4 h-40 shadow-md hover:shadow-xl flex'>
        <img src={IMG_URL + imageId} alt='food image' width='200px' />
        <div className='ml-4'>
          <p>{name.substr(0, 30)}</p>
          <p>Rs.{finalPrice ? finalPrice / 100 : price / 100}</p>
        </div>
      </div>
    </>
  )
}

export default RestaurantMenu
