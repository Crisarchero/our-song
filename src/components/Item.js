import React from 'react'

const Item = (prop) => {
  //These are the items that the item container contains.
  return (
    <li id="item" className="shadow list-group-item flex-fill ms-2 me-2 text-center position">
      <a className="card text-decoration-none" href=".">
        <div className="card-body">
          <div className="w-100 h-100 item-cover"></div>
          <img className="w-100 list-item" src={prop.item.img} alt={prop.item.title}></img>  
          <p className = "card-text  text-decoration-line-through">{prop.item.formerPrice}</p>
          <p className = "card-text text-warning fw-bold"> {prop.item.price}</p>
       
        </div>
      </a>
    </li>
  )
}

export default Item