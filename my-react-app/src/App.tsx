import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from './components/Form'
import {List} from './components/List'

export const App =() =>{

    const [wish, setWish] = useState([])

const addWish = (wish)=>{

const newWish={
  id: Date.now(),
  wish
}


  setWish(...wishes, newWish)
}
const deleteWisg =(id)=>{
  const arr = wishes.filter((wish)=>{
    return wish.id !== id
  })
  setWishes(arr)
}


return <>
<Form addWish={addWish}/>
<List />
</>
}

export default App;
