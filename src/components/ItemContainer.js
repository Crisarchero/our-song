import React, { useState } from 'react'
import Item from './Item'

const ItemContainer = (prop) => {


  
  //Creating the counters to track the position of the carousel items.
  
  const [counter_one, setCounterOne] = useState(0)
  const [counter_two, setCounterTwo] = useState(1)
  const [counter_three, setCounterThree] = useState(2)
 
  
  return (
    <div id = "item-container" className = "p-3 pt-5 pb-5">
      <h3 className = "h1">{prop.title}</h3>
      <ul className = "p-5 list-group list-group-horizontal mt-5 mb-5">
      <button className = "shadow btn btn-transparent text-primary" onClick = {()=>{
      //The function to go backwards in the carousel
        if(counter_one > 0){
          setCounterOne(counter_one-1)
        } else(setCounterOne(prop.items.length-1))

        if(counter_two > 0){
          setCounterTwo(counter_two - 1)
        } else(setCounterTwo(prop.items.length-1))

        if(counter_three > 0){
          setCounterThree(counter_three - 1)
        } else(setCounterThree(prop.items.length-1))
      }}>&lt;</button>
      
      {//Each section of the carousel.
      }
        <Item item = {prop.items[counter_one]}/>
        <Item item = {prop.items[counter_two]}/>
        <Item item = {prop.items[counter_three]}/>
        
      <button className = " shadow btn btn-transparent text-primary" onClick = {()=>{
      //The function to go forwards in the carousel.
        if(counter_one < (prop.items.length-1)){
          setCounterOne(counter_one+1)
        } else(setCounterOne(0))

        if(counter_two < prop.items.length-1){
          setCounterTwo(counter_two+1)
        } else(setCounterTwo(0))

        if(counter_three < prop.items.length-1){
          setCounterThree(counter_three+1)
        } else(setCounterThree(0))
      }}>&gt;</button> 
      </ul> 
    </div>
  )
}

export default ItemContainer