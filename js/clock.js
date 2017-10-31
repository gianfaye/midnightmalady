$(document).ready(function() {
// Update clock every second
    setInterval( function() {
        //Get current hour, minute, second
        var seconds = new Date().getSeconds();
        var mins = new Date().getMinutes();
        var hours = new Date().getHours();

        //Check if midnight
        if(hours==0){
            $("#main").show();
            $("#clock-container").hide();
        }
        else{
            $("#main").hide();
            $("#clock-container").show();
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
            //Log time
               console.log("Time: " + hours + ":" + mins + ":" + seconds);
           }
    }, 1000 );
  
 }); 