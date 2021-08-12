window.onload = function(){
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "77135a851emsh445c08beea496f6p1e4242jsn1b2133e3da6f",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
        .then((data) => {
          // resolved
          console.log("resolved");
    
         
        })
        .catch((err) => {
          // rejected
          console.log("rejected");
          console.error(err);
          error = true;
        });
          
}        
        
       
    
    