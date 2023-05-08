import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CDN_URL } from '../../utils/constant'
import './Pages.css'
import Shimer from './Shimer'
import MenuItem from './MenuItem'


const ResturantMenu = () => {
    const [ResMenu, SetResMenu] = useState([])
    const [MenuList, SetMenuList] = useState([])
    const { name, cloudinaryImageId, costForTwo, areaName, cuisines, avgRating } = ResMenu
    const params = useParams()
    const { id } = params
    // { console.log(id) }

    useEffect(() => {
        getApiData()
    }, [])

    async function getApiData() {
        const res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=" + id)

        const json = await res.json()
        // api for iterate cards 
        SetResMenu(json?.data?.cards[0]?.card?.card?.info)

        // api for getting menu 
        SetMenuList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(item => item?.card?.info))

        console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(item => item?.card?.info))
    }
    // console.log(MenuList)


    return ResMenu.length === 0 ? (<Shimer />) : (
        <div className="resturant-item-container">
            <div className="res-item-header">
                <div className="res-item-header-left">
                    <h1 className='res-item-name'>{name}</h1>
                    <p className='res-item-rating'>Ratings- {avgRating}</p>
                    <p className='res-item-cuisines'>{cuisines.join(', ')}</p>
                    <p className='res-item-address'>{areaName}</p>
                </div>
                <div className="res-item-header-left">
                    <img className='res-item-img' src={CDN_URL + cloudinaryImageId} alt="" />
                </div>



            </div>
            <hr />
            <h2>Resturant Menu</h2>
            {
                MenuList.map((FoodList) => {

                    return(
                    <MenuItem key={FoodList.id} FoodList={FoodList} />
                    )

                })

            }



        </div>
    )
}

export default ResturantMenu