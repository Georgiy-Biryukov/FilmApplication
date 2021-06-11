import React ,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector,useDispatch } from 'react-redux';

import { RootState } from '../../store/store';
import { addFilmsGenres } from '../../store/actions/actions';
import "./style.css"



const useStyles = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [genre, setGenre] = React.useState('');
  const [openGenre, setOpenGenre] = React.useState(false);
  const [lang, setLang] = React.useState('');
  const [openLang, setOpenLang] = React.useState(false);

  const dispatch = useDispatch()

  const {allFilms,loading} = useSelector(({addFilmsReducer:{allFilms,loading}}:RootState)=>({
    allFilms,
    loading
  }))
 
  const filterOfFilmsGenre = (genre:string) => {
     const filtrfilmGenres = lang.length === 0 ?
     allFilms.filter((el:any)=>el.genres.some((elem:any)=>elem===genre))
     : allFilms.filter((el:any)=>el.language === lang && el.genres.some((elem:any)=>elem===genre))
     return dispatch(addFilmsGenres(filtrfilmGenres))
  }

  const filterOfFilmsLang = (lang:string) => {  
    const filtrfilmLang = genre.length === 0 ? 
    allFilms.filter((el:any)=>el.language === lang)
    : allFilms.filter((el:any)=>el.language === lang && el.genres.some((elem:any)=>elem===genre))
    return dispatch(addFilmsGenres(filtrfilmLang))
  }
    
  useEffect(() => {
    filterOfFilmsGenre(genre)
  },[genre])

  useEffect(() => {
    filterOfFilmsLang(lang)
  },[lang])

  useEffect(() => {
    setGenre("")
    setLang("")
  },[loading])

 
  const handleChangeGenre = (event: any):void => {
    setGenre(event.target.value);
  };
  const handleChangeLang = (event: any):void => {
    setLang(event.target.value);
  };

  const handleCloseGenre = ():void => {
    setOpenGenre(false);
  };

  const handleOpenGenre = ():void => {
    setOpenGenre(true);
  };

  const handleCloseLang = ():void => {
    setOpenLang(false);
  };

  const handleOpenLang = ():void => {
    setOpenLang(true);
  };

  return (
  <div className="select-box">
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Genres</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-selesct"
          open={openGenre}
          onClose={handleCloseGenre}
          onOpen={handleOpenGenre}
          value={genre}
          onChange={handleChangeGenre}
        >
          <MenuItem value={"Drama"}>Drama</MenuItem>
          <MenuItem value={"Crime"}>Crime</MenuItem>
          <MenuItem value={"Romance"}>Romance</MenuItem>
          <MenuItem value={"Anime"}>Anime</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Language</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-selesct"
          open={openLang}
          onClose={handleCloseLang}
          onOpen={handleOpenLang}
          value={lang}
          onChange={handleChangeLang}
        >
          <MenuItem value={"English"}>English</MenuItem>
          <MenuItem value={"Japanese"}>Japanese</MenuItem>
        </Select>
      </FormControl>
  </div>
  );
}
