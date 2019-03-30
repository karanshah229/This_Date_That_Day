var date = new Date();
var currentYear = date.getFullYear();

var lower_lim = currentYear - 200;
var upper_lim = currentYear + 200;

document.getElementById("day-select").value = date.getDate();
document.getElementById("month-select").value = date.getMonth();
document.getElementById("day-day-select").value = date.getDay();

function select_click(this_t){
    this_t.style.borderBottom = "3px solid #82204A";
}

window.addEventListener("click", function(e){
    if(e.target.id != "day-select" && e.target.id != "month-select" && e.target.id != "day-day-select")
        for(var i = 0; i < document.getElementsByTagName("select").length; i++) document.getElementsByTagName("select")[i].style.borderBottom = "3px solid white";
});

var selected_day;
var selected_month;
function result(){
    lower_lim = currentYear - 200;
    upper_lim = currentYear + 200;
    selected_day = document.getElementById("day-select").value;
    selected_month = document.getElementById("month-select").value;
    if( ( (selected_month === "3" || selected_month === "5" || selected_month === "8" || selected_month === "10") && selected_day > "30") || (selected_month === "1" && selected_day > "29")){
        document.getElementById("error").style.display = "block";
        document.getElementById("result-container").style.display = "none";
    }
    else result_core(currentYear, currentYear+200);
}
var tempDateObj;
function result_core(lower_lim, upper_lim){
    if(upper_lim === currentYear-200) {
        for(var i = Number(document.getElementById("result").innerHTML)-1; i >= upper_lim; i--){
            tempYear = i;
            tempDateObj = new Date(tempYear, document.getElementById("month-select").value, document.getElementById("day-select").value);
            futureDay = tempDateObj.getDay();
            document.getElementById("result-container").style.display = "block";
            document.getElementById("error").style.display = "none";
            if(futureDay == document.getElementById("day-day-select").value){
                document.getElementById("result").innerHTML = tempYear;
                lower_lim = tempYear;
                break;
            }
        }
    }
    else {
        for(var j = lower_lim; j <= upper_lim; j++){
            tempYear = j;
            tempDateObj = new Date(tempYear, document.getElementById("month-select").value, document.getElementById("day-select").value);
            futureDay = tempDateObj.getDay();
            document.getElementById("result-container").style.display = "block";
            document.getElementById("error").style.display = "none";
            if(futureDay == document.getElementById("day-day-select").value){
                document.getElementById("result").innerHTML = tempYear;
                break;
            }
        }
    }
}

result();

function prev_year(){ result_core(currentYear-1, currentYear-200); }

function next_year(){ result_core(tempDateObj.getFullYear()+1, currentYear+200); }