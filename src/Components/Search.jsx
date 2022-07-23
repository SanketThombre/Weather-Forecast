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
height:190px;
// border: 0.5px solid gray;
margin :  auto;
display:grid;
grid-template-columns:repeat(8,1fr);
grid-template-rows:1;
overflow:auto hidden;
border-radius : 10px;
`;

const Box = styled.div`
width:130px;
height:100%;
border: 0.5px solid gray;
border-radius : 10px;
cursor:pointer;
&:hover{
    background-color: gray;
    color: white;
}
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
    const [week, setWeek] = useState([]);


   

    console.log(search);
   
    useEffect(() => {
        axios.get("https://ipinfo.io/json?token=52ed0181817dc8").then((res) => {
          setSearch(res.data.city);
        });
      }, []);

    const handlePress = (val) => {
        if (val.keyCode == 13) {
           setSearch(val.target.value)
       }
    }

    let weather = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=10c4cbada812a8d40d0d6e944b86cc8d&units=metric`;
    try {
      let res = await fetch(url);
      let data = await res.json();
      let lat = data.coord.lat;
        let lon = data.coord.lon;
        setData(data.main.temp)
      weeklydata(lat, lon);
    } catch (error) {
      console.log(error);
    }
    }

    const weeklydata = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=10c4cbada812a8d40d0d6e944b86cc8d&units=metric`;
        try {
          let res = await fetch(url);
          let data = await res.json();
          console.log("week", data.daily);
          setWeek(data.daily);
        } catch (error) {
          console.log(error);
        }
      };
   
    
    useEffect(() => {
        weather();
    }, [search]);
    
    // console.log("data", data)
    
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   
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
                {week.map((e, i) =>
                 
                    <Box key={i}>
                       
                            <h3 style={{ margin: 0 }}>{ days[new Date(e.dt*1000).getDay()]}</h3>
                    <h3 style={{ margin: 0 }}>{Math.floor(e.temp.max)}°c</h3>
                    <img src={`http://openweathermap.org/img/wn//${e.weather[0].icon}@4x.png`} alt="" width="100px" height="80px" />
                    <h3 style={{margin: 0}}>{e.weather[0].main}</h3>
                </Box>
                 )}
               
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