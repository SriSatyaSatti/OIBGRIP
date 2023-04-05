function t(){
    var deg =document.getElementById('b_deg').value;
    var e=document.getElementById('Type');
    var val=e.value;
    var res;
    if(val=='celsius'){
       res= (deg * 9/5) + 32;
    }
    if(val=='fahrenheit'){
     res=(deg - 32) * 5/9;
    }
    if(val=='kelvin'){
    res=deg - 273.15;
    }
    document.getElementById('result').innerHTML=
    `<u>${res} C</u>`;
}
