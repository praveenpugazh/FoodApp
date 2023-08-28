import { RES_URL } from '../utils/contants'
import RestaurantMenu from '../components/RestaurantMenu'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
const RestaurantDetails = () => {
  const { id } = useParams()
  const [resMenu, setResMenu] = useState(null)

  useEffect(() => {
    const getResMenu = async () => {
      const { data } = await axios.get(RES_URL + id)
      console.log(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
      setResMenu(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    }

    getResMenu()
  }, [id])

  if (resMenu === null) {
    return <h1>loading....</h1>
  }
  return (
    <div className='w-6/12 m-auto'>
      <h1 className='font-bold text-xl mb-5'>Restaurant Menu</h1>
      {resMenu.map((menu, index) =>
        menu?.card?.card?.title && menu?.card?.card?.title != 'Top Picks' ? (
          <RestaurantMenu key={index} menu={menu} />
        ) : (
          ''
        )
      )}
    </div>
  )
}

export default RestaurantDetails
