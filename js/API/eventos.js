// Eventos
$(document).ready(function(e) {
	if(!isLogin())
		window.location.href = '#login';
   $('#regSend').tap(function() {
		if($('#regNom').val()!='' && $('#regTel').val()!='' && $('#regMail').val()!='') {
			var nom = $('#regNom').val();
			var tel = $('#regTel').val();
			var mail = $('#regMail').val();
			alert(nom + '\n' + tel + '\n' + mail);
		}
		else {
			alert('Todos los campos son requeridos');
		}
	});
});

function isLogin() {
	return false;
}