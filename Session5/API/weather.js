async function getWeather(city)
{
    try{
        const apiKey="YOUR_API_KEY";

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        console.log(`Temperature in ${city}: ${data.main.temp}°C`);
        console.log(`Weather: ${data.weather[0].description}`);

        return data;
    }  
    
    catch (error) {
        console.error("Could not fetch weather:", error.message);
    }
}

getWeather("Bengaluru");
