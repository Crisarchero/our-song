import React from 'react'
import piano from '../imgs/icons8-grand-piano-100.png'
import guitar from '../imgs/icons8-guitar-96.png'
import recorder from '../imgs/icons8-recorder-96.png'
import string from '../imgs/icons8-violin-96.png'
import drums from '../imgs/icons8-drum-set-96.png'

const Categories = () => {
  return (
    <div id="categories-section" className="bg-light ps-3 pe-3 pt-5 pb-5">
      <h3 className="h1">Top Categories</h3>
      <div className="w-100 d-flex justify-content-center align-items-center">

        <div className='w-50 d-flex flex-md-row flex-sm-column flex-wrap p-5 mt-5 mb-5 justify-content-center align-items-center'>
          <a href="">< img className="m-5 border rounded-circle p-3" src={piano} alt="See Pianos" />
          </a>
          <a href="">
            < img className="m-5 border rounded-circle p-3" src={guitar} alt="See Guitars" />
          </a>
          <a href="">
            < img className="m-5 border rounded-circle p-3" src={recorder} alt="See Woodwinds" />
          </a>
          <a href="">
            < img className="m-5 border rounded-circle p-3" src={string} alt="See Other Strings" />
          </a>
          <a href="">
            < img className="m-5 border rounded-circle p-3" src={drums} alt="See Percussion" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Categories
