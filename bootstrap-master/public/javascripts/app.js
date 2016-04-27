//**
//TODO: any custom JavaScript you want to include here
var TriTechApp = {
	init: function() {
		console.log('let\'s do cool js stuff!');
	}
};

//this is a jQuery shortcut that waits until the DOM is done loading
//You can safely mess with markup or anything else you want to do.
$(function(){
	TriTechApp.init();
});