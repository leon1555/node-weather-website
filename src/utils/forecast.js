const request = require('request');

const forecast = (long, lat, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=c861c5a5548bddb77e23eb4b800795a6&query=${long},${lat}&units=m`
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Cannot connect to forecast service.', undefined)
        } else if(body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const { temperature, feelslike } = body.current;
            const description = body.current.weather_descriptions[0];
            callback(undefined, `${description}. The current temperature is ${temperature} degrees. It feels like ${feelslike} degrees.`
            )
        }
    })
}

module.exports = forecast