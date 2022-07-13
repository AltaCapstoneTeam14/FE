import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { BsArrowUp } from 'react-icons/bs';
import "../Scroll/Scroll.css"

function Scroll() {
  return (
    <div>
      <ScrollToTop smooth color="#6f00ff" style={{borderRadius:"50px", padding:"25px"}} component={<BsArrowUp className="scroll"/>}/>
    </div>
  )
}

export default Scroll
