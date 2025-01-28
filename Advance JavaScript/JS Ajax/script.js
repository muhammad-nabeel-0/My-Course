 // ajax stand for A => Asynchronous J => JavaScript  A => And or last ma X => XML data ka format hota ha
    // AJAX is a technique for creating fast and dynamic web pages
    // AjAX ma readyState ka 5 steps hota
    /*
    0: request not initialized
    1: server connection establised
    2: request recived
    3: processing requset
    4: requset finished and response is ready
    */
   // Example Code //
   function loadData(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4  && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status == 404){
            document.getElementById("demo").innerHTML = "File not found.."

        }
    };
    xhttp.open('Get',"./readme.txt",true);
    xhttp.send();
   }