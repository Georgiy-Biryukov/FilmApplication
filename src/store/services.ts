import api from "../api"

const getFilms = async (page:number = 1)=>{
    try{
        const responce = await api.fetchFilms(page)
        const data = await responce.json()
        return data.map((el:any)=>{
            return {...el,favorite:false}
        });
        
    }catch(error){
        return error
    }
}
const searchFilm = async (query:string)=>{
    try{
        const responce = await api.searchFilm(query)
        const data = await responce.json()    
        return data.map((el:any) => {
            return {...el.show}
        })
    }catch(error){
        return error
    }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {getFilms,searchFilm}
