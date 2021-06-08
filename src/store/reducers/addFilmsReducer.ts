import { IAction } from "../actions/types";
import { IFilms } from "./type";


const initialState:IFilms = {
    loading: false,
    films:[],
    allFilms:[],
    query:"",
    page: 0,
    favorite:[],
}

export function addFilmsReducer(state = initialState, action:IAction) {
  switch (action.type) {
    case "ADD FILMS" :
      const data = action.payload.slice(0,9).map((el:any)=>{
        const isExist = state.favorite.some((elem:any)=>{
          return elem.id === el.id
        })
        return isExist ?  {...el,favorite:true} : el
      })
      return {
        ...state,
        films: data,
        allFilms:action.payload,
      };
      
      case "SEARCH FILMS" :
      return {
        ...state,
        query: action.payload,
      };

      case "SET PAGE" :
        return {
          ...state,
          page: action.payload,
      };

      case "ADD FAVORITE FILMS" :
        return {
          ...state,
          favorite: [...state.favorite ,{...action.payload, favorite:true} ],
      };

      case "DELETE FAVORITE FILMS" :
        const newData = state.favorite.filter((el:any)=>{
          return el.id !== action.payload.id
        })
        console.log("payload:", action.payload)
        console.log(newData);
      return {
        ...state,
        favorite: newData,
      };

      case "ADD FILMS GENRES" :
      return {
        ...state,
        films: action.payload.slice(0,9),
      };

      case "CHANGE FAV FILM" :
      return {
        ...state,
        films: action.payload,
      };

      case  "SET LOADING" :
      return {
        ...state,
        loading: action.payload,
      };
    
      default: return state

  }
}
