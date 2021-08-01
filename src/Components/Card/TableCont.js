import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import View from './../Component-page/View';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';


const tablestyle= makeStyles({
    outer:{
           margin:'181px',
           padding:'35px',
           width: '81%' ,
           borderColor:'black',
           border: 0,
           borderRadius: 3,
        }, 
});
const headerstyle= makeStyles({
   backcolour:{
      backgroundColor:'#e4e3ee',
   } ,
})
const tabledata=makeStyles({
    trow:{
        color:'grey',
        fontSize: '12px',
    }
})
const buttonbefore=makeStyles({
     before:{
         color:'white',
         backgroundColor:'#6063cb',
         padding:"5px",
         borderRadius:'7px',
     },
})
const buttonafter=makeStyles({
    after:{
      color:'white',
      backgroundColor:'#1381cf',
      padding:"5px",
      borderRadius:'7px',
    },
})
const usestyle= makeStyles({
    search: {
        position: 'relative', 
        border:'2px solid black',
        marginLeft: 0,
        width: '100%',
        borderRadius:"20px",
      },
      searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        marginLeft: '-197px',
      },
})

const TableCont = () => {
  const [apiResponse, setApiResponse] = useState(0);
  const classes =tablestyle();
  const Headers=headerstyle();
  const tableroww=tabledata();
  const clickbefore=buttonbefore();
  const clickafter=buttonafter();
  const classess= usestyle();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = React.useState(0);
  const [tabledataa,settabledata]=useState(null)
  const  [istrue,setistrue]=useState(false);
 
  const onclickhandler=(event)=>{
    setistrue(!istrue);
    console.log("hello");
    console.log(event);
  };
  
  //feacting api
  const fetchdata = () => {
    axios
      .get(
        "https://api.nomics.com/v1/currencies/ticker?key=3475bc0c3eec0f5823e33834570c82d3c5722642"
      )
      .then((res) => {setApiResponse(res.data); console.log(res);})
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    fetchdata();
  }, []);
  console.log(apiResponse);
     
  useEffect(()=>{
    if(apiResponse.length>0){
        rows();
        settabledata(mytable());
       }
  },[apiResponse,istrue])

  function createData( name, logo_url, price, num_exchanges) {
    return { name, logo_url, price, num_exchanges };
         }
           const data =[];
           const rows =()=> {
           apiResponse.map((item,index)=>{
              if(index<5){   
              const namee=item.name;
              const logo_urll =item.logo_url;
              const pricee =item.price;
              const num_exchangess=item.num_exchanges;
                console.log(namee);
                    data.push({
                    name:namee,
                      logo_url:logo_urll,
                      price:pricee,
                      num_exchanges:num_exchangess,
                    })
                   }
                })
                };
 

  //calling API in Table              
   const mytable=()=>{
     const update=data.map((row) => (
        <TableRow onClick={(event) => onclickhandler(event)} align="center" style={{height:'60px'}}>
          <TableCell align="center" >{row.name}</TableCell>
          <TableCell align="center" ><img src={row.logo_url} width='20px' height='20px' alt='#'></img></TableCell>
          <TableCell align="center">{row.price}</TableCell>
          <TableCell align="center" >
            <button  className={istrue?clickafter.after :clickbefore.before}   width='40px' height='25px'>View </button>
          </TableCell>
          <TableCell align="center">{row.num_exchanges}</TableCell>
        </TableRow>
      ));
      console.log(istrue);
      return update;
   };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


//Function return 
  return (
    <div><div className="ptable" style={{    marginTop: "-137px"}} >
        <Paper className={classes.paper} align="center">
        <Table size="small" className={classes.outer} style={{border:'2px solid #f0efef',borderRadius:"50px"}} >
          <TableHead align="center">
            <TableRow align="center" style={{height:'60px'}}>
              <TableCell align="center">Stock Details Tables</TableCell>
              <TableCell align="center" ><div className={classess.search} style={{border:"none" , backgroundColor:"#e4e3ee",height:"40px",borderRadius:"2px",width:"450px"}}>
                <div className={classess.searchIcon} style={{border:"none" , backgroundColor:"#e4e3ee"}}>
                  <SearchIcon style={{border:"none" , backgroundColor:"#e4e3ee"}} />
                </div>
              <InputBase
                placeholder="Search by Company Name"
                classes={{
                    root: classess.inputRoot,
                    input: classess.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
                </div>
         
             </TableCell >
             <TableCell style={{color:'white'}}> asdcfvgthyuj</TableCell>
             <TableCell style={{color:'white'}}>fvgbhnyjumki</TableCell>
             <TableCell style={{color:'white'}}>gvtbhynjutki</TableCell>
            </TableRow>
          </TableHead>
        <TableHead className={Headers.backcolour} align="center">
          <TableRow className={tableroww.trow} align="center" style={{height:'60px'}}>
            <TableCell className={tableroww.trow} align="center">COMPANY NAME</TableCell>
            <TableCell className={tableroww.trow} align="center">SYMBOL</TableCell>
            <TableCell className={tableroww.trow} align="center">MARKET CAP</TableCell>
            <TableCell className={tableroww.trow} align="center">BUTTON</TableCell>
            <TableCell className={tableroww.trow} align="center">CURRENT PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabledataa}
        </TableBody>
        <TableHead className={Headers.backcolour} align="center">
        <TableRow align="center" style={{height:'60px'}} >
        <TableCell align="center" style={{color:'#e4e3ee'}}> asdxefcrgtyhujik </TableCell>
        <TableCell align="center" style={{color:'#e4e3ee'}}> fvgthytjnukiolp;9[] </TableCell>
        <TableCell align="center" style={{color:'#e4e3ee'}}>gvfbhnyjtukilovgtbhyjnu  </TableCell>
        <TableCell align="center"  style={{color:'#e4e3ee'}}>gvfbhnyjtukilovgtbhyjnu  </TableCell>
          <TableCell align="right">
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableCell>
        </TableRow>
        </TableHead>
      </Table>
      </Paper> 
       </div>    
    </div>
  )
}

export default TableCont;