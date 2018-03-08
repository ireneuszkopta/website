//form validation 


	// var validModule = (function(){

	// 	function values(){
	// 		var values = {
	// 		name : $("#name"),
	// 		email : $("#email"),
	// 		msg : $("#message")
	// 		}; 
	// 		return values;
	// 	}


	// 	function compare(values){
	// 		var paterns = [/[A-Z]/igm,/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,/[A-Z]/igm]
	// 		var results = [];
	// 		for(var index in values) { 
 //   				 var value = values[index]; 
 //   				for(var i = 0; i < paterns.length; i++){
 //   				  results.push( paterns[i].test(value))
 //   				}
	// 		}return results;
	// 	}


	// 	function resetValues(value){
	// 		for(var index in values){ 

	// 		}
	// 	}

	// 	function tests(values,compare){							
	// 		for(var index in values){ 
	// 			if(values[index].val() == ""){
	// 				values[index].css("background", "red");
	// 				values[index].val("empty field!");
	// 			}
	// 		}
	// 	}



	// 	$("form").on("submit",function(e){
	// 		e.preventDefault();
	// 		tests(value());

	// 	})
		
	// 	})()

var validModule = (function(){
// ref to fields;
var errormsg = $('#errormsg');
	errormsg.hide();



//error function 
function errorChk(fieldVal, field, test){
	if(fieldVal != "" && test){
		field.css("background", "grey");
		return true;
	}else{
		field.css("background", "red");
		return false;
	}
}

//pattern check
function namePatern(errorChk){
	var field = $('#name');
	var patern = /^[a-zA-Z ]+$/;
	var fieldVal = field.val();
	var test = patern.test(fieldVal);
	return errorChk(fieldVal, field ,test);
}

function mailPatern(errorChk){
	var field = $('#email');
	var fieldVal = field.val();
	var patern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
	var test = patern.test(fieldVal);
	return errorChk(fieldVal, field ,test);
}

function msgPatern(errorChk){
	var field = $("textarea[name='message']");
	var fieldVal = field.val();
	var patern = /^[a-zA-Z ]+$/;
	var test = patern.test(fieldVal);
	return errorChk(fieldVal, field ,test);
}


	
//validateAll
function check(){
	$('.success').css("visibility","hidden");
       var chkN = namePatern(errorChk);
	   var chkM = mailPatern(errorChk);
	   var chkMsg = msgPatern(errorChk);
	   if(chkN && chkM && chkMsg){
	   	errormsg.hide();
	   	return true;
	   }else {
	   		errormsg.show();
	   		return false;
		}
	};

$("form").on("submit",function(e){
		$this = $(this);
		e.preventDefault();
		if(check()){
			$('.success').css("visibility","hidden");
		 	$.ajax({
		 		type : "POST",
		 		url : "form.php",
		 		data :{
		 			"name" : $("#name").val(),
		 			"email": $("#email").val(),
		 			"message": $("#message").val()
		 		}
		 	}).done(function(){
	  				$('.success').css("visibility","visible");
		 				$this.find('textarea').val('');
						$this.find('input').not('#button').val('');

		 			});
		 }
})


})()



