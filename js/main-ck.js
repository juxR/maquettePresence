(function(e){e(function(){e(window).width()<940?e(".menuLink").on("click",i):e(window).width()>940;e(".moreLink").on("click",s);e(".showItems").on("click",o);e(window).width()>940&&e(".invisible-link").css({display:"block"});e(window).resize(function(){e(window).width()>=940?e(".invisible-link").css({display:"block"}):e(".invisible-link").css({display:"none"})});e(window).load(function(){e(".intro .item1").css({"-webkit-transform":"translate3D(310px,0,0)",opacity:1});e(".intro .item2").css({"-webkit-transform":"translate3D(-310px,0,0)",opacity:1})})});var t=function(t){e(this).parent().find(".maxDev").slideDown()},n=function(t){e(this).parent().find(".maxDev").slideUp()},r=function(t){e(this).css("opacity","1")},i=function(t){t.preventDefault();e(".invisible-link").slideToggle()},s=function(t){var n=e(this).parent().find(".maxDev");t.preventDefault();n.slideToggle();e(this).find("span").hasClass("icon icon-chevron-right-white")&&n?e(this).find("span").removeClass("icon icon-chevron-right-white").addClass("icon icon-chevron-bottom-white"):e(this).find("span").removeClass("icon icon-chevron-bottom-white").addClass("icon icon-chevron-right-white")},o=function(t){t.preventDefault();e(".panierItem").slideToggle()}}).call(this,jQuery);