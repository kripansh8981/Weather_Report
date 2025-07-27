import InfoBox from "./InfoBox";
 import SearchBox from "./SearchBox";
 import { useState } from "react";
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo] = useState({
        
        city :"Pune",
         temp : 24.04,
    tempMin : 25.05,
  tempMax: 25.05,
  humidity: 47,
  feelsLike :32.4,
  weather :" haze"
    
    });
    let updateInfo =(newInfo)=>{
      setWeatherInfo(newInfo);
    }
    return(<div   style={{textAlign:"center"}}>
        <h1>WeatherApp</h1>
     <SearchBox updateInfo={updateInfo} />

   <InfoBox  info={weatherInfo}/>

        
        </div>)
}