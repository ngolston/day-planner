// Things I still need to do
// 1. moment
// 2. color change
// 3. style site

var x = document.createAttribute('past')
var att = document.createAttribute("class")

function time() {
    var time_now = moment().format('MMMM Do YYYY Ha')
    $('#currentDay').html(time_now)
}
time()

var submit = function(event) {
    var hours = event.target.getAttribute("data-hours")
    var text = document.getElementById('text' + hours).value
// console.log(text)
    save(hours,text)
}

var button = document.querySelectorAll(".save_btn")
var display = function() {
var ls = JSON.parse(localStorage.getItem("hour_text")) || []
for (let index = 0; index < ls.length; index++) {
    var textArea = document.getElementById('text' + ls[index].hour)
    textArea.value = ls[index].text
}
}
display()

for (let index = 0; index < button.length; index++) {
    button[index].addEventListener("click", submit)
}

function color_time(){
    var time_now = parseInt(moment().format('H')) // military time (13, 14....)
    var p = document.querySelectorAll('.blockTime')

    // if (time_now > p) {
    //     att.value = "past" 
        
    // }
    // console.log(p)
    // console.log($(".blockTime"))
   
     $(".blockTime").each(function (index, rowEl) {
         var jqueryRow = $(rowEl)
      var timeOnRow = jqueryRow.find("button").attr("data-hours") // this is standard time (1pm, 2pm ... )
     console.log(jqueryRow)
     console.log(timeOnRow)

if(time_now > timeOnRow){
    // console.log(time_now)
    // console.log("It already passed")
    jqueryRow.css("background-color", "red")
} else if(time_now == timeOnRow){
    jqueryRow.css("background-color", "blue")
} else if(time_now < timeOnRow){
    jqueryRow.css("background-color", "green") 
}

    //     if (time_now > "blockTime") {
            
})       
        
        
    //     // var blockHour = parseInt($(this).attr("id"))
    //     // if (time_now > blockHour){
    //     //     $(this).children(".input").addClass('past')
    //     // } else if (time_now === blockHour) {
    //     //     $(this).children(".input").removeClass('past')
    //     //     $(this).children(".input").addClass('present')
    //     // } else {
    //     //     $(this).children(".input").removeClass('past')
    //     //     $(this).children(".input").removeClass('present')
    //     //     $(this).children(".input").addClass('future')
    //     // }
    // })

}
color_time()

var save = function(hour,text){
    var data = JSON.parse(localStorage.getItem("hour_text")) || []
    data.push({hour,text})
    localStorage.setItem("hour_text", JSON.stringify(data)) 
}
