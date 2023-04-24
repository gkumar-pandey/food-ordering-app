const getSearchMenu = (data:any,searchQuery:any)=>{
    return data.filter((menu:any)=>menu.name.toLowerCase().includes(searchQuery.toLowerCase()))
}

export default getSearchMenu;