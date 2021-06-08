import { useSelector } from 'react-redux'

import FilmCard from '../../components/film-card/film-card'
import { RootState } from '../../store/store'

function Favourite() {
    const { favorite } = useSelector(({ addFilmsReducer:{ favorite }}: RootState) => {
        return { favorite }
    })

    return (
        <div >
            {favorite && favorite.map((el: any) => {
               return <FilmCard data={el} key={el.id}/>
            })}
        </div>
    )
}
export default Favourite
