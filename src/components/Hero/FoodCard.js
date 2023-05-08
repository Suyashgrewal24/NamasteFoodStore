import { CDN_URL } from "../../utils/constant";

const FoodCard = (props) => {
    const { resData } = props;
    // console.log(resData)
    const { name, cuisines, costForTwo, deliveryTime, avgRating } = resData.data
// console.log(avgRating)

    return (
        <div className="food-card">
            <img className='food-img' src={CDN_URL + resData.data.cloudinaryImageId} />
            {/* <h2>{resData.data.type.id}</h2> */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rs.{costForTwo / 100} for one</h4>
            <h4>Time {deliveryTime} min</h4>
            <h4>Rating {avgRating}</h4>
            

            {/* {console.log(foodData)} */}


        </div>
    )
}

export default FoodCard