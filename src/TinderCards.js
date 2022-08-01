import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCard.css'
import database from './firebase';
import {useEffect} from 'react'


const TinderCards = () => {

    const [people,setPeople]=useState([])
    // const[loading,setLoading]=useState(false)
    // const[error,setError]=useState(false)

    useEffect(()=>{
        // setLoading(true)

        const unsub=database.collection('people').onSnapshot(snapshot=>{
            setPeople(snapshot.docs.map(doc=>doc.data()))
            // setLoading(false)
        })

        return ()=>{
            unsub()
        }
        
    },[people])

  return (
    <div>
        <h1 style={{color:'white', textAlign:'center',paddingTop:'20px'}}>Select a match</h1>
        <div className="tinderCards__cardContainer">
            {/* <div>{loading && <h1 style={{color:'white'}}>Loading....</h1>}</div> */}
            {/* <div className='card_overlay'></div> */}
        {
                people.map(person=>{
                return (
                
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up','down']}
                    >
                        <div
                        style={{backgroundImage:`linear-gradient(to top, rgba(0,0,0,0.5),rgba(0,0,0,0.1)), url(${person.image})`}}
                        className='card'
                        >
                        <h3 className='tinder_cardname'>{person.name}</h3>
                        
                        <h3 className='tinder_cardage'>{person.age} years old</h3>
                        
                        <h3 className='tinder_cardlocation'>Lives in {person.location}</h3>
                        <h3 className='tinder_carddesc'>I love  {person.description}</h3>
                        </div>
                    </TinderCard>)
                })
            }
            <p style={{color:'white',position:'relative',marginTop:'65vh',fontSize:'20px'}}>Swipe Left/Right To See Users</p>
        </div>
            
    </div>
  )
}

export default TinderCards