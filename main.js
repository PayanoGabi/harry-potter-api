var wizardme = document.querySelector('.wizardpoo');


document.getElementById("WingardiumLeviosa").addEventListener("click", function(event) {


  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
          // This will run when the request is successful
          data = JSON.parse(xhr.responseText);

          var  yooorrawizardary = (data[0].name);
        
          wizardme.innerHTML = yooorrawizardary;

      } else {
          // This will run when it's not
          console.log('MUGGLE!');
      };

}

xhr.open('GET', 'https://www.potterapi.com/v1/characters?key=$2a$10$0EcFOtPS83URbfanHNuJ0eiL4O2xdDxcQB1sR5k.CnC7nYF2oVDaK');
xhr.send();

}, false);

var xhr = new XMLHttpRequest();
var data = xhr.responseText;
