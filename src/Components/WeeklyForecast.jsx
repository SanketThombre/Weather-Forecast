
import styled from "styled-components";


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

export const WeeklyForecast = () => {
    return (
        <>
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
                <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',gap: '15px'}}>
                    <h1>27°c</h1>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                </div>
                
            </Graph>
            
        </>

    )
}