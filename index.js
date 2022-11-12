
let apiKey = '24fe30ba951e09b0e8e820ca62e88259'
document.getElementById('search-btn').addEventListener('click', function () {
    const cityName = document.getElementById('city-name');
    const currentCity = cityName.value

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => findOutLocation(data))
        .catch((err) => {
            console.log(err);
        })
});

function findOutLocation(data){
    console.log(data)
    const city = document.getElementById('city-name').value;

    const location = document.getElementById('location');
    location.innerHTML = city;
    console.log(location);
    document.getElementById('city-name').value ="";

    const temp = document.getElementById('temp');
    temp.innerHTML = data.main.temp;

    const cloudSystem = document.getElementById('cloud');
    cloudSystem.innerHTML = data.weather[0].main;

    const latitude = document.getElementById('latitude');
    latitude.innerHTML = "lat: " + data.coord.lat;

    const longitude = document.getElementById('longitude');
    longitude.innerHTML = "lon: " + data.coord.lon
}

