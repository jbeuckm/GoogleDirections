
var args = arguments[0] || {};

if (args.message) {
	$.activityIndicator.message = args.message;
}

$.activityIndicator.show();
