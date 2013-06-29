// Dispositivo

function infoDisp() {
	var arr = [];
	arr['nombre'] = device.name;
	arr['phonegap'] = device.cordova;
	arr['plataforma'] = device.platform;
	arr['id'] = device.uuid;
	arr['version'] = device.version;
	arr['modelo'] = device.model;
	
	return arr;
}