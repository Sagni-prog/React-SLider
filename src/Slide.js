
import './App.css';
import Data from './container/Data'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'
import { useEffect, useState } from 'react';

function Slide() {

  

  let num = Data.length - 1;
  const [current,setCurrent] = useState(0)
  useEffect(() => {
    let slidenum = current + 1
    document.title = 'Slide ' + slidenum
  },[current])

  const next = () => {
   setCurrent( current === num ? 0 : current + 1)
  
  }

  const prev = () => {
    setCurrent(current === 0 ? num : current - 1)
  }
  return (
    <section className='slider__section'>
      <FaArrowAltCircleLeft onClick={prev} className ='left__arrow'/>
      <FaArrowAltCircleRight onClick={next} className ='right__arrow'/>
     { 
      
      Data.map((image,index) => (
        <div className = {index === current ? 'slide active ' : 'slide ' + ' image__div'} key={index}>
          {index === current && 
            <img src = {image.image} className = 'image' alt = {image.alt} />}
        </div>
          )
        )
      }
      </section>

  );
}

export default Slide;
