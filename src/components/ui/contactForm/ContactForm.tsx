import React from 'react'
import styles from './ContactForm.module.css'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { IForm } from '@/interface/contact'

    

const ContactForm = () => {
    const {register, handleSubmit, getValues} = useForm<IForm>()
    const router = useRouter();
    
    const onSubmit:SubmitHandler<IForm> = async()=> {
            const values = getValues()
            await fetch("http://localhost:3000/api/create", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json", // Especifica el tipo de contenido JSON
              },
            })
            router.push("/")
            console.log(values);            
    }
        
    const onError: SubmitErrorHandler<IForm> = ()=> alert("Please, checkyour info")

  return (
    <div className={styles.container}>
        ContactForm
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <label >Name</label>
            <input type="text" {...register('name')} />
            <label >Imagen</label>
            <input type="text" {...register('image')} />
            
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default ContactForm