import React from 'react'

function FilterSec({TopResturant, setFilteredResturant}) {
   
    return (
        <>
            <div className="filter-div">
                <button onClick={() => {
                    const TopData = TopResturant.filter
                        ((res) => res.data.avgRating >= 4
                        )

                    setFilteredResturant(TopData)

                    // console.log(FilteredResturant)
                }}
                    className="filter-btn">Top Resturants</button>

                {/* all resturant  */}

                <button onClick={() => {
                    setFilteredResturant(TopResturant)

                }}
                    className="filter-btn">All Resturants</button>

            </div>
        </>
    )
}

export default FilterSec 