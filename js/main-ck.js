(function(e){var t=e(".nav"),n="#000",r=["web"],i=e(".day").find(".sceances"),s=e(".overlay"),o=e(".popupCreerCours"),u=e(".popupModifierCours"),a=e(".popupSupprimerCours"),f=e(".popupVoirCours"),l=e(".elevesDuCours .eleve"),c=e(".actions"),h=e(".actionsPresence"),p=e(".ligneSceances"),d=e(".popupModifierSceanceLigne"),v=e(".popupSupprimerSceanceLigne"),m,g,y,b,w=e(".search").find("#search"),E=[],S=[],x=[],T,N;e(function(){I();L();A();e.each(e(".mesCours").find(".cours"),function(){var t=e(this).attr("data-type");t==="web"&&e(this).find(".titre > h3").css({color:n})});i&&e.each(i,function(){e(this).parent(".day").find(".number").css({color:"white"})});e(".menuLow").on("click",Z);e(".popupCreerCours .close").on("click","a",et);e(".popupModifierCours .close").on("click","a",et);e(".popupSupprimerCours .close").on("click","a",et);e(".close").on("click","a",et);e(".delete").on("click",tt);e('.helper a[data-link="creer"').on("click",K);e('.helper a[data-link="modifier"').on("click",Q);e('.helper a[data-link="supprimer"').on("click",G);e('.helper a[data-link="voir"').on("click",Y);e("#color").change(function(){console.log(e("#color").val())});s.on("click",$);e(".helper.voirCours .groupe li").on("click","a",V);e(".helper.voirCours .presence li").on("click","a",X);e(".sceancesMois li").on("click","a",z);c.on("click","a.modifier",U);c.on("click","a.supprimer",R);h.find(".present").on("click",H);h.find(".justifier").on("click",B);h.find(".absent").on("click",j);h.find(".aucune").on("click",F);e(".elevesDuCours.presenceCours .eleve").on("click","a",W);e('a[href^="#"]').click(function(){var t=e(this).attr("href");e("html, body").animate({scrollTop:e(t).offset().top},"slow");return!1});w.keydown(function(){setTimeout(function(){var e=w.val();O(e)},50)})});var C=function(t){t.preventDefault();$slug=e(this).attr("data-slug");$that=e('.list .range li[data-slug="'+$slug+'"]');k($that);$that.find(".nom a").focus()},k=function(t){e("html, body").animate({scrollTop:t.offset().top},400)},L=function(){e.each(e(".sceances li"),function(){var t=e(this).attr("data-cours");E[t]&&e(this).css({backgroundColor:E[t]})})},A=function(){e.each(e(".eleves li"),function(){var t=e(this).find(".groupe").attr("data-groupe");if(x[t]){e(this).css({backgroundColor:x[t],color:"white"});e(this).find("span > a").css({color:"white",borderBottom:"1px dotted white",borderTop:0})}})},O=function(t){var t=t.toLowerCase();if(e.type(t)==="string"){D(t);e(".listAutocomplete li").on("click","a",C)}},M=function(t,n){var r=e(".search .listAutocomplete li"),i=!1;if(r.length>0){e.each(r,function(){e(this).find("a").attr("data-slug")===n&&(i=!0)});if(!i){e(".search .autoCompletionEleves").show();e(".search .listAutocomplete").append('<li><a href="voirEleve.php" data-slug="'+n+'" title="Voir la fiche de l\'élève">'+t+"</a></li>")}}else if(!i){e(".search .autoCompletionEleves").show();e(".search .listAutocomplete").append('<li><a href="voirEleve.php" data-slug="'+n+'" title="Voir la fiche de l\'élève">'+t+"</a></li>")}},_=function(t){var n=e(".search .listAutocomplete li");t!=="all"?e.each(n,function(){e(this).find("a").attr("data-slug")===t&&e(this).remove()}):n.remove()},D=function(e){if(e!==""){aData=P();for(var t=0;t<aData.length;t++)if(aData[t].indexOf(e)>=0){var n=aData[t].replace("-"," "),r=n.ucwords();M(r,aData[t])}else _(aData[t])}else _("all")},P=function(){var t=[],n=[],r=[],i=[],s,o,u,a;e.each(e(".range"),function(){e.each(e(".eleves .etudiant"),function(){s=e(this).find(".nom").attr("data-slug");var f=e.inArray(s,t);f<0&&t.push(s);o=e(this).find(".anneeLevel").attr("data-slug");var f=e.inArray(o,n);f<0&&n.push(o);u=e(this).find(".groupe").text();var f=e.inArray(u,r);f<0&&r.push(u);a=e(this).find(".option").text();var f=e.inArray(a,i);f<0&&i.push(a)})});return t},H=function(t){t.preventDefault();if(q(g,m,e(this).attr("data-presence"))){$that=l.find('.nom[data-slug="'+g+'"]');b=e(this).attr("data-presence");$that.css({color:S[b]})}},B=function(t){t.preventDefault();if(q(g,m,e(this).attr("data-presence"))){$that=l.find('.nom[data-slug="'+g+'"]');b=e(this).attr("data-presence");$that.css({color:S[b]})}},j=function(t){t.preventDefault();if(q(g,m,e(this).attr("data-presence"))){$that=l.find('.nom[data-slug="'+g+'"]');b=e(this).attr("data-presence");$that.css({color:S[b]})}},F=function(t){t.preventDefault();if(q(g,m,e(this).attr("data-presence"))){$that=l.find('.nom[data-slug="'+g+'"]');b=e(this).attr("data-presence");$that.css({color:S[b]})}},I=function(){e.ajax({async:!1,url:"config.json",success:function(e){var t=e.color.cours,n=e.color.presence,r=e.color.groupe;for(var i=0;i<=t.length-1;i++)E[t[i].cours]=t[i].color;for(var i=0;i<=n.length-1;i++)S[n[i].presence]=n[i].color;for(var i=0;i<=r.length-1;i++)x[r[i].groupe]=r[i].color}})},q=function(e,t,n){return!0},R=function(e){e.preventDefault();T=e.pageX;N=e.pageY;v.css({top:N+125,left:130}).fadeIn();J(v);d.hide()},U=function(e){e.preventDefault();T=e.pageX;N=e.pageY;d.css({top:N+125,left:0}).fadeIn();J(d);v.hide()},z=function(e){e.preventDefault();T=e.pageX;N=e.pageY;c.css({top:N+25,left:T-100}).fadeIn("fast")},W=function(t){t.preventDefault();T=t.pageX;N=t.pageY;g=e(this).find(".nom").attr("data-slug");y=e(this).find(".groupe").attr("data-groupe");m=Number(e(".gererMaSceance").attr("data-sceance"));h.css({top:N+50,left:T}).fadeIn("fast")},X=function(t){t.preventDefault();if(e(this).attr("data-link")==="presence"){e(this).attr("data-link","image");e(this).html("Revoir les photos");e(".presenceGroupe").fadeIn();e.each(l,function(){e(this).find("img").hide();e(this).find(".percent span").html("70%");e(this).find(".percent").show()})}else{e(this).attr("data-link","presence");e(this).html("Voir les présences");e(".presenceGroupe").fadeOut();e.each(l,function(){e(this).find(".percent").hide();e(this).find("img").show()})}},V=function(t){t.preventDefault();e(".helper.voirCours .groupe li.active").removeClass("active");e(this).parent().addClass("active");e(".helper.voirCours .presence li > a").attr("data-groupe",e(this).attr("data-groupe"));if(e(this).attr("data-link")==="tri")if(e(this).attr("data-groupe")!=="all"){var n=e(this).attr("data-groupe"),r=e(this);e.each(l,function(){e(this).find(".groupe").attr("data-groupe")!==n?e(this).fadeOut():e(this).fadeIn()})}else e.each(l,function(){e(this).fadeIn()})},$=function(e){e.preventDefault();s.fadeOut();c.fadeOut();d.fadeOut();v.fadeOut();o.fadeOut();u.fadeOut();a.fadeOut();f.fadeOut()},J=function(t){e("html, body").animate({scrollTop:t.offset().top},1e3,function(){s.css({height:e(window).height(),width:e(window).width(),display:"block"})})},K=function(e){e.preventDefault();o.fadeIn();J(o);u.hide();a.hide();f.hide()},Q=function(e){e.preventDefault();u.fadeIn();J(u);o.hide();a.hide();f.hide()},G=function(e){e.preventDefault();a.fadeIn();J(a);u.hide();o.hide();f.hide()},Y=function(e){e.preventDefault();f.fadeIn();J(f);u.hide();a.hide();o.hide()},Z=function(t){t.preventDefault();var n=e(this).parent(".wrapper").find(".menu");n.slideToggle().css({boxShadow:"rgba(0,0,0,0.4) 0 3px 3px 0","-webkit-boxShadow":"rgba(0,0,0,0.4) 0 3px 3px 0",backgroundColor:"#5097bd"})},et=function(t){t.preventDefault();e(this).parent().parent().fadeOut("fast");s.fadeOut();c.fadeOut()},tt=function(t){t.preventDefault();e(this).parent().fadeOut()};String.prototype.ucwords=function(){var e=this.split(" "),t=0,n=e.length;for(;t<n;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].slice(1);return e.join(" ")}}).call(this,jQuery);