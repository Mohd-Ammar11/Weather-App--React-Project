import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
export default function InfoBox( { info } ) {
    
    const INIT_IMG_URL = "https://www.shutterstock.com/image-photo/smog-urban-city-260nw-1252567807.jpg";
    
    let COLD_IMG_URL = "https://www.ksn.com/wp-content/uploads/sites/13/2023/10/Horz-Cold-Weather.jpg?w=1280";
    let HOT_IMG_URL = "https://www.advenagroup.com/wp-content/uploads/2022/07/Photo-for-Web-36.png";
    let RAIN_IMG_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb6DALnv-7QM_knmcAJSWnU3aBuAx1ngCqPA&s";

    return (
            <div className="InfoBox">        
            <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={info.humidity > 80 ? RAIN_IMG_URL  :  info.temp > 25 ? HOT_IMG_URL  :  COLD_IMG_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' } } component={"span"}>
                        <p>Temperature = {info.temp}&deg;C </p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as {info.weather} and feels like{info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>

        </div>
    );
}