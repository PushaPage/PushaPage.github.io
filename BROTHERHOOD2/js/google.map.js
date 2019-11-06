	function initMap()
	  	{
	  		var element = document.getElementById('map'),
	  			markerImage = 'img/marker-map.png',
	  			options	= {
	  			zoom: 6,	  		
	  			center: {lat:  49.6292, lng: 31.1562},
	  			mapTypeControl: false,
	  			styles:
	  			[
				  {
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#1e1e1e"
				      },
				      {
				        "visibility": "on"
				      }
				    ]
				  },
				  {
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "color": "#1e1e1e"
				      },
				      {
				        "visibility": "on"
				      }
				    ]
				  },
				  {
				    "elementType": "geometry.stroke",
				    "stylers": [
				      {
				        "color": "#1e1e1e"
				      },
				      {
				        "visibility": "simplified"
				      }
				    ]
				  },
				  {
				    "elementType": "labels.icon",
				    "stylers": [
				      {
				        "visibility": "on"
				      }
				    ]
				  },
				  {
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#757575"
				      }
				    ]
				  },
				  {
				    "elementType": "labels.text.stroke",
				    "stylers": [
				      {
				        "color": "#212121"
				      },
				      {
				        "weight": 4.5
				      }
				    ]
				  },
				  {
				    "featureType": "administrative",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#757575"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative",
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "visibility": "simplified"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative",
				    "elementType": "geometry.stroke",
				    "stylers": [
				      {
				        "visibility": "on"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative.country",
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "visibility": "simplified"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative.country",
				    "elementType": "geometry.stroke",
				    "stylers": [
				      {
				        "visibility": "on"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative.country",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#9e9e9e"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative.land_parcel",
				    "stylers": [
				      {
				        "visibility": "off"
				      }
				    ]
				  },
				  {
				    "featureType": "administrative.locality",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#bdbdbd"
				      }
				    ]
				  },
				  {
				    "featureType": "poi",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#757575"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.park",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#181818"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.park",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#616161"
				      }
				    ]
				  },
				  {
				    "featureType": "poi.park",
				    "elementType": "labels.text.stroke",
				    "stylers": [
				      {
				        "color": "#1b1b1b"
				      }
				    ]
				  },
				  {
				    "featureType": "road",
				    "elementType": "geometry.fill",
				    "stylers": [
				      {
				        "color": "#2c2c2c"
				      }
				    ]
				  },
				  {
				    "featureType": "road",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#8a8a8a"
				      }
				    ]
				  },
				  {
				    "featureType": "road.arterial",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#373737"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#3c3c3c"
				      }
				    ]
				  },
				  {
				    "featureType": "road.highway.controlled_access",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#4e4e4e"
				      }
				    ]
				  },
				  {
				    "featureType": "road.local",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#616161"
				      }
				    ]
				  },
				  {
				    "featureType": "transit",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#757575"
				      }
				    ]
				  },
				  {
				    "featureType": "water",
				    "elementType": "geometry",
				    "stylers": [
				      {
				        "color": "#000000"
				      }
				    ]
				  },
				  {
				    "featureType": "water",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      {
				        "color": "#3d3d3d"
				      }
				    ]
				  }
				]
	  		};
	  		// Киев
	  		var myMap = new google.maps.Map(element, options);
	  		var marker = new google.maps.Marker({
	  			position: {lat:  50.7392, lng: 30.502},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Черкасы	  		
	  		var marker = new google.maps.Marker({
	  			position: {lat:  49.6892, lng: 32.062},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Чегнигов
	  		var marker = new google.maps.Marker({
	  			position: {lat:  51.7192, lng: 31.282},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Житомир
	  		var marker = new google.maps.Marker({
	  			position: {lat:  50.4682, lng: 28.650},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Сумы
	  		var marker = new google.maps.Marker({
	  			position: {lat:  51.1200, lng: 34.772},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Харьков
	  		var marker = new google.maps.Marker({
	  			position: {lat:  50.2550, lng: 36.2200},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Полтава
	  		var marker = new google.maps.Marker({
	  			position: {lat:  49.8550, lng: 34.5500},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Кременчуг
	  		var marker = new google.maps.Marker({
	  			position: {lat:  49.3050, lng: 33.4300},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Кировоград
	  		var marker = new google.maps.Marker({
	  			position: {lat:  48.7350, lng: 32.2662},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Кривой Рог
	  		var marker = new google.maps.Marker({
	  			position: {lat:  48.0580, lng: 33.3900},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Днепропетровск
	  		var marker = new google.maps.Marker({
	  			position: {lat:  48.7150, lng: 35.0500},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Запорожье
	  		var marker = new google.maps.Marker({
	  			position: {lat:  48.1350, lng: 35.1300},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Донецк
	  		var marker = new google.maps.Marker({
	  			position: {lat:  48.2850, lng: 37.7900},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Луганск
	  		var marker = new google.maps.Marker({
	  			position: {lat:  48.8350, lng: 39.3000},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Мариуполь
	  		var marker = new google.maps.Marker({
	  			position: {lat:  47.3900, lng: 37.5400},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Николаев
	  		var marker = new google.maps.Marker({
	  			position: {lat:  47.2500, lng: 32.0100},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Херсон
	  		var marker = new google.maps.Marker({
	  			position: {lat:  46.8600, lng: 32.6550},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Одесса
	  		var marker = new google.maps.Marker({
	  			position: {lat:  46.7500, lng: 30.7100},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Винница
	  		var marker = new google.maps.Marker({
	  			position: {lat:  49.4282, lng: 28.5050},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Черновцы
	  		var marker = new google.maps.Marker({
	  			position: {lat:  48.5282, lng: 25.9200},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  		// Львов
	  		var marker = new google.maps.Marker({
	  			position: {lat:  50.1060, lng: 24.0160},
	  			map: myMap,
	  			icon: markerImage,
	  			animation: google.maps.Animation.DROP
	  		});
	  	};