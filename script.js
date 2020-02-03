$(".currentDate").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
var str 

function addTimeLabels(){
str = [8,9,10,11,12,13,14,15,16,17];
for (let i = 0; i < str.length; i++) {
    $(".timeofDay"+str[i]+"").text(str[i]+":00")
}
}
addTimeLabels()


colorSwitch();


function colorSwitch(){
    for (let time = 0; time < str.length; time++) {
        if (moment().hour() <= str[time]){
            $("#"+ str[time]+"").css({"background-color": "#F0FFFF", "color": "#000000"})
        } else if (moment().hour() >= str[time]){
            $("#"+ str[time]+"").css({"background-color": "#4682B4", "color": "#F0F8FF"})
        }
    }
}