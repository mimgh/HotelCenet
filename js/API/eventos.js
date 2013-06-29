// Eventos
$(document).ready(function(e) {
	document.addEventListener("deviceready", function(){
		if(!isLogin())
			window.location.href = '#login';
		$('#regSend').tap(function() {
			if($('#regNom').val()!='' && $('#regTel').val()!='' && $('#regMail').val()!='' && $('#regFoto').attr('rel')!=undefined) {
				var nom = $('#regNom').val();
				var tel = $('#regTel').val();
				var mail = $('#regMail').val();
				var foto = $('#regFoto').attr('rel');
				enviarDatos(nom, tel, mail, foto);
//				navigator.notification.alert(nom + '\n' + tel + '\n' + mail, null, "Hotel", "Aceptar");
			}
			else {
				navigator.notification.alert('Todos los campos son requeridos', null, "Hotel", "Ok");
			}
		});
		$('#regFoto').tap(function() {
			tomarFoto();
		});
		//----------------- Reservaciones -------------------//
		var nr1 = $('#reserve');
		nr1.find('ul[data-role=listview] li').tap(function() {
			if($(this).index()!=0) {
				nr1.attr('th', $(this).index());
			}
		});
		$('#sh').tap(function() {
			if(nr1.attr('th')!=undefined && nr1.attr('th')!='') {
				window.location.href = '#reserve2';
			}
		});
		$('#rh').tap(function() {
			if(isConnected())
				// Sincronizar al servidor
				placeHolderPorMientras;
			else
				guardarReserva(nr1.attr('th'), $('#rHabitaciones').val(), $('#rDias').val(), $('#rPersonas').val());
		});
	}, false);
});

function isLogin() {
	if(window.localStorage.getItem('id') != undefined)
		return true;
	else
		return false;
}

function isConnected() {
	return false;
}