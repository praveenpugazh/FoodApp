import { useState } from 'react'
import SingleCardMenu from './SingleCardMenu'
// eslint-disable-next-line react/prop-types
const RestaurantMenu = ({ menu }) => {
  // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  // eslint-disable-next-line react/prop-types
  const { title } = menu.card.card
  const [show, setShow] = useState(false)

  console.log(menu)

  return (
    <>
      {menu.card.card?.itemCards && (
        <div className='bg-gray-100 mb-4'>
          <h2
            className='font-bold mb-2 h-16 cursor-pointer'
            onClick={() => setShow(!show)}
          >
            {title}
            <span className='ml-2'>⮟</span>
          </h2>
          {menu.card.card?.itemCards &&
            menu.card.card.itemCards.map((menu, index) => (
              <SingleCardMenu
                key={index}
                value={menu}
                show={show}
                setShow={setShow}
              />
            ))}
        </div>
      )}
    </>
  )
}

export default RestaurantMenu
