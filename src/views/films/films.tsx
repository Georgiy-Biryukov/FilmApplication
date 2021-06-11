import { CircularProgress } from '@material-ui/core';
import { Pagination } from '@material-ui/lab'
import {useDispatch,useSelector} from 'react-redux'
import React,{useEffect} from 'react'

import { fetchFilms, FETCH_FILMS } from '../../store/actions/actions';
import { RootState } from '../../store/store'
import FilmCard from '../../components/film-card/film-card';
import Search from '../../components/search/search';
import ControlledOpenSelect from '../../components/select/select';
import NotFound from '../notFound/notFound';
import "./style.css"

const Films:React.FC = () => {
  const dispatch = useDispatch()

  const {films,loading} = useSelector(
    ({
    addFilmsReducer:{
      films,
      loading,
     }
    }:RootState)=>({films,loading})
  );
  
  useEffect(() => {
      dispatch({
        type: FETCH_FILMS 
      })
  },[dispatch]);

  const renderCards =()=>{
    return films.map((el:any) => {
      return <FilmCard key={el.id} data={el}/>
    })
  }

  const selectPageHandler = (event: React.ChangeEvent<unknown>, value: number)=>{
    dispatch(fetchFilms(value))
  }

  return (
    <div className="container">
        <Search/>
        <ControlledOpenSelect/>
      <div className="film-cards">
        {loading ? (<CircularProgress disableShrink />
        ) : (
        renderCards())
        }
      </div>
      {!!films.length && !loading && (
        <div className="pagination-box">
          <Pagination count={10} color="primary" onChange={selectPageHandler} className="pag"/>
        </div>
      )} 
      {!films.length && !loading && <NotFound/>}
    </div>
  )
}

export default Films
