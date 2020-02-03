$(".currentDate").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var str 

function colorSwitch(){
    str = [8,9,10,11,12,13,14,15,16,17];
    for (let time = 0; time < str.length; time++) {
        if (moment().hour() <= str[time]){
            $("#"+ str[time]+"").css({"background-color": "#F0FFFF", "color": "#000000"})
        } else if (moment().hour() >= str[time]){
            $("#"+ str[time]+"").css({"background-color": "#4682B4", "color": "#F0F8FF"})
        }
    }
}
colorSwitch();

$(".btn").on("click", saveInput)

function saveInput(){
    var input = $("#8").val()
    localStorage.setItem("Input8", input)

    var input = $("#9").val()
    localStorage.setItem("Input9", input)

    var input = $("#10").val()
    localStorage.setItem("Input10", input)

    var input = $("#11").val()
    localStorage.setItem("Input11", input)

    var input = $("#12").val()
    localStorage.setItem("Input12", input)

    var input = $("#13").val()
    localStorage.setItem("Input13", input)

    var input = $("#14").val()
    localStorage.setItem("Input14", input)

    var input = $("#15").val()
    localStorage.setItem("Input15", input)

    var input = $("#16").val()
    localStorage.setItem("Input16", input)

    var input = $("#17").val()
    localStorage.setItem("Input17", input)
}

function setInput(){
    $("#8").val(localStorage.getItem("Input8"))
    $("#9").val(localStorage.getItem("Input9"))
    $("#10").val(localStorage.getItem("Input10"))
    $("#11").val(localStorage.getItem("Input11"))
    $("#12").val(localStorage.getItem("Input12"))
    $("#13").val(localStorage.getItem("Input13"))
    $("#14").val(localStorage.getItem("Input14"))
    $("#15").val(localStorage.getItem("Input15"))
    $("#16").val(localStorage.getItem("Input16"))
    $("#17").val(localStorage.getItem("Input17"))
}
setInput()