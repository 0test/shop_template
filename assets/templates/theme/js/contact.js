$(document).ready(function() {

	var yourStartLatLng = new google.maps.LatLng(55.7539787,37.6201435);
	$('#map_canvas').gmap({'center': yourStartLatLng});
	$('#map_canvas').gmap('option', 'zoom', 14);
	$('#map_canvas').gmap('addMarker', { /*id:'m_1',*/ 'position': '55.7539787,37.6201435', 'bounds': false } ).click(function() {
                $('#map_canvas').gmap('openInfoWindow', { 'content': 'Мы тут' }, this);
        });
	
});