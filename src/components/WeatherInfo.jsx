import React from 'react'

const WeatherInfo = ({data}) => {

  const imgStyle = {
    width: '35px',
    height: '35px'
  }

  return (
    <div>
      <div className="row">
            <div className="col-md-2">
                <h5 data-toggle="tooltip" title="Cuaca"><img src={'http://openweathermap.org/img/wn/'+(data && data.icon)+'.png'} style={imgStyle}/> {data && data.weather.toUpperCase()}</h5>
            </div>
            <div className="col-md-2">
                <h5 data-toggle="tooltip" title="Suhu"><img src='https://cdn-icons-png.flaticon.com/512/4150/4150977.png' style={imgStyle}/> {data && data.temp} <sup>o</sup>C</h5>
            </div>
            <div className="col-md-2">
                <h5 data-toggle="tooltip" title="Kelembapan"><img src='https://cdn-icons-png.flaticon.com/512/4907/4907228.png' style={imgStyle}/> {data && data.hum} %</h5>
            </div>
            <div className="col-md-2">
                <h5 data-toggle="tooltip" title="Kecepatan Angin"><img src='https://cdn-icons-png.flaticon.com/512/3741/3741046.png' style={imgStyle}/> {data && data.wspeed} m/s</h5>
            </div>
            <div className="col-md-2">
                <h5 data-toggle="tooltip" title="Tekanan"><img src='https://cdn-icons-png.flaticon.com/512/5705/5705278.png' style={imgStyle}/> {data && data.press} hPa</h5>
            </div>
            <div className="col-md-2">
                <h5 data-toggle="tooltip" title="Solar Irradiance"><img src='https://play-lh.googleusercontent.com/DVcLNEO_b1wgxCcDMNltcdyoIk7FYyfng5LpoBs476Fo6QEzGsqmlpCwQvEj5zqRcg=w240-h480-rw' style={imgStyle}/> {data && data.dhi}</h5>
            </div>
        </div>
    </div>
  )
}

export default WeatherInfo
