import { useDispatch } from "react-redux"
import { deleteWish } from "./dreamSlice"
import { FC } from "react"

 interface IItemProps {wishId:number, wishText:string}

export const ListItem:FC<IItemProps> = ({wishId, wishText}) =>{

  const dispatch = useDispatch()

    return <>
        <li key={wishId}>
          <p>{wishText}</p>
          <button onClick={()=>{dispatch(deleteWish(wishId))}} type="button">delete</button>          
        </li>
    </>
}