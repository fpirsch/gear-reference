/* jshint browser: true */
Array.prototype.forEach.call(document.getElementsByTagName('h4'), function(h4) {
	if (!h4.id || !h4.hasChildNodes()) return;
	h4.insertAdjacentHTML('beforeEnd', '<a href="#' + h4.id + '">#</a>');
});
