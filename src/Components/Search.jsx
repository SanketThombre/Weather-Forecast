import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components";
import { useState,useEffect } from "react";
import axios from "axios";



const SearchBox = styled.div`
width:55%;
height:50px;
border: 0.5px solid gray;
margin : 20px auto;
display:flex;
align-items:center;
justify-content:center;
gap :15px;
border-radius : 10px;
`
const Input = styled.input`
width:85%;
height:97%;
outline:none;
border:0px;
font-size:18px;
font-weight:bold;
`

const Displays = styled.div`
width:54%;
height:500px;
border: 0.5px solid gray;

position:absolute;
left:23%;
top:73px;

`;

const Main = styled.div`
width:55%;
height:150px;
border: 0.5px solid gray;
margin :  auto;
display:flex;

`;

const Box = styled.div`
width:130px;
height:100%;
border: 0.5px solid gray;
`;

const Graph = styled.div`
width:55%;
height:400px;
border: 0.5px solid gray;
margin : 15px auto;
border-radius : 10px;
`;

const Temp = styled.div`
font-size:40px;
font-weight:bold;

`;



export const Search = () => {

    const [search, setSearch] = useState("");

    const [data, setData] = useState([]);

   

    console.log(search);
   
//     let timer;
//    function debouncing(getWeather) {
       
        
//             if(timer) {
//                 clearTimeout(timer)
//             }

//             timer = setTimeout( function (){
//                 getWeather()            
//                 },500)
        
            
        
//     }

    
    // async function getWeather() {

    //     try {

    //         if (search.length < 2) {
    //             return false;
    //         }
            
    //         let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=10c4cbada812a8d40d0d6e944b86cc8d&units=metric`);
    //         let data = await res.json();
    //         console.log(data);
            
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }

    // }

    const handlePress = (val) => {
        if (val.keyCode == 13) {
           setSearch(val.target.value)
       }
    }

    let weather = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search || "pune"}&appid=10c4cbada812a8d40d0d6e944b86cc8d&units=metric`)
            .then(res =>
                (setData(res.data.main.temp))  
    )
    }
   
    
    useEffect(() => {
        weather();
    }, [search]);
    
    console.log("data",data)

    return (
        <>
        <SearchBox>
            <div style={{fontSize:"20px"}}>
                <FontAwesomeIcon icon={faLocationDot} /> 
                </div>    
                <Input type="string" placeholder="Search City"  onKeyUp={(e)=>handlePress(e)} />
            <FontAwesomeIcon style={{fontSize:"20px"}} icon={faMagnifyingGlass} />
            </SearchBox>
           
           
         
       
            <Main> 
                <Box>
                    <h3 style={{margin: 0}}>sun</h3>
                    <h3 style={{margin: 0}}>25°c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>mon</h3>
                    <h3 style={{margin: 0}}>25°c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>tue</h3>
                    <h3 style={{margin: 0}}>25°c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>wed</h3>
                    <h3 style={{margin: 0}}>25°c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>thu</h3>
                    <h3 style={{margin: 0}}>25°c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>fri</h3>
                    <h3 style={{margin: 0}}>25°c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>sat</h3>
                    <h3 style={{margin: 0}}>25°c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>   
               
            </Main>
                
              
           
              
            <Graph>
           
                <div style={{display: 'flex',alignItems: 'center',gap: '15px',margin:"35px 20px"}}>
                    <Temp>{ Math.floor(data)}°c</Temp>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                </div>
                
                    </Graph>
                
                
        </>
        
    )
}