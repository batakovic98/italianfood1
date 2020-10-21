window.onload = function(){
    
    ispisMenija();

}

function ispisMenija(){

    $.ajax({
        url: "data/meni4.json",
        method: "get",
        type:"json",
        success: function(data){
            let ispis = "<ul class='tm-nav-ul'>"
            for(let d of data){
                ispis+=`
                <li class="tm-nav-li"><a href="${d.link}" class=${d.aktivan}>${d.text}</a></li>`     
            }
            ispis+= "</ul>";
            document.getElementById("meni4").innerHTML = ispis;

        },
        error: function(xhr,status,error){
            alert(status);
        }
    })
}

$(document).ready(function(){


    $('#scrollToTop').click(function () {
        var offset = 220;
        var duration = 500;
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('#scrollToTop').fadeIn(duration);
            } else {
                jQuery('#scrollToTop').fadeOut(duration);
            }
        });
    
        $('html').animate({
            scrollTop: 0
        }, 2000);
    });


})