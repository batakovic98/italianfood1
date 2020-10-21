window.onload = function(){
    
    ispisMenija();
    ispisIkonica();


    document.getElementById("posalji").addEventListener("click", function(){

        var nizGreske = [];
        var nizOk = [];

        var ime = document.getElementById("name");
        var reIme = /^[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14}$/;
        if(!reIme.test(ime.value.trim())){
            nizGreske.push("Pogrešan format imena!");
            document.getElementById("name").style.borderColor = "red";

        }
        else{
            nizOk.push(ime.value);
            document.getElementById("name").style.borderColor = "green";
        }


        var ime = document.getElementById("email");
        var reIme = /^([A-Z]|[a-z]|[0-9]|[\_\%\.\+\-])([A-Z]|[a-z]|[0-9]|[\_\%\.\+\-])+\@[a-z]+\.[a-z]{2,4}$/;
        if(!reIme.test(ime.value.trim())){
            nizGreske.push("Pogrešan format emaila!");
            document.getElementById("email").style.borderColor = "red";

        }
        else{
            nizOk.push(email.value);
            document.getElementById("email").style.borderColor = "green";
        }


        var ime = document.getElementById("area");
        var reIme = /^.{10,50}$/;
        if(!reIme.test(ime.value)){
            nizGreske.push("Polje za poruku mora biti popunjeno!");
            document.getElementById("area").style.borderColor = "red";

        }
        else{
            nizOk.push(area.value);
            document.getElementById("area").style.borderColor = "green";
        }





        var lista = "<ul>";

       if(nizGreske.length != 0){

           for(var i = 0; i < nizGreske.length; i++){
               lista += "<li>" + nizGreske[i]+ "</li>";
           }
           document.getElementById("ispis").style.color = "red";
       }
       else{
          
           for(var i = 0; i < nizOk.length; i++){
               lista += "<li>" + nizOk[i]+ "</li>";
           }
           document.getElementById("ispis").style.color = "green";
       }
       lista += "</ul>";
       document.getElementById("ispis").innerHTML = lista;
       


    })

    




    document.getElementById("name").focus();
   document.getElementById("name").addEventListener("blur", function(){
       var ime = document.getElementById("name");
       var reIme = /^[A-ZŽĆČŠĐ][a-zžćčšđ]{2,14}$/;
       if(!reIme.test(ime.value.trim())){
           document.getElementById("greskaime").innerHTML = "Pogrešan format imena!";
           document.getElementById("greskaime").style.color = "red";
           document.getElementById("name").style.borderColor = "red";
       }
       else{
           document.getElementById("greskaime").innerHTML = "";
           document.getElementById("name").style.borderColor = "green";
       }
   })

   document.getElementById("email");
   document.getElementById("email").addEventListener("blur", function(){
       var ime = document.getElementById("email");
       var reIme = /^([A-Z]|[a-z]|[0-9]|[\_\%\.\+\-])([A-Z]|[a-z]|[0-9]|[\_\%\.\+\-])+\@[a-z]+\.[a-z]{2,4}$/;
       if(!reIme.test(ime.value.trim())){
           document.getElementById("greskamail").innerHTML = "Pogrešan format emaila!";
           document.getElementById("greskamail").style.color = "red";
           document.getElementById("email").style.borderColor = "red";
       }
       else{
           document.getElementById("greskamail").innerHTML = "";
           document.getElementById("email").style.borderColor = "green";
       }
   })


   document.getElementById("area");
   document.getElementById("area").addEventListener("blur", function(){
       var ime = document.getElementById("area");
       var reIme = /^.{10,50}$/;
       if(!reIme.test(ime.value.trim())){
           document.getElementById("greskaarea").innerHTML = "Polje za poruku mora biti popunjeno!";
           document.getElementById("greskaarea").style.color = "red";
           document.getElementById("area").style.borderColor = "red";
       }
       else{
           document.getElementById("greskaarea").innerHTML = "";
           document.getElementById("area").style.borderColor = "green";
       }
   })

     








}










function ispisMenija(){

    $.ajax({
        url: "data/meni3.json",
        method: "get",
        type:"json",
        success: function(data){
            let ispis = "<ul class='tm-nav-ul'>"
            for(let d of data){
                ispis+=`
                <li class="tm-nav-li"><a href="${d.link}" class=${d.aktivan}>${d.text}</a></li>`     
            }
            ispis+= "</ul>";
            document.getElementById("meni2").innerHTML = ispis;

        },
        error: function(xhr,status,error){
            alert(status);
        }
    })
}

function ispisIkonica(){

    let ikonice=['fab fa-facebook tm-social-icon', 'fab fa-twitter tm-social-icon', 'fab fa-instagram tm-social-icon'];

    let ispis="";
        for( let i=0; i<ikonice.length; i++){

            ispis+="<a href='#' class='tm-social-link'><i class='" +ikonice[i]+ "'></i></a>"

        }
    document.getElementById("ikonice").innerHTML=ispis;
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