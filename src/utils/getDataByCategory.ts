export const getDataByCategory = (data:any,category:any)=>{
    return data.filter((item:any)=>category.find((category:string)=>item[category]))
}