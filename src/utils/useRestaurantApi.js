import { useEffect, useState } from "react";
import { FOOD_API } from "./constant";

const useRestaurantApi = () => {
  const [ListofResturant, setListofResturant] = useState([]);
  const [FilteredResturant, setFilteredResturant] = useState([]);
  const [TopResturant, setTopResturant] = useState([]);

  useEffect(() => {
    // console.log("Rendered UseEffect" )
    GetApi()
  }, [])

  // function for getting api data 
  async function GetApi() {

    const res = await fetch(FOOD_API)

    const json = await res.json()
    setFilteredResturant(json?.data?.cards[2]?.data?.data?.cards)
    setListofResturant(json?.data?.cards[2]?.data?.data?.cards)
    setTopResturant(json?.data?.cards[2]?.data?.data?.cards)
    // console.log(json)



  }
  return { ListofResturant, FilteredResturant, TopResturant, setFilteredResturant, setListofResturant, setTopResturant }

}

export default useRestaurantApi