

var modeIcons = {
	WALKING: "/directionsLinks/walk.png",
	TRANSIT: "/directionsLinks/bus.png",
	BICYCLING: "/directionsLinks/bike.png",
	DRIVING: "/directionsLinks/car.png",
};

Alloy.Globals.tracker.trackScreen("directions");


var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, WPATH('directions_row.html'));
var html = file.read().text;


function transformDirection(d) {
	var obj = d.toJSON();

	return {
		distance: obj.distance,
		html_instructions: html.replace("@@@DIRECTIONS@@@", obj.html_instructions),
		icon: modeIcons[obj.travel_mode]
	};
}

function closePopup() {
	$.win.close();
}


Widget.Collections.GoogleDirection.trigger("reset");
