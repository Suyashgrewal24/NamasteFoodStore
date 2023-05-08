import { useSearchData } from "../../utils/helper"
import useRestaurantApi from "../../utils/useRestaurantApi"
import {useState} from 'react'


const Search = () => {
  const [searchText, setSearchText] = useState("");
  const SearchData = useSearchData() 
  const {ListofResturant, setFilteredResturant} = useRestaurantApi()
    return (
      <>
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
            // console.log
          }>
            Search</button>
        </div>
      </>
    )
  }
  
  export default Search