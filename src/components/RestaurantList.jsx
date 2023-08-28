import axios from 'axios'
import RestaurantCard from './RestaurantCard'
import { useEffect, useState } from 'react'
import { API_URL } from '../utils/contants'
import Shimmer from './Shimmer'
const RestaurantList = () => {
  const [resData, setResData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(API_URL)
        console.log(data.data.cards)
        setResData(
          data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        )
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  if (resData === null) {
    return (
      <div className='flex flex-wrap'>
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    )
  }
  console.log(resData)
  return (
    <div className='flex flex-wrap'>
      {resData.map((res) => (
        <RestaurantCard key={res.info.id} resData={res} />
      ))}
    </div>
  )
}

export default RestaurantList
