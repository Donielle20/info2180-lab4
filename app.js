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
        // Notice for the POST request we are setting the Content-Type
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // Notice for the POST request we are passing in our name parameter as part
        // of the send method. Also ensure you encode any special characters using
        // encodeURIComponent()
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

    //     var httpRequest = new XMLHttpRequest(); 

    //     var url = "superheroes.php"; 
    //     httpRequest.onreadystatechange = doSomething; 
    //     httpRequest.open('GET', url); 
    //     httpRequest.send();

    //     function doSomething() 
    //     { 
    //         if (httpRequest.readyState === XMLHttpRequest.DONE) 
    //         { 
    //             if (httpRequest.status === 200) 
    //             { 
    //                 var response = httpRequest.responseText; 
    //                 document.getElementById("result").innerHTML = response;
    //             } 
    //             else 
    //             { 
    //                 alert('There was a problem with the request.'); 
    //             } 
    //         } 
    //     }
    }
    );

    
};