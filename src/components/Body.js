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
    {title: "A Guitar", img: guitar, price: "$1500.00"},
    {title: "A Violin", img: violin, price: "$750.00"},
    {title: "Headphones", img: headphones, price: "$350.00" }
  ]
  const salesItems = [
    {title: "Headphones", img: salesHeadphones, formerPrice: "$480.99", price: "$380.99"},
    {title: "A trumpet", img: trumpet,  formerPrice: "$379.99", price: "$279.99"},
    {title: "An accordion", img: accordion,  formerPrice: "$800.99", price: "$750.99"},
    {title: "A keyboard", img: keyboard,  formerPrice: "$180.99", price: "$145.00"}
  ]

  return (
    <div>
        <ItemContainer title = "Sales" items = {salesItems}></ItemContainer>
        <Categories></Categories>
        <ItemContainer title = "Popular Buys" items = {popularItems}></ItemContainer>
   
    </div>
  )
}

export default Body