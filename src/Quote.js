import React, { useState } from 'react'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'
import images from "./container/images"

export const Quote = () => {
   const [current,setCurrent] = useState(0)
   const num = 2
   let className1 = ''
   let className2 = ''
   let className3 = ''

    const data =  [
         { 
             quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis rem sit accusamus! Magnam nisi eum a pariatur impedit provident maxime commodi, cum tempore? Vitae officia totam error quam consectetur doloremque!',
             image: images.image1,
             alt: 'react screenshot'
             },

       {
            quote: 'Lorem ipsum dolor sit amet consectetur dipisicing elit. Delectus alias, quas libero magni corporis vel sunt veritatis ratione dolorem. Nam quia cupiditate odio facilis vero dolor nihil quasi repudiandae incidunt?',
            image: images.image2,
            alt: 'Sagni'
        },

       {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat ab, nemo pariatur reiciendis a accusantium! Necessitatibus deleniti saepe, quasi, accusantium odit optio, aperiam praesentium assumenda eum modi mollitia quis?',
            image: images.image3,
            alt: 'Sagni'  
      }
    ]

    const next = () => {
      setCurrent( current === num ? 0 : current + 1)
     }
   
     const prev = () => {
       setCurrent(current === 0 ? num : current - 1)
     }
     const active1 = () => {
      return className1 = current === 0 ? 'active ' : '' 
     }
     const active2 = () => {
      return className2 = current === 1 ? 'active ' : '' 
     }
     const active3 = () => {
      return className3 = current === 2 ? 'active ' : '' 
     }

  return (
    <div className='container'>
     <div className='inside'>
       <FaArrowAltCircleLeft onClick={prev} className ='left__arrow__quote'/>
      <FaArrowAltCircleRight onClick={next} className ='right__arrow__quote'/>
      {data.map((data,index) =>
      index === current && 
      <div key={index}>
      <img src= {data.image} className = 'img' alt = {data.alt} />
      <div key={index}  className = 'card'>
         <p>{data.quote}</p>
      </div>
      </div>
        )
      }
     </div>
     <div className='circles'>
        <div className = {active1() + ' cir'}></div>
        <div className = {active2() + ' cir'}></div>
        <div className = {active3() + ' cir'}></div>
      </div>
    </div>
  )
}
