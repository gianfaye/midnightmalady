var hiddenContent = $("<div id='logo'></div><p>Eh wala pang content.</p>");
var midnight = true;

$(document).ready(function() {
    $("#main").hide();
    $("#teaser").hide();
    // Update clock every second
    setInterval( function() {
        //Get current hour, minute, second
        var seconds = new Date().getSeconds();
        var mins = new Date().getMinutes();
        var hours = new Date().getHours();
        //Check if midnight
        if(hours==0){
            $("#main").show();
            $("#main").append(hiddenContent);
            $("#clock-container").css("margin-top","-100%");
            $("#logo-container").css("margin-top","-10%");
            $("#teaser").hide();
            if(midnight){
                var logo = $( "#logo-container" ).html();
                $( "#logo" ).append(logo);
                midnight = false;
            }
        }
        else if(hours==23&&mins==59){
            midnight = true;
        }
        else{
            midnight = false;
            $("#main").html("");
            $("#main").hide();
            $("#teaser").show();
            $("#clock-container").css("margin-top","");
            $("#logo-container").css("margin-top","");
            //Position hour, minute, second hands
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";
            var hdegree = hours * 30 + (mins / 2);
            var hrotate = "rotate(" + hdegree + "deg)";
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";
            //Apply position to clock images
            $("#sec").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
            $("#hour").css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
            $("#min").css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});
           }
            //Log time
               console.log("Time: " + hours + ":" + mins + ":" + seconds);
    }, 1000 );
 }); 