import { IMG_URL } from '../utils/contants'

// eslint-disable-next-line react/prop-types
const RestaurantMenu = ({ menu }) => {
  // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types

  console.log(menu, 'menuInsiode')
  // eslint-disable-next-line react/prop-types
  const { title } = menu.card.card
  console.log(menu.card.card)
  const SingleCardMenu = ({ value }) => {
    const { imageId, description, finalPrice, price, isVeg } = value.card.info
    return (
      <div className='mr-4 mb-4 h-40 shadow-md hover:shadow-xl flex'>
        <img src={IMG_URL + imageId} alt='food image' width='200px' />
        <div className='ml-4'>
          <p className='font-bold'>{name}</p>
          <p>₹ {finalPrice ? finalPrice / 100 : price / 100}</p>
          <p className='text-slate-400'>{description}</p>
          <p className='text-slate-400'>{isVeg ? '🟢' : '🔴'}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div>
        <h2 className='font-bold mb-2'>{title}</h2>
      </div>
      {menu.card.card?.itemCards &&
        menu.card.card.itemCards.map((menu, index) => (
          <SingleCardMenu key={index} value={menu} />
        ))}
    </>
  )
}

export default RestaurantMenu
