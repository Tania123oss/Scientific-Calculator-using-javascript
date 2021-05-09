function sin()
{
    document.calculator.result.value = Math.sin(document.calculator.result.value);
}
function cos()
{
    document.calculator.result.value = Math.cos(document.calculator.result.value);
}
function tan()
{
    document.calculator.result.value = Math.tan(document.calculator.result.value);
}



function square()
{
    document.calculator.result.value= Math.pow(document.calculator.result.value,2);
}

function cubbed()
{
    document.calculator.result.value= Math.pow(document.calculator.result.value,3);
}

function sqrt2()
{
    document.calculator.result.value= Math.pow(document.calculator.result.value,1/2);
}
function sqrt3()
{
    document.calculator.result.value= Math.pow(document.calculator.result.value,1/3);
}

function number(value)
{
    document.calculator.result.value+= value;
}
function remv()
{
    document.calculator.result.value= " ";
}

function equal()
{
    document.calculator.result.value= eval(document.calculator.result.value);
}

function PI()
{
    document.calculator.result.value = Math.PI(document.calculator.result.value);

}

function BACKSPC()
{
    a = document.calculator.result.value;
    document.calculator.result.value = a.substr(0,a.length-1);

}