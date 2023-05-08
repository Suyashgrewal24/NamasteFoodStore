// search function 
export const useSearchData = () => {
    function searchData(searchText, ListofResturant) {

        const filterData = ListofResturant.filter((resturant) => resturant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
        )
        return filterData
    }
    return searchData
}



