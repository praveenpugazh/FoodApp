import axios from 'axios'
import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import { API_URL } from '../utils/contants'
import Shimmer from './Shimmer'
const RestaurantList = () => {
  const [resData, setResData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(API_URL)
        console.log(data.data.cards)
        setResData(
          data.data.cards[3].card.card.gridElements.infoWithStyle.restaurants
        )
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  if (resData.length === 0) {
    return (
      <div className='flex flex-wrap'>
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    )
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
