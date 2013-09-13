
var googleDirectionsUrl = "http://maps.googleapis.com/maps/api/directions/json";

module.exports.sync = function(method, model, options) {
            	
    switch (method) {
    	
        case "read":
        
        	var params = {
        		sensor: true,
        		origin: options.fromLat+','+options.fromLon,
        		destination: options.toLat+','+options.toLon,
        		mode: options.mode || "walking"
        	};

			var xhr = Ti.Network.createHTTPClient({
				onerror : function(e) {
					options.error(e);
				},
				onload : function(resp) {
					
					var data = JSON.parse(this.responseText);

					try {
						var steps = data.routes[0].legs[0].steps;
						var results = [];
						for (var i in steps) {
							
							var step = steps[i];
							
							results.push({
								duration: step.duration.text,
								distance: step.distance.text,
								html_instructions: step.html_instructions,
								travel_mode: step.travel_mode,
								start_location: step.start_location,
								end_location: step.end_location
							});
						}
	
						options.success(results);
					}
					catch (e) {
						options.error(e);
					}
				}
			});

		
			var request = googleDirectionsUrl;
			request += '?' + require('utilities').serialize(params);
		
			xhr.open('GET', request);
			xhr.send();
			
            break;
            
        case "create":
            options.error('create not implemented');
            break;
        case "update":
            options.error('update not implemented');
            break;
        case "delete":
            options.error('delete not implemented');
            break;
    }

};


module.exports.beforeModelCreate = function(config) {
    config = config || {};
    // Perform some pre-checks (as an example)
    return config;
};


module.exports.afterModelCreate = function(Model) {
    Model = Model || {};
    // Set up the persistent storage device, apply migrations or preload data (as examples)
};

