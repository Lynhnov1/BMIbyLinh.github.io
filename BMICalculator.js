let checkUnits = document.getElementById('units');
// checkUnits.addEventListener('change', changeUnits);
checkUnits.onchange = function changeUnits(){
    var formGroup = document.getElementsByClassName('form-group')
    var height= document.getElementById('height');
    var weight= document.getElementById('weight');
    if(document.getElementById('height').value!=""||document.getElementById('weight').value!=""){
        if(checkUnits.value==="metric"){
            height =height.value*(2.54);
            weight = weight.value*(0.45359237);   
            formGroup[0].getElementsByClassName('form-label')[0].innerHTML = "Height in CM:";
            formGroup[1].getElementsByClassName('form-label')[0].innerHTML = "Weight in KG:";
        }
        else{
            height = height.value/(2.54);
            weight = weight.value/(0.45359237); 
            formGroup[0].getElementsByClassName('form-label')[0].innerHTML = "Height in IN:"
            formGroup[1].getElementsByClassName('form-label')[0].innerHTML = "Weight in LB:"
        }
        
        document.getElementById('height').value= height.toFixed(2);
        document.getElementById('weight').value=weight.toFixed(2);
    }
    
}
let btn = document.querySelector('.but-result');
btn.onclick = function showResult(){
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var kq=0;
    if(checkUnits.value==="imperial"){
       height=  document.getElementById('height').value*(2.54);
       height = height /100;

       weight = document.getElementById('weight').value*(0.45359237);
    }
    else{
        height = height /100;
    }  
    let result = document.getElementById('result');
     kq = weight / (height*height);
    result.textContent=kq.toFixed(2);
}

