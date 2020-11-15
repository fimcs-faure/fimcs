// Scroll et menu
$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $(".navbar").addClass("sticky");
      $(".goTop").fadeIn();
    }
    else{
      $(".navbar").removeClass("sticky");
      $(".goTop").fadeOut();
    }
  });

  $(".goTop").click(function(){scroll(0,0)});

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
});

// Annonces flash :
function hideFlash(){
  document.getElementById('annonce-flash').style="display: none;"
}
setTimeout(() => {
  hideFlash()
}, 10000)

// Titre responsive :

function responsiveTitle(){
  width = window.innerWidth;
  console.log('Big Brothers watches you')
  if (666>width){
    document.getElementById('welcomeTitle').innerHTML="FIMCS"
  }
  else if (width==666){
    document.getElementById('welcomeTitle').innerHTML="Satan est présent"
  }
  else if(width>850) {
    document.getElementById('welcomeTitle').innerHTML="Forum Intellectuel de la Meilleure Classe de Seconde"
  }
}
setInterval(responsiveTitle, 100);



