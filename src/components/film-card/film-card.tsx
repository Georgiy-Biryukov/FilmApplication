import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'

import heart from "../../assets/icons/heart-svg.svg"
import heartRose from "../../assets/icons/heart-rose.svg"
import { addFavoriteFilms,  deleteFavoriteFilms } from '../../store/actions/actions'
import TransitionsModal from '../modal-card/modal-card'
import "./style.css"


const FilmCard = ({data}:any)=> {
    const [open, setOpen] = React.useState(false);
    const [favoriteFilm, setFavoriteFilm] = useState<boolean>(false)
    console.log(favoriteFilm)


    useEffect(() => {
        setFavoriteFilm(data.favorite)
    }, [])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch()

    const handleClick = ()=>{
        setFavoriteFilm(!favoriteFilm)
       

    if(favoriteFilm) {
        dispatch(deleteFavoriteFilms(data))
    }else{
        dispatch(addFavoriteFilms(data))
    }
}
    return (
        <div className="filmCard" >
            <div className="film-image ">
                <div className="card-image"  onClick={handleOpen}>
                    <img alt="img" src={data.image && data.image.medium ? data.image.medium : "" } />
                </div>
                <div className="img_info">
                    <div className="img-text">
                        <p>{data.name}</p>
                    </div>
                    <div className="img-fav">
                        <img alt="favorite" src={ favoriteFilm === true  ?  heartRose : heart } className="fav-icon" onClick={handleClick} />
                    </div>
                </div>
            </div>
            <TransitionsModal data={data} open={open} handleClose={handleClose}/>
        </div>
    )
}

export default FilmCard
