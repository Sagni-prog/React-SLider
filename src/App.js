
import Data from './container/Data'
import {FaArrowLeft,FaArrowRight} from 'react-icons/fa'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'
import { useEffect, useState } from 'react';
import Slide from './Slide';
import { Quote } from './Quote';
import Image from './Image';

function App() {
  return(
    <div>
       <Slide />
       {/* <Quote /> */}
    </div>
  );

}

export default App;
