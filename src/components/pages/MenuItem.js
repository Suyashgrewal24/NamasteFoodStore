import { CDN_URL } from '../../utils/constant'
import './Pages.css'
const MenuItem = (({ FoodList }) => {
    const { name, price, imageId
    } = FoodList
    // console.log(name)
    return (
        <div className="res-menuItems-container">

            <div className="res-menu-box">
                <div className="res-menu-box-left">
                    <h4>{name}</h4>
                    <p>₹ {price / 100}</p>
                    <button>add</button>
                </div>
                <div className="res-menu-box-right">
                    <img className='menuItem-img'  src={CDN_URL + imageId} alt="" />
                </div>



            </div>

        </div>
    )
})

export default MenuItem