var array = [];
var xmlhttp;
if (window.XMLHttpRequest) { 
    xmlhttp = new XMLHttpRequest();
} else { 
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var text = xmlhttp.responseText;
        var arr = text.split(',');
        console.log(arr);
        array = arr.slice();
        console.log(array);
    }
}
xmlhttp.open("GET", "number.txt", true);
xmlhttp.send();


function getRadioValue(){
var radios = document.getElementsByName('r');

for(var i = 0; i < radios.length; i++){

    if(radios[i].checked){
        var value = radios[i].value;
        return value;
    }
}

}

function getArrayValue(value){
    var arr = [];
    switch(value){
        case "Positive":
            arr = array.filter(x => Number(x) >= 0);
            break;
        case "Negative":
            arr = array.filter(x => Number(x) < 0);
            break;
        default:
            arr = array.slice();

    }

    return arr;
}

document.getElementById('add').onclick = function (){
    var radio = getRadioValue();
    var arr = getArrayValue(radio);

    const sum = arr.reduce((acc, value) => acc + Number(value), 0);

    document.getElementById('result').innerText = "Sum is: " + sum;

}

document.getElementById('subtract').onclick = function (){
    var radio = getRadioValue();
    var arr = getArrayValue(radio);

    const subtract = arr.reduce((acc, value) => acc - Number(value), 0);

    document.getElementById('result').innerText = "Difference is: " + subtract;

}

document.getElementById('multiply').onclick = function (){
    var radio = getRadioValue();
    var arr = getArrayValue(radio);

    const multiply = arr.reduce((acc, value) => acc * Number(value), 0);

    document.getElementById('result').innerText = "Multiplication is: " + multiply;

}

document.getElementById('divide').onclick = function (){
    var radio = getRadioValue();
    var arr = getArrayValue(radio);

    const divide = arr.reduce((acc, value) => acc + Number(value), 0);

    document.getElementById('result').innerText = "Division is: " + divide;

}



