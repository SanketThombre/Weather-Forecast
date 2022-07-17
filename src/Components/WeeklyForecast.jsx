
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

export const WeeklyForecast = () => {
    return (
        <>
            <Main> 
                <Box>
                    <h3 style={{margin: 0}}>sun</h3>
                    <h3 style={{margin: 0}}>25c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>mon</h3>
                    <h3 style={{margin: 0}}>25c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>tue</h3>
                    <h3 style={{margin: 0}}>25c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>wed</h3>
                    <h3 style={{margin: 0}}>25c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>thu</h3>
                    <h3 style={{margin: 0}}>25c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>fri</h3>
                    <h3 style={{margin: 0}}>25c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>
                <Box>
                <h3 style={{margin: 0}}>sat</h3>
                    <h3 style={{margin: 0}}>25c</h3>
                    <img src="https://weatherapp-swanand.netlify.app/img/cloudy.ac49ed24.svg" alt="" width="32px" height="32px" />
                    <h3 >Clouds</h3>
                </Box>   
               
            </Main>
            
        </>

    )
}