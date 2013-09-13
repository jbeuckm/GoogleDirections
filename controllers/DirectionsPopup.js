

var modeIcons = {
	WALKING: "/interface/directions/walk.png",
	TRANSIT: "/interface/directions/bus.png",
	BICYCLING: "/interface/directions/bike.png",
	DRIVING: "/interface/directions/car.png",
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
