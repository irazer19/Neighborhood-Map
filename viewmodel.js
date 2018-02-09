/* This is the model section */

// Storing all the query in an array.
var locations = [
              {title: 'Kalimpong', location: {lat: 27.059356, lng: 88.469453}},
              {title: 'Darjeeling', location: {lat: 27.036007, lng: 88.262675}},
              {title: 'Gangtok', location: {lat: 27.338936, lng: 88.606504}},
              {title: 'Kurseong', location: {lat: 26.882138, lng: 88.278851}},
              {title: 'Lachen', location: {lat: 27.716667, lng: 88.557739}},
              {title: 'Gurudongmar Lake', location: {lat: 28.025755, lng: 88.709693}},
              {title: 'Siliguri', location: {lat: 26.727101, lng: 88.395286}}
            ];


// Styles the map texture.
var styles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": 0.4
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#c5acac"
            },
            {
                "weight": 0.1
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#08bcb7"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fff5d6"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "color": "#6c5b7b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fc8895"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#258b88"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#73bfbf"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f55f77"
            },
            {
                "weight": 3
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "weight": 0.8
            },
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "weight": 1.3
            },
            {
                "color": "#FFFFFF"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f55f77"
            },
            {
                "weight": 1.1
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "weight": 0.7
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f55f77"
            },
            {
                "weight": 0.4
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f3b191"
            }
        ]
    }
];


/* This is the ViewModel section */

var map;
var markers = [];
var links = [];  // Stores all the links generated from Ajax call.

function appViewModel() {
    /* This object prototype gets binded by knockout.js.
       It tracks all the changes in the views and updates them automatically. */

    self = this;
    self.val = ko.observable("");
    self.error = ko.observable("");
    self.locations = ko.observableArray(locations);
    self.wikiLinks = ko.observableArray([]);
    // Function to hide/show the display menu of list items when the screen is below 590px.
    self.nav = function() {

        $("#menu").toggle();
    };

    // This function filters the list by matching the input value and displays only the relevant markers.
    self.filter = function() {

        var res = [];  // Storing all the filtered objects from the list

        for(i=0; i<locations.length; i++) {

            if((locations[i].title).toLowerCase().startsWith(self.val()) && self.val() !== '') {

                res.push(locations[i]);
            }
        }

        // Filtering the markers on the map dynamically
        for(i=0; i<markers.length; i++) {

            bool = true;  // Checks if the marker is present on the markers list.

            for(j=0; j<res.length; j++) {

                if ( markers[i].title == res[j].title ) {

                    bool = false;
                    break;
                }
            }

            if (bool === true && self.val() !== "") {

                markers[i].setMap(null);  // Setting the marker to null if its not present in the filtered array.
            }

            else {

                markers[i].setMap(map);
            }
        }

        // Displays the filtered list.
        if(res != []) {

            self.locations(res);
        }

        if(self.val() === "") {

            self.locations(locations);
        }
    };

    // Function to Open the Info window on the marker.
    self.openInfo = function() {

        var marker;

        for(i=0; i<markers.length; i++) {

            if(markers[i].title == this.title) {

                marker = markers[i];  // Getting the clicked marker.
                break;
            }
        }

        // To close all the previously opened.
        markers.forEach(function(mark) {

            if (mark.open === true) {

                mark.setAnimation(null);
                mark.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
                mark.infowindow.close();
            }
        });

        // Calling the info function to create and set marker Content.
        var largeInfowindow = info(marker);
        // Calling the populateInfoWindow function to open the Info window.
        populateInfoWindow(marker);
    };
}

var app = new appViewModel();  // Creating an instance of the prototype.
ko.applyBindings(app);  // Activating knockout.js


function initMap() {
    /* This function is the callback function which gets initialized through google api. */

  // Creating the google map on element with id=map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 27.059356, lng: 88.469453},
        zoom: 10,
        styles: styles
    });

    // Creating marker boundary
    var bounds = new google.maps.LatLngBounds();

    for (var i = 0; i < locations.length; i++) {

        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: google.maps.Animation.DROP,
        id: i,
        open: false,
        icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        });

        // Push the marker to our array of markers.
        markers.push(marker);
        makeListener(marker);

        // Handling the marker boundary.
        bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
}

function makeListener(marker) {

    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function() {
        // To close all the previously opened.
        markers.forEach(function(mark) {
            if (mark.open === true) {
                mark.setAnimation(null);
                mark.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
                mark.infowindow.close();
            }
        });
        // Calling the info function to create and set marker Content.
        var largeInfowindow = info(this);
        // Calling the populateInfoWindow function to open the Info window.
        populateInfoWindow(this);
    });
}


function info(marker) {
    /* Function to create and set the Infow window content of the marker. */

    var wikiurl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + '&format=json&callback=wikiCallback';

    // Making an Ajax call to get all the relevant wikipedia links.
    $.ajax({
            url: wikiurl,
            dataType: "jsonp",
            // Handling the Error response from the server.
            error: function(xhr, status, error) {

                app.error("There was an error" + xhr.status + "while retrieving data from Wikipedia");
            },
            success: function(response) {

                links = [];
                var article = response[1];

                for(i=0; i<article.length; i++) {

                    var url = 'http://en.wikipedia.org/wiki/' + article[i];  // Creating the url of the object.
                    links.push({ 'name': url });  // Storing all the url's to an array.
                }
            }
        }).done(function() {

            app.wikiLinks(links);  // Updating the wikiLinks(an Observable array).
        });

    // Setting the content of the marker's Info Window.
    marker.infowindow = new google.maps.InfoWindow({
        content: '<div class="text-danger"><strong>' + marker.title + '</strong></div>'
    });
}


function populateInfoWindow(marker) {
    /* This function opens up the Info window on the google maps. */

    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');  // Changes the marker color.
    marker.setAnimation(google.maps.Animation.BOUNCE);  // Adds animation to the marker.
    marker.infowindow.open(map, marker);  // Opens the marker.
    marker.open = true;  // True if the marker Info window is open.
}
