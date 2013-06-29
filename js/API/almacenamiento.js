// Almacenamiento

function registro(usuario) {
	if(window.localStorage.getItem('id') == undefined) {
		window.localStorage.setItem('usuario', usuario);
		window.localStorage.setItem('id', infoDisp()['id']);
	}
}