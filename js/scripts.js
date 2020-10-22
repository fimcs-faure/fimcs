alert("Bonjour,\nPour l'instant cette page d'accueil est la seule page du site. Tous les liens que vous verrez et sur lesquels il vous sera proposé de cliquer sont désactivés. Les seuls liens fonctionnels sont ceux du menu principal et de la rubrique contact.\nMerci de votre compréhension \nPierrick")
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


function welcomeTitle(){
  var random = Math.floor(Math.random() * 101);
  if (random<=20){
    //Bienvenue sur le site du FIMCS
    document.getElementById('welcomeTitle').innerHTML='Bienvenue sur le site du FIMCS';
    var proba = 20;
  }
  else if ((random>20) && (random<=40)){
    //Forum Intellectuel de la Meilleure Classe de Seconde
    document.getElementById('welcomeTitle').innerHTML='Forum Intellectuel de la Meilleure Classe de Seconde';
    var proba = 20;
  }
  else if ((random>40) && (random<=60)){
    document.getElementById('welcomeTitle').innerHTML='Contactez Pierrick pour publier votre annonce'
    var proba = 20;
  }
  else if ((random>60) && (random<=70)){
    document.getElementById('welcomeTitle').innerHTML="Cliquez sur le calendrier pour accéder aux devoirs à faire !";
    var proba = 10;
  }
  else if ((random>70) && (random<=85)) {
    document.getElementById('welcomeTitle').innerHTML="Cliquez sur l'étoile pour accéder aux bonus !"
    var proba = 15;
  }
  else if ((random<85) && random<=95){
    document.getElementById('welcomeTitle').innerHTML="Cliquez sur la croix pour voir les profs absents !"
    var proba = 10;
  }
  else if (random==96){
    document.getElementById('welcomeTitle').innerHTML="Dinozug 🚅"
    var proba = 1;
  }
  else if (random==97){
    document.getElementById('welcomeTitle').innerHTML="Si le travail c'est la santé donnez le mien à quelqu'un de malade"
    var proba = 1;
  }
  else if (random==98){
    document.getElementById('welcomeTitle').innerHTML="Je n'ai pas volé un design venant d'Internet"
    var proba = 1;
  }
  else if (random==99){
    document.getElementById('welcomeTitle').innerHTML="Martine !!";
    var proba = 1;
  }
  else if (random==100){
    document.getElementById('welcomeTitle').innerHTML="Nulle science n'est plus la cuisse qui court après les fainéants sera rassasié de pauvreté."
    var proba = 1;
  }
  document.getElementById('probability').innerHTML="Il y avait "+proba+"% de chances que ce titre soit affiché"
}
welcomeTitle()
setInterval("welcomeTitle()", 60000);