$(document).ready(function(){
    //This deals with the high contrast button
    var highcontrastbool = false;       //Intialised as false 
    $("#highContrast").click(
        function(){
            if (highcontrastbool != true){
            $(".article").css({"color":"#ffff00","background-color":"#000"});
            $(".text").css({"color":"#ffff00"});
            $("#highContrast").html("Turn off High Contrast");
            $("body").css({"background-color":"#000"});
            $(".logo").css({"color":"#ffff00"});
            $(".container").css({"background-color":"#000"});
            $(".btn-group").css({"background-color":"#000"});
            $(".btn-group a").css({"color":"#ffff00"});
            $(".btn-group a:hover").css({"color":"#fff"});
            $(".btn-group a.current").css({"color":"#fff"});
            highcontrastbool = true;
            }
            else{
            $(".article").css({"color":"#000","background-color":"#fff"});
            $(".text").css({"color":"#000"});
            $("#highContrast").html("Turn on High Contrast");
            $("body").css({"background-color":"#fff"});
            $(".logo").css({"color":"#000"});
            $(".container").css({"background-color":"#fff"});
            $(".btn-group").css({"background-color":"#fff"})
            $(".btn-group a").css({"color":"#000"});
            $(".btn-group a:hover").css({"color":"#fff"});
            $(".btn-group a.current").css({"color":"#fff"});
            highcontrastbool = false;
            }
        }
    )
    var fontchangeincrease = false;
    $("#fontchange").click(
        function(){
            if (fontchangeincrease != true){
                $(".article").css({"font-size":"200%"});
                $(".text").css({"font-size":"200%","width":"100%"});
                $(".title").css({"font-size":"200%"})
                $(".author").css({"font-size":"200%"})
                $("#fontchange").html("Decrease font size");
                fontchangeincrease = true;
            }
            else{
                $(".article").css({"font-size":"100%"});
                $(".text").css({"font-size":"100%","width":"60%"});
                $("#fontchange").html("Increase font size");
                fontchangeincrease = false;
            }
        }
    )
function moment(){
    var month =['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    var day = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var today = new Date();
    var occasionYYYY = today.getFullYear();
    var occasionMM = month[today.getMonth()];
    var ocassionDay = day[today.getDay()];
    var ocassionDD = today.getDate();
    document.getElementById('date').innerHTML = ocassionDay + " " + ocassionDD + " " + occasionMM + " " + occasionYYYY;
    console.log(ocassionDay + " " + ocassionDD + " " + occasionMM + " " + occasionYYYY);
}

moment();
    
    
})
/* Date and time*/
 