var xhr = require('xhr')
var greeting = require('./views/greeting.hbs')
var extraData = require('./views/extraData.hbs')

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544'


// function updateData () {
xhr.get(endpoint, function (err, data) {
    if (err) {
      console.error(err)
    }
    // In case you're curious
    console.log(data.body) // FYI: data.body is a string

    // Replace 'Space' below with the response
    var target = document.getElementsByTagName('main')[0]
    var obj = JSON.parse(data.body)
    target.innerHTML = greeting(obj)
  })

document.getElementById("update").addEventListener("click", updatePage);

function updatePage () {
  xhr.get(endpoint, function (err, data) {
    if (err) {
      console.error(err)
    }
    // In case you're curious
    console.log(data.body) // FYI: data.body is a string

    // Replace 'Space' below with the response
    var target = document.getElementsByTagName('second')[0]
    var obj = JSON.parse(data.body)
    target.innerHTML = extraData(obj)
  })
}





