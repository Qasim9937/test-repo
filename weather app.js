const form = document.querySelector('form');
const display = document.getElementById('display')

//function to run when the form is submitted

getWeatherSubmit = (event) => {
    event.preventDefault();

    const city = document.getElementById('city').value.trim();
    getWeatherData(city);

} 


// Async function 
async function getWeatherData(city){

    let apiKey = '4bef6b1caf272fef2587fdea831a723a'

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${city}&units=metric`

    const res = await fetch(apiUrl);

    console.log(res)
    
    try{
        if(!res.ok){
            display.textContent = 'City not found'
            throw new Error('City not found')
        } 
        
        const data = await res.json();

        console.log(data)

    
        display.innerHTML = `
            <p>${city.toUpperCase()} (${data.sys.country.toUpperCase()})</p>

            <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'>
            <p>${data.weather[0].description.toUpperCase()}</p>
            <p>${data.main.temp} <sup>o</sup>C</p>
        `

        display.style.display = 'flex';
        
    }

    catch(err){
        console.error(err)
    }
    
}




// Promises in JavaScript are used to handle asynchronous operations (things that take time to complete e.g. API calls, timers, file loading etc.)

// A Promise can return any of these values:

// Pending = still working
// Fulfilled = completed successfully
// Rejected = failed with an error

// creating a Promise

const myPromise = new Promise((resolve, reject) => {
    let status = 'ok';

    if(status == 'ok'){
        resolve('Operation Successful')
    } else {
        reject('Something went wrong')
    }
})



// using Promises with a timeout function

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Finished after 2 seconds');
    },5000)
})