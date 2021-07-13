import React, { useState } from 'react';
import './App.css';
import Ui from './Ui';



function App() {

  const API_ = 'ADD API TOKEN HERE';
  
  const [form, setForm] = useState({
    city: "",
    country: ""

  });

  const [weather, setWeather] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState('');

  async function weatherData(e) {
    e.preventDefault();
    
    try {

      if (form.city === "") {
        alert("please add values");
      } else {
        setSpinner(true);
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${API_}`)
          .then((res) => res.json())
          .then((data) => data)
  
        setSpinner(false);
        setWeather(
  
          {
            data: data
  
          }
  
        )
    }


    }catch(e){
      setError(e.message);
     
    }

  }


  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value })
    }
    if (name === "country") {
      setForm({ ...form, country: value })
    }

  };



  return (
    <div className="App">
      <div>
        <h1> Weather:</h1>

        <div>
          <input type="text" name="city" placeholder="city" onChange={e => handleChange(e)} />
          <input type="text" name="country" placeholder="country" onChange={e => handleChange(e)} />
          <button onClick={e => weatherData(e)}> Submit</button>

        </div>
        {spinner && <p> Loading...</p>}
      <h2> 
      {error}
        </h2>  

        {
          weather.data != undefined ?

            <div>
              <Ui data={weather.data} />

            </div>
            : null
        }
      </div>
    </div>
  );
}

export default App;
