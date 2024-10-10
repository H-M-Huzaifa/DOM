//Celsius to Fahrenheit
function CtoF(){
    var userInput=parseFloat(document.getElementById("userinput").value);
    var result;
    if(isNaN(userInput)){
        document.getElementById("result").innerText="Enter Value"
    }else if(userInput!=null){
        // result=userInput * 9
        // result=result/5
        // result=result+32
        result=(userInput*9/5)+32
        document.getElementById("result").innerText=result+" F";

        if(result<=104 && result>=32){
            document.getElementById("result").setAttribute("class","moderate");
    
            }else if(result<32){
            document.getElementById("result").setAttribute("class","cool");            
            }else{
            document.getElementById("result").setAttribute("class","hot");

    }

    }
} 

//Fahreneit to Celsius
function FtoC(){
    var userInput=parseInt(document.getElementById("userinput").value);
    var result;
    
    if(isNaN(userInput)){
        document.getElementById("result").innerText="Enter Value"
    }else if(userInput!=null){
        // result= userInput -32
        // result=result*0.55555555555;
        result = (userInput-32)*5/9
        document.getElementById("result").innerText=result+" C";

        if(result<=40 && result>=0){
        document.getElementById("result").setAttribute("class","moderate");

        }else if(result<0){
        document.getElementById("result").setAttribute("class","cool");            
        }else{
        document.getElementById("result").setAttribute("class","hot");

        }


    }
} 

