// Servidor

function enviarDatos(nom, tel, email, foto) {
	$.ajax({
		type: "POST",
		url: "http://www.igitsoft.com/pgtest.php",
		data: "nom="+nom+"&tel="+tel+"&mai="+email
	}).done(function(msg) {
			if(msg==1) {
				subirFoto(foto, nom);
			}
			else {
				navigator.notification.alert("Error al Registrarse", null, "Registro", "Aceptar");
			}
			alert("Data Saved: "+msg);
	});
}