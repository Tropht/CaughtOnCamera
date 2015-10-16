$( document ).ready(function() {
    $('.meerkat').mouseover(function(){
      $('.meerkat').css("background-image","url('img/meerkat.png')");
    });
    $('.periscope').mouseover(function(){
      $('.periscope').css("background-image","url('img/periscope.png')");
    });


});

// ScrollMagic
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: ".middle"})
					// trigger a velocity opaticy animation
					.setVelocity(".circle", {opacity: 0.7}, {duration: 500})
          .setClassToggle(".diagramImg", "moveDown")
					.addTo(controller);
