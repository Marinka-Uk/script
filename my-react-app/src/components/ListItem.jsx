export const ListItem = ({wishId, wishText, deleteWish}) =>{
    return <>
        <li key={wishId}>
          <p>{wishText}</p>
          <button onClick={()=>{deleteWish(wishId)}} type="button">delete</button>          
        </li>
    </>
}