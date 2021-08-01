import React from 'react'
import ShareCard from '../Card/ShareCard'
import Facebook from '../Assets/FB.png'
import Header from '../Card/Header'
import Google from '../Assets/GOOGL.png'
import Amazone from '../Assets/AMZN.svg'
import TableCont from '../Card/TableCont'
import './Home.css'

const Home =()=>{
    return(
        <div>
            <div>
               <Header></Header>
            </div>
            <div id="Box_flex">
                <div >
                <ShareCard heading="GOOGL" img={Google} num={1515} num1={"USD"}></ShareCard>
                </div>
                <div>
                <ShareCard heading="FB" img={Facebook} num={266} num1={"USD"}></ShareCard>
                </div>
                <div>
                <ShareCard heading="AMZN" img={Amazone} num={3116} num1={"USD"}></ShareCard>
                </div>
            </div> 
            <div>
                <TableCont></TableCont>
            </div>   
        </div>
    )
}

export default Home;