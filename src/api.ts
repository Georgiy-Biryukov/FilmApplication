const BASE_URL = "http://api.tvmaze.com" 

 const api = {
    searchFilm:(query:string) => {
        return fetch(`${BASE_URL}/search/shows?q=${query}`)
    },
    fetchFilms : (page : number) => {
        return fetch(`${BASE_URL}/shows?page=${page}`)
    }
    
}
export default api