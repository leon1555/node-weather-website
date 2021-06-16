const fetch = require('node-fetch');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibGVvbmNoaXNob2xtIiwiYSI6ImNrcHJpdjhkbzBtdXkybnBhN2xpeHk0eTgifQ.XnnPTiHHp3jJrKXBf8PQtg&limit=1'
    fetch(url)
    .then(res => res.json())
    .then((body) => {
        if(body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            }) 
        }
    })
    .catch((error) => {
        callback('Unable to connect to location service!', undefined)
    })
}

module.exports = geocode