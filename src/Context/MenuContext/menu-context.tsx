import { useContext, createContext, useState, useEffect } from "react";
import { fakeFetch } from "../../Api/api";
import getSearchMenu from "../../utils/getSearchMenu";
import getDataSortByPrice from "../../utils/getDataSortByPrice";
import { getDataByCategory } from "../../utils/getDataByCategory";



export const menuContext = createContext<any | undefined>(undefined);


export const MenuProvider = ({ children }: any) => {
    const [menu, setMenu] = useState([])
    const [filteredMenu, setFilteredMenu] = useState<any>([])
    const [checkedCategory, setCheckedCategory] = useState<any>([])
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [sortByPrice, setSortByPrice] = useState('')

    const fetchData = async () => {
        const url = 'https://example.com/api/menu';
        try {
            const { status, data }: any = await fakeFetch(url)
            if (status === 200) {
                setMenu(data.menu)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const searchByUserInput = (e: any) => {
        const searchQuery = e.target.value;
        setSearchQuery(searchQuery)
    }

    const sortByPriceHandler = (e: any) => {
        setSortByPrice(e.target.value)

    }

    const checkedBtnHandler = (e: any) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
            setCheckedCategory((pre: any) => [...pre, value])
        } else {
            setCheckedCategory((pre: any) => pre.filter((item: string) => item !== value))
        }
    }




    const applyFilter = () => {
        let filteredData = [...menu];
        if (searchQuery) {
            filteredData = getSearchMenu(filteredData, searchQuery)
        }
        if (checkedCategory.length > 0) {
            filteredData = getDataByCategory(filteredData, checkedCategory);
        }
        if (sortByPrice) {
            filteredData = getDataSortByPrice(filteredData, sortByPrice).map((item: any) => item)
        }
        setFilteredMenu(filteredData)
    }


    useEffect(() => {
        applyFilter()
    }, [searchQuery, checkedCategory, sortByPrice])

    return <menuContext.Provider value={{ menu, filteredMenu, setFilteredMenu, searchByUserInput, sortByPriceHandler, checkedBtnHandler }} >
        {children}
    </menuContext.Provider>
}


export const useMenu = () => useContext(menuContext)