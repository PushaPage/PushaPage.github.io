	function initMap ()
	  		{
		  		var element = document.getElementById('map'),
		  			markerImage = 'img/marker_map.png',
		  		 	options	= {
		  			zoom: 8,
		  			center: {lat: 46.2200, lng: 32.2959},
		  		};
		  		var myMap = new google.maps.Map(element, options);
		  		var marker = new google.maps.Marker({
		  			position: {lat: 46.2200, lng: 32.2759},
		  			map: myMap,
		  			icon: markerImage,
		  			animation: google.maps.Animation.BOUNCE
		  		});
	  		};