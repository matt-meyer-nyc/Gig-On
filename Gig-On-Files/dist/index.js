window.onload = function () {
  console.log("giddyup");

var venueQuery = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.7127837,-74.0059413&radius=32000&type=night_club&key=VENUE_KEY/jsonp?callback=?'

var KEY = 'AIzaSyDg4L8NzeMP2Xc6t2DshSTbfKp9KA4wyIw';


   var submitO = document.getElementById('submit-buttonO')
   submitO.addEventListener("click", function (e) {
     e.preventDefault()

     var newInput = document.createElement('input')
     document.body.appendChild(newInput)
     newInput.setAttribute('id','newInput')
     newInput.type = "text";
     newInput.placeholder = "Enter: City, ST"
     var newButton = document.createElement('button')
     document.body.appendChild(newButton)
     newButton.setAttribute('id','newButton')
     newButton.innerText = "Submit";
     console.log('clicked');
     var stageImg = document.createElement('img')
     document.body.appendChild(stageImg)
     stageImg.setAttribute('id','stageImg')
     stageImg.src = "https://s31.postimg.org/4oe14r3yj/stage_foto_PNG.png"

     var apiInputO = document.getElementById('origin')
     var usersOrigin = apiInputO.value
     console.log(usersOrigin);

       var queryO = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + usersOrigin + '&' + KEY
       $.ajax({
       url: queryO
       }).done(function(responseO) {
       console.log(responseO)
       var originCityPhoto = document.createElement('iframe')
       document.body.appendChild(originCityPhoto)
       originCityPhoto.setAttribute('id','originCityPhoto')
       originCityPhoto.src = "http://www.panoramio.com/wapi/template/slideshow.html?tag=" + usersOrigin.split(",")[0] + ';width=450&amp;height=400&amp;delay=4.0'
       console.log(usersOrigin.split(",")[0])
       originCityPhoto.height = '300'
       originCityPhoto.allowtransparency= "true"




         newButton.addEventListener("click", function (e) {
         e.preventDefault()
         var apiInputD = document.getElementById('newInput')
         var usersDestination = apiInputD.value
         console.log(usersDestination)
         var queryD = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + usersDestination + '&' + KEY
         console.log(usersDestination)
         $.ajax({
         url: queryD
         }).done(function(responseD) {
         console.log("destination city lat/long", responseD)
         var destinationCityPhoto = document.createElement('iframe')
         document.body.appendChild(destinationCityPhoto)
         destinationCityPhoto.setAttribute('id','destinationCityPhoto')
         destinationCityPhoto.src = "http://www.panoramio.com/wapi/template/slideshow.html?tag=" + usersDestination.split(",")[0] + ';width=450&amp;height=400&amp;delay=4.0'
         console.log("name of city", usersDestination.split(",")[0])
         destinationCityPhoto.height = '300'
         destinationCityPhoto.allowtransparency= "true"


         var directionsButton = document.createElement('button')
         document.body.appendChild(directionsButton)
         directionsButton.setAttribute('id','directionsButton')
         directionsButton.innerText = "Directions \n & \n Club Info";



         var whatToDo = document.getElementById('whatToDo')
         whatToDo.style.display = 'none';

var origLat = (responseO.results[0].geometry.location.lat);
console.log("origin lat", responseO.results[0].geometry.location.lat);
var origLng = (responseO.results[0].geometry.location.lng);
console.log("origin long", responseO.results[0].geometry.location.lng);

var destinLat = (responseD.results[0].geometry.location.lat);
console.log("destination lat", responseD.results[0].geometry.location.lat);
var destinLng = (responseD.results[0].geometry.location.lng);
console.log("destination long", responseD.results[0].geometry.location.lng);

directionsButton.addEventListener("click", function (e){
  e.preventDefault();

  var arrowA = document.createElement('a')
  document.body.appendChild(arrowA)
  arrowA.setAttribute('id','arrowA')
  arrowA.href = "#toHere"



 var originBreak = usersOrigin.split(",")
 var originDir = originBreak[0].split(" ").join("") + '+' + originBreak[1]
 var destinationBreak = usersDestination.split(",")
 var destinationDir = destinationBreak[0].split(" ").join("") + '+' + destinationBreak[1]

  var directions = document.createElement('iframe')
  document.body.appendChild(directions)
  directions.setAttribute('id', 'directions')
  directions.src = "https://www.google.com/maps/embed/v1/directions?key=" + KEY + "&origin=" + originDir + '&destination=' + destinationDir + '&avoid=tolls|highways'

var VENUE_KEY = 'rccbkknL484KKGPM';
var venueQuery = "https://api.songkick.com/api/3.0/search/venues.json?query=" + usersDestination +"&apikey=rccbkknL484KKGPM&jsoncallback=?"
$.ajax({
url: venueQuery,
dataType: "jsonp"
// crossOrigin: true
  // jsonp:    "cb",     // <================= New bit is here
  // data:     {
  //     format: "json", // <=== "json" not "jsonp" according to the docs, but I think the "cb" argument overrides it anyway
  // }

// async: false,
// jsonpCallback: 'jsonCallback',
// contentType: "application/json",
// dataType: 'jsonp'
  }).done(function(venueResponse) {

   var handleBarArray = venueResponse;
   console.log("handleBarArray", handleBarArray);

   var venueInfo = handleBarArray.resultsPage.results.venue;
   console.log("venueInfo", venueInfo);

   var newSearch = document.createElement('a')
   document.body.appendChild(newSearch)
   newSearch.setAttribute('id', 'newSearch')
   newSearch.href = "/"
   newSearch.innerText = "New Search"


   var source = document.getElementById('venue-template').innerHTML;
   var template = Handlebars.compile(source);
   var html = template(venueInfo);
   var venueContainer = document.getElementById('venue-container');
   venueContainer.innerHTML = html;






 })



})

})

})
})
})
}
