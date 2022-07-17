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
export const Search = () => {

    const [search, setSearch] = useState([]);
   
    // let timer;
    // const debounce = (func) => {
       
    //     return {
    //         if(timer) {
    //             clearTimeout(timer)
    //         }

    //         timer = setTimeout( function (){
    //             func()            
    //             },500)
    //     }
            
        
    // }
    
    useEffect(() => {
        axios.get("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCpGeBXtx91HZImsvn6lBvUFdgjmtbhgC4")
            .then(res => console.log(res));
     }, []);
    


    return (
        <>
        <SearchBox>
            <div style={{fontSize:"20px"}}>
                <FontAwesomeIcon icon={faLocationDot} /> 
                </div>    
                <Input type="string" placeholder="Search City" onChange={(e) => setSearch(e.target.value)}  />
            <FontAwesomeIcon style={{fontSize:"20px"}} icon={faMagnifyingGlass} />
            </SearchBox>
            <div>
            {search.forEach((el) =>
            console.log(el)
                // <div>{ el}</div>
                )}
            </div>
            
            
        </>
        
    )
}