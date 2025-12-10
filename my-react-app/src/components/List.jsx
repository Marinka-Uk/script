
import [Interface] from 'readline'
import { Interface } from "readline"
import { ListItem } from "../ListItem/ListItem"
import {Wish} from '../App'


export Interface IPropList{
    wishes: IWish[],
    deleteWish: (id:number)=>void
}

export const List: FC<> = ({wish, deleteWish}) =>{
    return<>
        <ul>
            {wish.map((wish)=>{
                return <ListItem wishId = {wish.id} wishText={wish.wish} deleteWish={deleteWish}/>
            })}

        </ul>
    </>
}