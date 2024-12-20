import { TextField, Button } from "@mui/material";
import { useState } from "react";
import './SearchBox.css';

export default function SearchBox( { updateInfo } ){

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "705f2880b4278e2ae717386bc2b28f28"; 

    let [city , setCity] = useState("");
    let [error , setError] = useState(false);



    let getWeatherInfo = async(city) => {
        try{
            let response = await  fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse); 

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
    };

    
    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            setError(false); // Reset the error state before making the API call
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
            setCity(""); // Clear the input field after successful submission
        } catch(err){
            setError(true);
        }
    }

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city}  onChange={handleChange}/>
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>

                {error && <p style={{color: "red"} }>No such city exists!</p>};
                    
            </form>
        </div>
    );
}