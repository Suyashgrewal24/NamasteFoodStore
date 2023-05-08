import { useEffect, useState } from "react";
import "./Body.css";
import FoodCard from "./FoodCard";
import FilterSec from "./FilterSec";

// import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { Link } from "react-router-dom";
import Shimer  from '../pages/Shimer';
import { useSearchData } from "../../utils/helper";

// Search Function
const Body = () => {
  const SearchData = useSearchData()
  const [ListofResturant, setListofResturant] = useState([]);
  const [FilteredResturant, setFilteredResturant] = useState([]);
  const [TopResturant, setTopResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(FilteredResturant)

  useEffect(() => {
    // console.log("Rendered UseEffect" )
    GetApi()
  }, [])

  // function for getting api data 
  async function GetApi() {

    const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING")

    const json = await res.json()
    setFilteredResturant(json?.data?.cards[2]?.data?.data?.cards)
    setListofResturant(json?.data?.cards[2]?.data?.data?.cards)
    setTopResturant(json?.data?.cards[2]?.data?.data?.cards)
    // console.log(json)

  }

  return ListofResturant.length === 0 ? (
   <Shimer/>
  ) : (
    <>
      {/* search bar  */}
      {/* Search Section */}
      <div className="filterSearchSec">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }} />
          <button onClick={() => {
            const data = SearchData(searchText, ListofResturant)
            setFilteredResturant(data)
          }
            // cons
          }>
            Search</button>
        </div>


        {/* {Filter button} */}
        <FilterSec
          TopResturant={TopResturant}
          setTopResturant={setTopResturant}
          setFilteredResturant={setFilteredResturant}
          FilteredResturant={FilteredResturant}

        />
      </div>



      {/* Food Cards  */}
      <div className="foodCardSection">
       
          {FilteredResturant.map((resData) => {
            return <Link
             to={"/ResturantMenu/" + resData.data.id}  key={resData.data.id}>
             <FoodCard resData={resData} />;
        </Link>
          })}
      </div>
    </>
  );
};

export default Body;
 