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
export const Search = () => {

    const [search, setSearch] = useState([]);

    console.log(search);
   
    let timer;
   function debouncing(getWeather) {
       
        
            if(timer) {
                clearTimeout(timer)
            }

            timer = setTimeout( function (){
                getWeather()            
                },500)
        
            
        
    }

   
    
    // useEffect(() => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=10c4cbada812a8d40d0d6e944b86cc8d&units=metric`)
    //         .then(res => console.log(res));
    //  }, []);
    
    async function getWeather() {

        try {

            if (search.length < 2) {
                return false;
            }
            
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=10c4cbada812a8d40d0d6e944b86cc8d&units=metric`);
            let data = await res.json();
            console.log(data);
            
        }
        catch (error) {
            console.log(error);
        }

    }

  

    return (
        <>
        <SearchBox>
            <div style={{fontSize:"20px"}}>
                <FontAwesomeIcon icon={faLocationDot} /> 
                </div>    
                <Input type="string" placeholder="Search City" onChange={(e) => setSearch(e.target.value)} onInput={debouncing(getWeather)} />
            <FontAwesomeIcon style={{fontSize:"20px"}} icon={faMagnifyingGlass} />
            </SearchBox>
            <Displays>
           
            </Displays>
            
            
        </>
        
    )
}