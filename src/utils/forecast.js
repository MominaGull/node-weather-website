const request = require('request')

const forecast = (lat, long, callback) => {

    const url = 'https://api.darksky.net/forecast/b7f888de00b40193e38c14bc3af33fcd/' + lat + ',' + long
    request({url, json: true}, (error, {body}) => {
        if (error){
           callback('Unable to connect to weather service', undefined)
        }
        else if (body.error){
            callback('Unable to find location.', undefined)
        }
        else{
            callback(undefined, 
                body.daily.data[0].summary + ' It is currenlty ' + body.currently.temperature + ' degrees out. There is ' + body.currently.precipProbability + '% chance of rain.'
            )
        }
    })
}

module.exports = forecast