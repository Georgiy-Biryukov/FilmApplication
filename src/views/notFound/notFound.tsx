
import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import goblin from "../../assets/icons/goblin.jpeg"
import { FETCH_FILMS } from '../../store/actions/actions'
import "./style.css"

const NotFound = () => {
    const dispatch = useDispatch()
    
    const handleClick = () => {
        dispatch({
            type: FETCH_FILMS 
          })
    }

    return (
        <div className="not-found">
            <div className="not-found-image">
                <img src={goblin} alt="img" className="goblin"/>
            </div>
            <div className="no-found-main">
                <h1>OOOPS,PAGE NOT FOUND.</h1>
                <Button 
                    variant="contained" 
                    color="primary" 
                    className="not-found-btn" 
                    size="large" 
                    onClick={handleClick}
                >
                    HOMEPAGE
                </Button>
            </div>
        </div>
    )
}
export default NotFound
