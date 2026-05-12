
function display(value)
{
    document.getElementById("input").value += value;
}

function calculate()
{
    let input = document.getElementById("input").value;

    let result = eval(input);

    document.getElementById("input").value = result;
}

function clearDisplay()
{
    document.getElementById("input").value = "";
}