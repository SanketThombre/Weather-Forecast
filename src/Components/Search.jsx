import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components";
import { useState,useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";



const Climate = styled.div`
width: 55%;
margin-left:20px;
// border: 1px solid red;
`;

const Map = styled.div`

position: absolute;
top:150px;
left:59%;
width: 40%;
height: 400px;
border: 1px solid black;
`;

const SearchBox = styled.div`
width:100%;
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
width:90%;
height:500px;
`;

const Main = styled.div`
width:100%;
height:190px;
// border: 0.5px solid gray;
margin :  auto;
display:grid;
grid-template-columns:repeat(8,1fr);
grid-template-rows:1;
overflow:auto hidden;
border-radius : 10px;
`;

let Box = styled.div`
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
width:100%;
height:780px;
border: 0.5px solid gray;
margin : 15px auto;
border-radius : 10px;

`;

const Temp = styled.div`
font-size:40px;
font-weight:bold;

`;

const Name = styled.div`
width:180px;
height:35px;
border: 1px solid gray;
position:absolute;
top:20px;
right:10px;
font-size:20px;
font-weight:bold;
border-radius : 10px;
display:flex;
align-items:center;
justify-content:center;

`;

const Vatavaran = styled.div`
width:97%;
margin : auto;
height:60px;
// border: 1px solid gray;
display:flex;
align-items:center;
gap:15px;
`;

const Press = styled.div`
flex:1;
height:100%;
// border: 1px solid red;
background-color:#f3fbff;


`;

export const Search = () => {

    const [search, setSearch] = useState("");

    const [data, setData] = useState([]);
  const [week, setWeek] = useState([]);
  
  const [temp, setTemp] = useState([]);

  const [name, setName] = useState();
  const [press, setPress] = useState([]);
  const [humid, setHumid] = useState([]);

  // const [clr,setClr] = useState("");

   

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
      console.log("name", data);
      setName(data.name);
      let lat = data.coord.lat;
        let lon = data.coord.lon;
     
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
          setPress(data.daily[0].pressure);
          setHumid(data.daily[0].humidity);
          setTemp(data.daily[0].temp)
          setData(data.daily[0].temp.max);
        } catch (error) {
          console.log(error);
        }
      };
   
    
    useEffect(() => {
        weather();
    }, [search]);
    
    // console.log("data", data)
    
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

 
  const graph = (daily,i) => { 
setData(daily.temp.max);
console.log("daily", daily)
    setTemp(daily.temp);
    setPress(daily.pressure);
    setHumid(daily.humidity);
    // setClr("gray");
    // console.log("key", i);
   
  }

  console.log("temp", temp)
   
  return (
      
    
<>
   
         <Climate>
        <SearchBox>
            <div style={{fontSize:"20px"}}>
                <FontAwesomeIcon icon={faLocationDot} /> 
                </div>    
                <Input type="string" placeholder="Search City and press Enter"  onKeyUp={(e)=>handlePress(e)} />
            <FontAwesomeIcon style={{fontSize:"20px"}} icon={faMagnifyingGlass} />
            </SearchBox>
           
           
        <Name>City:{name}</Name>
       
            <Main> 
                {week.map((e, i) =>
                 
                    <Box key={i} onClick={(el)=>graph(e, i)}>
                       
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
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="50px" height="50px" />
                </div>
                
          
          <Displays >

          <Chart
                type="area"
                series={[
                  {
                    name: "Temperature",
                    data: [
                      temp.morn,
                      temp.max,
                      temp.day,
                      temp.min,
                     
                    ],
                  },
                ]}
                options={{
                  dataLabels: {
                    formatter: (val) => {},
                  },
                  yaxis: {
                    labels: {
                      formatter: (val) => {
                        return `${Math.floor(val)}℃`;
                      },
                    },
                  },
                  xaxis: {
                    categories: ["6:00am", "12:00pm", "6:00pm", "12:00am"],
                  },
                }}
              />
          </Displays>


          <Vatavaran>
            <Press>
              <h3 style={{ margin: 0 }}>Pressure</h3>
              <h3 style={{ margin: 0,color:"gray"}}>{press} hpa</h3>
            </Press>
            <Press>
              <h3 style={{ margin: 0 }}>Humidity</h3>
              <h3 style={{ margin: 0,color:"gray" }}>{humid} %</h3>
            </Press>
          </Vatavaran>

         
          
        </Graph>
                
                
      </Climate> 

      <Map>
        {<iframe width="100%" height="100%"  id="gmap_canvas" src={`https://maps.google.com/maps?q=${search}=&z=11&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>}
      </Map>
    </>
    
    
        
    )
}