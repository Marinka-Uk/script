import { FC, useState, ChangeEvent,  SyntheticEvent} from "react"

import { useDispatch } from "react-redux"
import {addWish} from './dreamSlice'
export const Form = () =>{
    const [textValue, setTextValue] = useState<string>('')

    const dispatch = useDispatch()

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setTextValue(e.currentTarget.value)
    }
 
    const handleSubmit = (e:SyntheticEvent)=>{
         e.preventDefault()

        dispatch(addWish(textValue))

         setTextValue("")
    }

    return <>
    <form onSubmit={handleSubmit} action="">
        <input onChange={handleChange} type="text" name="wishText"/>
        <button>Add my wish</button>
    </form>
    </>
}