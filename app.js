const angularApp = angular.module('angularJSApp', []);

angularApp.controller('main', () => {
	let vm = this;

	vm.hello = "Hello";
});