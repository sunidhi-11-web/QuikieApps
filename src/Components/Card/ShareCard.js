import React from 'react'
import './ShareCard.css'
const ShareCard = (props)=>{
  return(
    <div>
       <div id="box"> 
        <div  id="Flex_1">
            <div id ="Flex_2">
                <div className="heading_1">{props.heading}</div>
                <div>
                    <img src={props.img} alt="#" id="img_icon"></img>
                </div>
            </div>
            <div id="Flex_3">
              <div> 
                  {props.num}I
              </div>
              <div>  
                   {props.num1}
              </div>  
            
             
            </div>
        </div>
       </div>
    </div>         
  )  

}

export default ShareCard;