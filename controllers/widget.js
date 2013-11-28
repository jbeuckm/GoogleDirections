
var loadingScreen = Alloy.createWidget("directionsLinks", "loadingScreen", { message: "Getting directions..." }).getView();
var directionsView = Alloy.createWidget("directionsLinks", "DirectionsPopup").getView();


var collection = Widget.Collections.GoogleDirection;


var directionsParams;
exports.setEndpoints = function(pts) {
	directionsParams = pts;
};


function getDirections() {
	loadingScreen.open();
	collection.on('error', directionsLoadError);
	collection.on('reset', openDirectionsPopup);
	collection.fetch(directionsParams);
}

function openDirectionsPopup() {
	collection.off('error', directionsLoadError);
	collection.off('reset', openDirectionsPopup);
	directionsView.open();
	loadingScreen.close();
}

function directionsLoadError(e) {
	collection.off('error', directionsLoadError);
	alert("There was an error loading "+directionsParams.mode+" directions");
	loadingScreen.close();	
};


function clickCarDirections() {	
	directionsParams.mode = "driving";
	getDirections();
}
function clickBusDirections() {	
	directionsParams.mode = "transit";
	getDirections();
}
function clickBikeDirections() {	
	directionsParams.mode = "bicycling";
	getDirections();
}
function clickWalkDirections() {	
	directionsParams.mode = "walking";
	getDirections();
}


