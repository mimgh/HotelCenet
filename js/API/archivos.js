// archivos

function subirFoto(foto) {
	var options = new FileUploadOptions();
	options.fileKey="archivo";
	options.fileName="Ivan.jpg";
	
	var ft = new FileTransfer();
	ft.upload(foto, "http://www.igitsoft.com/pgtest.php", 
	function(r){
		navigator.notification.confirm("Los datos han sido registrados satisfactoriamente", 
		function(btn) {
			switch(btn) {
				case 1:
				navigator.notification.vibrate(5000);
				break;
				case 2:
				navigator.notification.beep(3);
			}
			window.location.href="#main";
		}, "Registro", "Vibrar,Sonar,Cancelar");
	}, 
	function(err){
		navigator.notification.alert("Error al subir el archivo: "+errr.code, null, "Subir Registro", "Aceptar");
	}, 
	options);
}