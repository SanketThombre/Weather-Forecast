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

    const [search, setSearch] = useState("");
    const handleChange = (value) => {
        // console.log(event.target);
        // const value = event.target.value;

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=10c4cbada812a8d40d0d6e944b86cc8d&units=metric`)
            .then((res) => console.log(res))

    }


    return (
        <>
        <SearchBox>
            <div style={{fontSize:"20px"}}>
                <FontAwesomeIcon icon={faLocationDot} /> 
                </div>    
            <Input type="string"  placeholder="Search City" onChange={(e)=> handleChange(e.target.value)} />
            <FontAwesomeIcon style={{fontSize:"20px"}} icon={faMagnifyingGlass} />
            </SearchBox>

            
        </>
        
    )
}