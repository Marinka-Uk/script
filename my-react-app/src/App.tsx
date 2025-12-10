import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from './components/Form'
import {List} from './components/List'



export interface IWish{

  id: number,
  wish: string,
}



export const App =() =>{

    const [wishes, setWish] = useState<IWish[]>([])




const addWish = (wish: string)=>{  

const newWish={
  id: Date.now(),
  wish
}


  setWish([...wishes, newWish])
}
const deleteWish =(id: number)=>{
  const arr = wishes.filter((wish)=>{
    return wish.id !== id
  })
  setWish(arr)
}


return <>
<Form addWish={addWish}/>
<List delete={deleteWish} wish={wishes}/>
</>
}

export default App;
