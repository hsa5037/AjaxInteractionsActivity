document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById('httpbinSubmit').addEventListener('click', function(event){
	  var req = new XMLHttpRequest();
	  var payload = {httpbin:null};
	  payload.httpbin = document.getElementById('httpbin').value;
	  req.open('POST', 'http://httpbin.org/post', true);
	  req.setRequestHeader('Content-Type', 'application/json');
	  req.addEventListener('load', function(){
	  	if (req.status >= 200 && req.status < 400){
	  		var response = JSON.parse(req.responseText);
	  		console.log(response);
	 		document.getElementById('dataSent').textContent = response.data;
	  	}
	  	else {
            console.log("Error in network request: " + req.statusText);
        }
	  });
	  req.send(JSON.stringify(payload));
	  event.preventDefault();
	})
	}