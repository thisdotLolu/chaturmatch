import React, { useState } from 'react'
import './InfoPage.css'
import database from './firebase'
import {useHistory} from 'react-router-dom'

const InfoPage = () => {
    const[name, setName]=useState('')
    const[age, setAge]=useState('')
    const[location, setLocation]=useState('')
    const[image,setImage]=useState('')
    const[description,setDescription]=useState('')
    const history=useHistory()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const doc=({name,age,location,image,description}) 
        try{
          await database.collection('people').add(doc)
          history.push('/')
        }
        catch(err){
          console.log(err)
        }
        
      }
  return (
    <div>
        <h2>Create A User Profile</h2>
        <form 
        onSubmit={handleSubmit}
        className='profile_form'>
            <label>
            name:
            <input 
            type="text" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            </label>
           <label>
               age:           
            <input 
            type="text" 
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            />
            </label> 
            <label>
                location:
            <input 
            type="text" 
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            />
            </label>
            <label>
                image URL: 
            <input 
            type="text" 
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            />
            </label>
            <label>
                (what do you love to do) - I love :
            <textarea
            maxLength={70}
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />
            </label>
            <button onClick={handleSubmit}>Add User</button>
        </form>
    </div>
  )
}

export default InfoPage