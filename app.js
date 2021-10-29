window.onload = function() 
{
    var btn = document.getElementsByTagName("button")[0];

    btn.addEventListener("click",function()
    {
        var httpRequest = new XMLHttpRequest(); 

        var url = "superheroes.php"; 
        httpRequest.onreadystatechange = doSomething; 
        httpRequest.open('GET', url); 
        httpRequest.send();

        function doSomething() 
        { 
            if (httpRequest.readyState === XMLHttpRequest.DONE) 
            { 
                if (httpRequest.status === 200) 
                { 
                    var response = httpRequest.responseText; 
                    alert(response); 
                } 
                else 
                { 
                    alert('There was a problem with the request.'); 
                } 
            } 
        }
    }
    );

    
};