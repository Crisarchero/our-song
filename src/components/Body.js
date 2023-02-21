import ItemContainer from './ItemContainer'
import Categories from './Categories'
import React from 'react'
import guitar from '../imgs/guitar-upright.jpg'
import violin from '../imgs/violin.jpg'
import headphones from '../imgs/headphones.jpg'
import salesHeadphones from '../imgs/headphones-sale.jpg'
import accordion from '../imgs/accordion.jpg'
import trumpet from '../imgs/trumpet.jpg'
import keyboard from '../imgs/keyboard.jpg'

const Body = () => {
  const popularItems = [
    {title:"A Guitar", img:guitar},{title:"A Violin", img:violin},{title:"Headphones",img:headphones}]
  const salesItems = [
    {title:"Headphones",img:salesHeadphones},
    {title:"A trumpet",img:trumpet},
    {title:"An accordion",img:accordion},
    {title:"A keyboard",img:keyboard}]

  return (
    <div>
        <ItemContainer title = "Sales" items = {salesItems}></ItemContainer>
        <Categories></Categories>
        <ItemContainer title = "Popular Buys" items = {popularItems}></ItemContainer>
   
    </div>
  )
}

export default Body