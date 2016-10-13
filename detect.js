window.onload = function(){
  var lh = 'http://127.0.0.1:';
  var platforms;
  var none = true;

  if (tor == true)
  {
    none = false;
    $('#result').append('<td>Tor Browser: <span class="true">true</span></td>');
  }
  else {
    $('#result').append('<td>Tor Browser: <span class="false">false</span></td>');
  }

  var img = document.createElement('img');


    platforms = [{
        domain: "8888/static/themes/clean/logo.png",
        name: "Freenet"
      },
      {
        domain: "43110/1HeLLo4uzjaLetFx6NH3PMwFP3qbRbTf3D/img/logo.png",
        name: "ZeroNet"
      },
      {
        domain: "7657/themes/console/light/images/i2plogo.png",
        name: "I2P"
      }];


      platforms.forEach(function(network) {
           var img = document.createElement('img');
           img.src = lh + network.domain;
           img.onload = function() {
               console.log('they have ' + network.name);
               $('#result').append('<td>' + network.name + ': <span class="true">true</span></td>');
               none = false;
           };
           img.onerror = function() {
              $('#result').append('<td>' + network.name + ': <span class="false">false</span></td>');
               console.log('they dont have ' + network.name);
           };
       });
  }
