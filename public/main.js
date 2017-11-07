$(document).ready (function (){
	alert("Hola");
	
	$('input[type="submit"]').on("click", function(event){

	/*var firs_name = $('input[name="first_name"]').val();
	console.log(first_name);

	event.preventDefault();*/

	event.preventDefault();

	var First_name = $('#First_name').val();
	
	$.post('find.html', {'First_name':First_name});
	$.get('find.html', {'First_name':First_name});

	/*$.ajax('find.html', {
		method: 'post',
		data: {
			'First_name': First_name
		}

	})
	$post()console.log('Hiciste click' , $('#First_name').val());
	console.log('Hiciste click' , $('#last_name').val());
	console.log('Hiciste click' , $('input[name="gender"]:checked').val());
	console.log('Hiciste click' , $('input[name="interest"]:checked').val());*/
});

});