!function(a){a.fn.fitText=function(b,c){var d=b||1,e=a.extend({minFontSize:Number.NEGATIVE_INFINITY,maxFontSize:Number.POSITIVE_INFINITY},c);return this.each(function(){var b=a(this),c=function(){b.css("font-size",Math.max(Math.min(b.width()/(10*d),parseFloat(e.maxFontSize)),parseFloat(e.minFontSize)))};c(),a(window).on("resize.fittext orientationchange.fittext",c)})}}(jQuery),function(){define("url",[],function(){"use strict";function a(a){return a.replace(/[A-Z]/gm,function(a){return"-"+a.toLowerCase()})}function b(a){return n[a]}function c(a){return a.replace(/[&"'<>]/g,b)}function d(){e();for(var a=0,b=l.length;b>a;a++)i=l[a].split("="),j=i[0].toLowerCase(),k=i[1],k=c(decodeURIComponent(k)),console.log(k),j in m.cssAttrs?m.cssAttrs[j]=k:j in m&&(m[j]=k),"google-font"===j&&f(k)}function e(){var b=document.createElement("div");for(var c in b.style)"background"!==c&&(m.cssAttrs[a(c)]=null)}function f(a){window.WebFontConfig={google:{families:[a]}};var b=document.createElement("script");b.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",b.type="text/javascript",b.async="true";var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}var g=window.location.toString().split("?"),h=g[1]||"";"/"===h.charAt(h.length-1)&&(h=h.substring(0,h.length-1));var i,j,k,l=h.split("&"),m={text:"",cssAttrs:{},bigtext:!0,background:"white","class":""};m["google-font"]=!1;var n={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"};return d(),m}),define("app",["url"],function(a){"use strict";function b(a,b){return b(a.length)}function c(a){return Math.max(.013*a,1)}function d(){g.css({background:a.background}),h.addClass(a.class),h.css(a.cssAttrs)}function e(){a.bigtext===!0&&h.fitText(i,{maxFontSize:"300px"})}function f(a){return a.replace(/\+/g," ")}console.log(a);var g=$("#texty-block"),h=g.find("h1"),i=1;return h.html(a.text),i=b(a.text,c),d(),e(),console.log(a["google-font"]),h.css({"margin-top":h.height()/-2}),a["google-font"]!==!1&&h.css({"font-family":f(a["google-font"])}),{}}),require.config({}),require(["app"],function(){"use strict"}),define("main",function(){})}();