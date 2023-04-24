import { useContext, createContext, useState, useEffect } from "react";
import { fakeFetch } from "../../Api/api";
import getSearchMenu from "../../utils/getSearchMenu";



export const menuContext = createContext<any | undefined>(undefined);


export const MenuProvider = ({ children }: any) => {
    const [menu, setMenu] = useState([])
    const [filteredMenu, setFilteredMenu] = useState([])

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
        const searhQuery = e.target.value;
        setFilteredMenu(getSearchMenu(menu, searhQuery))
    }

    return <menuContext.Provider value={{ menu, filteredMenu, setFilteredMenu, searchByUserInput }} >
        {children}
    </menuContext.Provider>
}


export const useMenu = () => useContext(menuContext)