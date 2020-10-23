function value(id)
{
   id.innerHTML = "Tada I am here";
}
function first_value(form)
{
    form.value1.value = form.first.value;
}

function print(id)
{
    var v = id.value;
    
    if(v=='C')
    {
        document.getElementById('value2').value = "";
    }
    else{
    document.getElementById('value2').value += v;
    }
}
function operate(id)
{
    let x = document.getElementById('value2').value;
    let y = eval(x);
    document.getElementById('value2').value = y;
}