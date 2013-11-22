

var modeIcons = {
	WALKING: "walking.png",
	TRANSIT: "busing.png",
	BICYCLING: "bicycling.png",
	DRIVING: "driving.png",
};

Alloy.Globals.tracker.trackScreen("directions");


var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, WPATH('directions_row.html'));
var html = file.read().text;


function transformDirection(d) {
	var obj = d.toJSON();

	return {
		distance: obj.distance,
		html_instructions: html.replace("@@@DIRECTIONS@@@", obj.html_instructions),
		icon: WPATH(modeIcons[obj.travel_mode])
	};
}

function closePopup() {
	$.win.close();
}


Widget.Collections.GoogleDirection.trigger("reset");
