import React, { useState } from 'react';
import './App.css';
import Ui from './Ui';



function App() {

  const API_ = '5184e36ebbcce3264ef673202c02c834';
  const [form, setForm] = useState({
    city: "",
    country: ""

  });

  const [weather, setWeather] = useState([]);
  const [spinner, setSpinner] = useState(false);

  async function weatherData(e) {

    e.preventDefault();
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

        {
          weather.data !== undefined ?

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
