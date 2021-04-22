   
function eliminar(id) {	
	var r = confirm("Esta seguro que desea eliminar el registro seleccionado?");
	
	if(r == true) {
		console.log("OK");
		$.ajax({
 			url:"/delete/"+id,
		 	success: function(res) {
				console.log(res);
				location.href="/listar";
			},			
	  	});
	}
	
	return;
}




