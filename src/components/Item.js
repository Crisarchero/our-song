import React from 'react'

const Item = (prop) => {
  return (
    <li id = "item" className ="shadow list-group-item flex-fill ms-2 me-2 text-center position">
      <a href = ".">

      <div className = "w-100 h-100 item-cover"></div>
      <img className = "w-100 list-item" src = {prop.item.img} alt = {prop.item.title}></img>
      </a>
    </li>
  )
}

export default Item