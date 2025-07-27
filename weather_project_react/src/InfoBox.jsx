import Card from '@mui/material/Card';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const WARM_URL ="https://images.unsplash.com/photo-1565550164910-75a179d37e7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXIlMjBjb25kaXRpb258ZW58MHx8MHx8fDA%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL ="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    return (
<div className="InfoBox">

<div className="cardcontainer">
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ?RAIN_URL   :info.humidity<20 ?INIT_URL  : info.temp >15 ? WARM_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
            info.humidity>80 ? <ThunderstormIcon/>  : info.temp >15 ? <SunnyIcon/> :<AcUnitIcon />
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>
            Temperature ={info.temp}&deg; C
        </p>
         <p>
            Humidity ={info.humidity}
      </p>
        <p>
            Min Temp ={info.tempMin}&deg; C
      </p>
      <p>
            Max Temp ={info.tempMax}&deg; C
      </p>
      <p>
           the Weather can be described as <i>{info.weather} </i>feels like <i>{info.feelsLike}</i>&deg; C
      </p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
</div>
    );
}
