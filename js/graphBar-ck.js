(function(e){function s(){if(i&&i.getContext){var n=i.getContext("2d");$dataList=e(".dataGraph").find("li");var r=0;e.each($dataList,function(){t[r]={percent:Number(e(this).attr("data-percent")),sceance:e(this).attr("data-sceance")};r++});o(n,t,50,100,i.height-20,10)}}function o(e,t,n,r,s,o){e.lineWidth="1.0";var f=s;a(e,n,f,n,s/s);a(e,n,f,i.width,f);e.lineWidth="0.0";var l=0;for(var c=0;c<Object.keys(t).length;c++){var h=t[c].sceance,p=parseInt(t[c].percent)/100*s;parseInt(p)>parseInt(l)&&(l=p);e.fillStyle="#b90000";u(e,n+c*r+c,s-p,r,p,!0);e.font="15pt palatino, 'palatino lt std', 'palatino linotype', 'book antiqua', garamond, serif";e.textAlign="left";e.fillStyle="#000";e.fillText(h,n+c*r+c,s+20,200)}var d=Math.ceil(l/s*100/o);e.textAlign="right";e.fillStyle="#000";var v=0;for(var c=0;c<d;c++){e.fillText(v+"%",n-10,s-v/100*s,50);v+=o}}function u(e,t,r,i,s,o){e.beginPath();e.rect(t,r,i,s);e.closePath();e.stroke();e.fillStyle=n;o&&e.fill()}function a(e,t,n,r,i){e.beginPath();e.moveTo(t,n);e.lineTo(r,i);e.closePath();e.stroke()}var t={},n,r=e(".dataGraph").attr("data-cours"),i=document.getElementById("graphPresenceCours");e(function(){f();s()});var f=function(){e.ajax({async:!1,url:"config.json",success:function(e){oColorData=e.color.cours;for(var t=0;t<=oColorData.length-1;t++)oColorData[t].cours==r&&(n=oColorData[t].color)}})}}).call(this,jQuery);