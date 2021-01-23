
window.onscroll = function() {
    scrollFunction();
    two();
    
};


var prevScrollpos2 = window.pageYOffset;
function two() {
  var currentScrollPos2 = window.pageYOffset;
    if (prevScrollpos2 > currentScrollPos2) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("head2").style.top="40px";


      
    } else {
      document.getElementById("navbar").style.top = "-50px";
      document.getElementById("head2").style.top="0px";
    }
    prevScrollpos2 = currentScrollPos2;
  }



function scrollFunction() {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("head2").style.marginTop="40px";
    document.getElementById("head2").style.transform = "translateY(-40px)";
    document.getElementById("head2").style.width="100%";
    document.getElementById("head2").style.left="0%";
    document.getElementById("head2").style.borderRadius="3px";
    
    
  } else {
    document.getElementById("head2").style.marginTop="0px";
    document.getElementById("head2").style.transform = "translateY(20px)";
    document.getElementById("head2").style.width="calc(100% - 60px)";
    document.getElementById("head2").style.left="2%";
    document.getElementById("head2").style.borderRadius="10px";
  }
}



function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
function openNav2() {
  document.getElementById("myNav2").style.height = "100%";
}

function closeNav2() {
  document.getElementById("myNav2").style.height = "0%";
}




$(document).ready(function(){

  $("#hide").click(function(){
    $("#hide").hide();
  });
/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 25) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");

  });

});

/*Scroll to top when arrow up clicked END*/


// for faqs
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });}

});

