import axios from 'axios'
import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import { API_URL } from '../utils/contants'

const RestaurantList = () => {
  const [resData, setResData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(API_URL)
        console.log(
          data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        )
        setResData(
          data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        )
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  if (resData.length === 0) {
    return <h1>loading...</h1>
  }

  return (
    <div className='flex flex-wrap'>
      {resData.map((res) => (
        <RestaurantCard key={res.info.id} resData={res} />
      ))}
    </div>
  )
}

export default RestaurantList
