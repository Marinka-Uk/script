import { FC, useState } from "react"
import { Interface } from "readline"

interface IPropsForm{
    addWish: (wish:string)=>void
}

export const Form:FC<IPropsForm> = ({addWish}) =>{
    const [textValue, setTextValue] = useState<string>('')


    const handleChange = (e) =>{
        setTextValue(e.currentTarget.value)
    }

    const handleSubmit = (e:FormEvent)=>{
         e.preventDefault()

         const form = e.currentTarget


addWish(form.elements.text.value)
         form.reset()
    }

    return <>
    <form onSubmit={handleSubmit} action="">
        <input onChange={handleChange} type="text" name="wishText"/>
        <button>Add my wish</button>
    </form>
    </>
}