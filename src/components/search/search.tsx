import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { Button, Input } from '@material-ui/core';

import { searchFilm } from '../../store/actions/actions'
import "./style.css"


const Search= () =>{
const[value,setValue]=useState("")

const dispatch = useDispatch()

const handleChange = (event:any) =>{
    setValue(event.target.value)
}

const handleSubmit = () =>{
    dispatch(searchFilm(value))
}

    return (
        <div className="input-box">
          <Input placeholder="Введите название фильма" inputProps={{ 'aria-label': 'description'}} onChange={handleChange} className="input-search" />
            <Button onClick={handleSubmit}>Search</Button>
        </div>
    )
}

export default Search
