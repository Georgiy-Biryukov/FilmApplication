export const ADD_FILMS = "ADD FILMS"
export const FETCH_FILMS = "FETCH FILMS"
export const SEARCH_FILMS  = "SEARCH FILMS "
export const SET_PAGE  = "SET PAGE"
export const ADD_FAVORITE_FILMS = "ADD FAVORITE FILMS"
export const DELETE_FAVORITE_FILMS = "DELETE FAVORITE FILMS"
export const CHANGE_CLICKED = "CHANGE CLICKED"
export const ADD_FILMS_GENRES = "ADD FILMS GENRES"
export const CHANGE_FAV_FILM = "CHANGE FAV FILM"
export const SET_LOADING = "SET LOADING"
export const CHANGE_ERROR = "CHANGE ERROR"

export const addFilms = (films: any) => {
    return {
      type: ADD_FILMS,
      payload: films,
    };
  };
  
export const fetchFilms = (page: number) => {
    return {
      type: FETCH_FILMS,
      payload: page
    };
  };

export const searchFilm = (query: string) => {
    return {
      type: SEARCH_FILMS,
      payload: query,
    };
  };

export const setPage = (page: number) => {
    return {
      type: SET_PAGE ,
      payload: page,
    };
  };

export const addFavoriteFilms = (film: any) => {
    return {
      type: ADD_FAVORITE_FILMS ,
      payload: film,
    };
};

export const deleteFavoriteFilms = (favoriteFilm: any) => {
    return {
      type: DELETE_FAVORITE_FILMS ,
      payload: favoriteFilm,
    };
};

export const addFilmsGenres = (favoriteFilm: any) => {
  return {
    type: ADD_FILMS_GENRES,
    payload: favoriteFilm,
  };
};

export const setLoading = (value: boolean) => {
  return {
    type: SET_LOADING,
    payload: value,
  };
};

export const changeError = (value: boolean) => {
  return {
    type: CHANGE_ERROR,
    payload: value,
  };
};








