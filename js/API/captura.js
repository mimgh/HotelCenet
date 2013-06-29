// captura

function tomarFoto() {
	navigator.device.capture.captureImage(function(capObjects){
		var cant = capObjects.length;
		for (i=0; i<cant; i++)
			foto = capObjects[i].fullPath;
		$('#regFoto').attr('rel', foto);
		$('#mFoto').html('<img src="'+foto+'" width="100%" />');
	}, function(err){
		navigator.notification.alert("Error: "+err.code, null, "Captura", "Aceptar");
	}, {limit:1});
}