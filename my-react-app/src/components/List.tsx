import { ListItem } from "./ListItem"
import{ useSelector } from 'react-redux';
import { RootState } from './store';


export const List =() =>{

const wishes = useSelector ((state:RootState) => state.wishes)

return<>
<ul>
    {wishes.map((wish)=>{
return <ListItem wishId = {wish.id} wishText={wish.wish}/>
})}
</ul>
</>
}