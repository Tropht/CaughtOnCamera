$( document ).ready(function() {
    $('.meerkat').mouseover(function(){
      $('.meerkat').css("background-image","url('img/meerkat.png')");
    });
    $('.periscope').mouseover(function(){
      $('.periscope').css("background-image","url('img/periscope.png')");
    });
    $(function() {
    $( ".bottom" ).accordion();
  });

});

// ScrollMagic
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: ".middle"})
					// trigger a velocity opaticy animation
					.setVelocity(".circle", {opacity: 0.7}, {duration: 500})
          .setClassToggle(".diagramImg", "moveDown")
					.addTo(controller);

var header1 = new ScrollMagic.Scene({triggerElement: "#mBubble"})
          .setVelocity("#header1", {opacity: 1}, {duration: 500})
          .setClassToggle('#header1', "moveRight")
          .addTo(controller);

var header2 = new ScrollMagic.Scene({triggerElement: "#header1"})
          .setVelocity("#header2", {opacity: 1}, {duration: 500})
          .setClassToggle('#header2', "moveRight")
          .addTo(controller);

var header3 = new ScrollMagic.Scene({triggerElement: "#header2"})
          .setVelocity("#header3", {opacity: 1}, {duration: 500})
          .setClassToggle('#header3', "moveRight")
          .addTo(controller);
