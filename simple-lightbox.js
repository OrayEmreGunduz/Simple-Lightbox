/* Simple Lightbox - v1.0  * Copyright (c) 2015 Oray Emre Gunduz Licensed MIT */

$(document).ready(function() {
  $("body").prepend('<div class="overpop"><div id="ltpop"><div id="ltcnt"><div id="g_main">');
  $("#g_main").after('<div id="close"><span class="close thick">').next().after('<div class="lightb">');
  $(".popup-gallery").find("img").addClass("pp");
  $("img.pp").each(function() {
    $(this).wrapAll('<div id="inbox"><div id="vbox"><div class="light"><div class="popbrdr">');
  });
  $("img.pp").each(function() {
    $(this).after('<div class="fx">');
  });
  $(".fx").click(function() {
    $("img.pp").css("transform", "scale(1)");
    $(".fx").hide().removeClass();
    $(".overpop").fadeIn(500);
    $("body").css({overflow:"hidden"});
  });
  $(".overpop").click(function(a) {
    setTimeout(function() {
      $(a.target).is("#ltpop *") || $(".pp").each(function() {
        $(".popbrdr > div").addClass("fx").show();
      });
    }, 500);
    $(a.target).is("#ltpop *") || ($("body").css({overflow:"visible"}), $(".overpop").fadeOut(500));
  });
  $("#close").click(function() {
    setTimeout(function() {
      $(a.target).is("#ltpop *") || $(".pp").each(function() {
        $(".popbrdr > div").addClass("fx").show();
      });
    }, 500);
    $("body").css({overflow:"visible"});
    $(".overpop").fadeOut(500);
  });
  var a;
  $(".light").click(function() {
    a = $.inArray(this, $(".light"));
    var c = $(this).html();
    $(".lightb").html(c);
    $("#g_main").html('<div id="g_prev"></div><div id="g_next"></div>');
    $("#g_prev").click(function() {
      var b = a - 1;
      0 > b && (b = $(".light").length - 1);
      $(".lightb").html($(".light:eq(" + b + ")").html());
      a = b;
    });
    $("#g_next").click(function() {
      var b = a + 1;
      b == $(".light").length && (b = 0);
      $(".lightb").html($(".light:eq(" + b + ")").html());
      a = b;
    });
  });
  $(".fx").hover(function() {
    $(this).prev().css("transform", "scale(1.2)");
  }, function() {
    $(this).prev().css("transform", "scale(1)");
  });
});
