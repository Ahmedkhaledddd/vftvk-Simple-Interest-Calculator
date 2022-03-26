function compute()
//calculate the interest by getting inputs from the user
{    var principal = document.getElementById("principal").value;
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var date = new Date();
    var year = parseInt(date.getFullYear()) + parseInt(years);
    var show_result = document.getElementById("result");
    show_result.innerHTML = "If you deposit " + "<span class='highlight'>" + principal + "</span>."  + ", <br> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + ", <br> in the year " + "<span class='highlight'>" + year + "</span>";
}
// i searched for the highlight to highlight the answer and i used it.
function updateRate(){
    //update value of the slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        

