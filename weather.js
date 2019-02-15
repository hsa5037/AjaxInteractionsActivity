
      var apiKey = '&appid=fa7d80c48643dfadde2cced1b1be6ca1';

      document.addEventListener('DOMContentLoaded', bindButtons);

      function bindButtons(){
        document.getElementById('zipcodeSubmit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var payload = {zipcode:null};
          payload.zipcode = document.getElementById('zipcode').value;
          req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=' + payload.zipcode + apiKey, true);
          req.addEventListener('load',function(){
            if (req.status >= 200 && req.status < 400){
              var response = JSON.parse(req.responseText);
              console.log(response);
              document.getElementById('temperature').textContent = Math.round(response.main.temp - 273) + " °С";
              document.getElementById('humidity').textContent = response.main.humidity;
            } 
            else {
              console.log("Error in network request: " + req.statusText);
            }
          });
          req.send(null);
          event.preventDefault();
        });



        document.getElementById('citystateSubmit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var payload = {citystate:null};
          payload.citystate = document.getElementById('citystate').value.trim();
          req.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + payload.citystate + apiKey, true);
          req.addEventListener('load',function(){
            if (req.status >= 200 && req.status < 400){
              var response = JSON.parse(req.responseText);
              console.log(response);
              document.getElementById('temperature').textContent = Math.round(response.main.temp - 273) + " °С";
              document.getElementById('humidity').textContent = response.main.humidity;
            } 
            else {
              console.log("Error in network request: " + req.statusText);
            }
          });
          req.send(null);
          event.preventDefault();
        })
      }