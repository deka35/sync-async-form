$(document).ready (function (){
	alert("Hola");
	
	$('input[type="submit"]').on("click", function(event){

	/*var firs_name = $('input[name="first_name"]').val();
	console.log(first_name);

	event.preventDefault();*/

	event.preventDefault();

	var First_name = $('#First_name').val();
	var last_name = $('#last_name').val();
	var gender = $('input[name="gender"]:checked').val();
	var interest = $('input[name="interest"]:checked');
	var interests = new Array ();
		
	  for(var i=0;i<interest.length; i++) {
	  	var temp_interest = interest[i];
	  	interests.push(temp_interest.value);
	  }

	  var payload = {
		'First_name':First_name , 
		'last_name': last_name ,
		'gender': gender,
		'interests': interests
			}
			$.post("find.hmtl",payload);
	});

});	

	/*var payload = {
		'First_name':First_name , 
		'last_name': last_name ,
		'gender': gender,
		'interest': interest.map(function(i ,element){
			debugger
			return $(element).val();

		})
	};

	debugger
	
	$.post('find.html', payload);
		   
	$.get('find.html', payload);

	/*var last_name = $('#last_name').val();
	
	$.post('find.html', {'last_name':last_name});
	$.get('find.html', {'last_name':last_name});

	var gender = $('input[name="gender"]:checked').val();
	
	$.post('find.html', {'gender':gender});
	$.get('find.html', {'gender':gender});

	var interest = $('input[name="interest"]:checked').val();
	
	$.post('find.html', {'interest':interest});
	$.get('find.html', {'interest':interest});
	
	





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
