import { useState } from "react"

export const Form = ({addWish}) =>{
    const [textValue, setTextValue] = useState('')


    const handleChange = (e) =>{
        setTextValue(e.currentTarget.value)
    }

    const handleSubmit = (e)=>{
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