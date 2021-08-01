import React from 'react'
import './Home.css'
import ShareCard from '../Card/ShareCard'
import  Facebook from '../Assets/FB.png'
import Header from '../Card/Header'
import  Google from '../Assets/GOOGL.png'
import  Amazone from '../Assets/AMZN.svg'
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
const tablestyle= makeStyles({
    outer:{
         margin:'181px',
         padding:'35px',
            width: '81%' ,
            borderColor:'black',
            border: 0,
            borderRadius: 3,  
        },
        button:{
            color:'white',
            backgroundColor:'#6063cb',
            padding:"5px",
            borderRadius:'7px',
        }
});
const View =()=>{
    const classes =tablestyle();
    return (
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
               <Table  size="small" className={classes.outer} style={{border:'2px solid #f0efef',borderRadius:"50px"}}>
                   <TableRow  align="center" style={{height:'60px',backgroundColor:" #e4e3ee"}}>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                       <TableCell>Saved Data Table</TableCell>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                   </TableRow>
                   <TableRow align="center" style={{height:'60px'}}>
                       <TableCell>141 Capital Inc</TableCell>
                       <TableCell><img src="https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg" height="20px" width="20px"></img></TableCell>
                       <TableCell> $145.4K</TableCell>
                       <TableCell><button className={classes.button}> DELETE</button></TableCell>
                       <TableCell>$0.003</TableCell>
                   </TableRow>
                   <TableRow align="center" style={{height:'60px'}}>
                       <TableCell>BigString Corp</TableCell>
                       <TableCell><img src= "https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/bnb.svg" width="20px" height="20px"></img></TableCell>
                       <TableCell>$145.44K</TableCell>
                       <TableCell> <button className={classes.button}> DELETE</button></TableCell>
                       <TableCell>$0.003455</TableCell>
                   </TableRow>
                   <TableRow  align="center" style={{height:'60px',backgroundColor:" #e4e3ee"}}>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                       <TableCell><button className={classes.button}>BACK</button></TableCell>
                       <TableCell></TableCell>
                       <TableCell></TableCell>
                   </TableRow>
              </Table> 
            </div> 
        </div>
    )
}

export default View;