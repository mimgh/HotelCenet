// Almacenamiento

function registro(usuario) {
	if(window.localStorage.getItem('id') == undefined) {
		window.localStorage.setItem('usuario', usuario);
		window.localStorage.setItem('id', infoDisp()['id']);
	}
}

// Acceso a la base de datos
function accesoBD() {
	var bd = window.openDatabase('Hotel', '1.0', 'Hotel', 200000);
	return bd;
}

function guardarReserva(th, ha, di, pe) {
	accesoBD().transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th, ha, di, pe)');
			tx.executeSql('INSERT INTO reservas (th, ha, di, pe) VALUES ("'+th+'","'+ha+'","'+di+'","'+pe+'")');
		},	function(err) {
			alert("Error al guardar la reserva: "+err.code);
		}, function() {
			navigator.notification.alert("Esperando conexión con servidor...", null, "Guardado", "Aceptar");
	});
}

function guardarHistorial(th, ha, di, pe) {
	accesoBD().transaction(function(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS historial (id unique, th, ha, di, pe)');
			tx.executeSql('INSERT INTO historial (th, ha, di, pe) VALUES ("'+th+'","'+ha+'","'+di+'","'+pe+'")');
		},	function(err) {
			alert("Error processing SQL: "+err);
		}, function() {
			navigator.notification.alert("Hecho", null, "Guardado", "Aceptar");
	});

}

function leerReservas() {
	accesoBD.transaction(function(tx) {
		tx.executeSql('SELECT * FROM reservas', [], function(tx2, resultado) {
			var largo = resultado.rows.length;
			if(largo>0) {
				for(i=0; i<largo; i++) {
					subirReserva(resultado.rows.item(i).id, resultado.rows.item(i).th, resultado.rows.item(i).ha,  resultado.rows.item(i).di, resultado.rows.item(i).pe);					
				}
			}
		}, function(err) {
			alert('Error: '+err.code);
		});
	}, function(err) {
		navigator.notification.alert("Error", null, "Error", "Aceptar");
	}, function() {
		return 1;
	});
}

function borrarReserva(id) {
		accesoBD().transaction(function(tx) {
			tx.executeSql('DELETE FROM reservas WHERE id='+id);
		},	function(err) {
			alert("Error al cancelar la reserva: "+err.code);
		}, function() {
			return 1;
			//navigator.notification.alert("Reserva cancelada", null, "OK", "Aceptar");
	});
}
