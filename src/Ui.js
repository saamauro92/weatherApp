import React from 'react'




export default function Ui(props) {

    const { data } = props;
    console.log(props);
    const iconurl = "http://openweathermap.org/img/wn/" + `${data.cod != 404 ? data.weather[0].icon : null}` + ".png";
    return (

        <>



            { data.cod != 404 ?

                <React.Fragment>
                    <span> {data.name}, {data.sys.country} </span>

                    <h1>
                        {Math.floor(data.main.temp - 273.15)}
                        <sup> o</sup>
                    </h1>

                    <span>
                        {data.weather[0].main}
                    </span>

                    <img src={iconurl} alt="" />

                    <span> {data.weather[0].description}</span>

                    <div className="weatherDetails">

                        <div className="section_one">


                            <div>

                                <h4> High/Low  </h4>

                                <span>     {Math.floor(data.main.temp_max - 273.15)} <sup> o</sup> / {" "}{Math.floor(data.main.temp_min - 273.15)} <sup> o</sup> C</span>

                            </div>
                            <div>

                                <h4> Humidity  </h4>

                                <span>  {data.main.humidity} %</span>

                            </div>
                            <div>

                                <h4> Pressure  </h4>

                                <span>     {data.main.pressure} hPa</span>

                            </div>
                            <div>

                                <h4> Visibility  </h4>
                                <span>     {data.visibility / 1000}Km </span>

                            </div>
                        </div>
                        <div className="section_two">


                            <div>

                                <h4> Wind  </h4>

                                <span>     {Math.floor((data.wind.speed * 18) / 5)} Km/hr </span>
                            </div>
                            <div>

                                <h4> Wind Direction  </h4>

                                <span>     {data.wind.deg} <sup>0</sup>deg</span>

                            </div>
                            <div>

                                <h4> Sunrise  </h4>

                                <span>      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()} </span>

                            </div>
                            <div>

                                <h4> Sunset  </h4>

                                <span>      {new Date(data.sys.sunset * 1000).toLocaleTimeString()} </span>

                            </div>
                        </div>
                    </div>

                </React.Fragment>
                :
                <div>
                    <h2> {data.message}</h2>
                </div>
            }

        </>
    )
}


