window.onload = function() 
{
    var btn = document.getElementsByTagName("button")[0];

    btn.addEventListener("click",function(element)
    {
        element.preventDefault();

        httpRequest = new XMLHttpRequest();

        var name = document.querySelector('input').value;
        var url = "superheroes.php";

        httpRequest.onreadystatechange = processName;
        httpRequest.open('POST', url);
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpRequest.send('name=' + encodeURIComponent(name));

        function processName() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
              if (httpRequest.status === 200) {
                var response = httpRequest.responseText;
                var result = document.querySelector('#result');
                result.innerHTML = response;
              } else {
                alert('There was a problem with the request.');
              }
            }
          }
    }
    );

    
};