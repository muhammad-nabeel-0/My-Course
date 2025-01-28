// is ma hum javaScript ka form event ko check kara ga 
// form Events names =>{
    // keydown => keypress => keyup => focus() => blur() => input => change => select => submit => invild => ha form events ka name ha 
    // ab hum is ko test kara ga //
    // focus () => ma aghar hum kise par click karta ha to is par focus work karta ha  is ka hum function ka sate use kar sata ha 
    function focusFunction(element){
        element.style.background = "orange";
    }
    // onblueFunction is time use hota ha jab focus end hogta ha 
    // Example Code//
    function blurFunction(element){
        element.style.background = "";
       
    }
    // input event is time work karta ha jab hum input ma text write karta ha is time target ho gata ha 
    // Example code //
    function inputFunction(element){
        var x = element.value;
        document.getElementById("test").innerHTML = x;
    }

    // change event is time work karta ha jab hum input ma koye change karta ha 
    function changeFunction(element){
        var z = element.value;
        document.getElementById("test").innerHTML = z;
    }
    // slect event ==> 
    function selectFunction(){
       alert("select all text");
    }
    // submit event =>
        function submitForm(){
            alert("Your Form is Submit");

        }
        // invide event =>
            function invideForm(){
                alert("write correct deatils")
            }