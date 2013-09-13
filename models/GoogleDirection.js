
exports.definition = {
	
	config: {
		"columns": {
			start_location: "TEXT",
			end_location: "TEXT",
			distance: "TEXT",
			duration: "TEXT",
			html_instructions: "TEXT",
			maneuver: "TEXT",
			travel_mode: "TEXT"
		},
		"defaults": {
		},
		"adapter": {
			type: "directionsLinks/googleDirectionsAdapter",
			collection_name: "GoogleDirections"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			idAttribute: 'id'
		}); // end extend
		
		return Model;
	},
	
	
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {

        }); // end extend
 
        return Collection;
    }		
};

