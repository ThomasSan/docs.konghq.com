"use strict";$(function(){var t=$(window),e=$("#documentation");if($(".navbar-toggle").on("click",function(){var t=$($(this).data("target"));t.slideToggle(150)}),$(".scroll-to").on("click",function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-70},700)}),!$("body#enterprise").length){var n=$(".section.intro-section").outerHeight()||50,a=$(".navbar-nav").find(".button");t.on("scroll",function(){var t=$(this).scrollTop();t>n?a.removeClass("button-dark").addClass("button-primary"):a.removeClass("button-primary").addClass("button-dark")})}$(".toggle-page-section").on("click",function(t){t.preventDefault();var e=$(this);e.parent().next(".page-section").stop().slideToggle(300,function(){e.toggleClass("active")})});var i=$(".tab-list li"),o=$(".tab-pane");if(i.on("click",function(t,e){t.preventDefault();var n=$(this).find("a").attr("href");i.removeClass("active").filter(this).addClass("active"),o.removeClass("active").filter(n).addClass("active"),history.pushState?history.pushState(null,null,n):window.location.hash=n,e||analytics.track("Choose installation method",{installationMethod:n.substr(1)})}),window.location.hash&&i.find('a[href="'+window.location.hash+'"]').trigger("click",!0),$(".subscribe-form").on("submit",function(t){t.preventDefault();var e=$(this),n=e.find('[name="email"]').val(),a=(new Date).toString();e.fadeOut(300,function(){$(".loader").fadeIn(300)}),analytics.identify(n,{email:n,environment:"kong",newsletter_updates:!0,created_at:a},function(){e.fadeOut(300,function(){$(".loader").fadeOut(300,function(){$(".success-message").fadeIn(300)})}),analytics.track("request_newsletter_updates",{email:n,request_date:a})})}),$(".demo-request-form").on("submit",function(t){t.preventDefault();var e=$(this),n=e.serializeArray(),a=(new Date).toString(),i={},o=$.Deferred(),r={},s={title:8,tell_us_more:6,email:7,phone:9,deployment:14,company:10,name:13,environment:16};e.fadeOut(300,function(){$(".loader").fadeIn(300)}).siblings(".section-header").fadeOut(300);for(var d=0;d<n.length;d++)i[n[d].name]=n[d].value;i.environment="kong",analytics.identify(i.email,$.extend({enterprise:!0,created_at:a},i),function(){analytics.track("request_enterprise_demo",$.extend({request_date:a},i),o.resolve)});for(var l in i)i[l]&&(r[s[l]]=[{raw:i[l]}]);var c=$.ajax({url:"https://mashaper-relateiq-v1.p.mashape.com/accounts",method:"POST",headers:{authorization:"Basic NTU2ZDcxYzdlNGIwMmM5ZTM3YjgxNzc1Ok9NbFNBVGM1QkFTOG1JbEtXZENMZFZ2Z3RqYQ==","x-mashape-key":"mJUINHSWBYmshREqNlfTBKtbBHDZp1N7VKhjsnUIUo4f4r3pVj"},data:JSON.stringify({name:i.email,fieldValues:r})});$.when.apply($,[o,c]).then(function(){$(".loader").fadeOut(300,function(){$(".success-message").fadeIn(300)})})}),e.length){var r=e.find(".page-navigation").find("a"),s=window.location.hash,d=function(){r.removeClass("active").filter(this).addClass("active")};s&&r.each(function(){-1!==$(this).attr("href").indexOf(s)&&d.call(this)}),r.on("click",d)}$('[href^="/download"]').each(function(){var t=$(this);analytics.trackLink(this,"Clicked download",{section:t.closest(".navbar").length?"header":"page",pathname:window.location.pathname,type:t.hasClass("button")?"button":"link"})}),analytics.track("Viewed "+$.trim(document.title.split("|").shift())+" page"),$(".plugin-plate-link").each(function(){analytics.trackLink(this,"Click on plugin",{plugin_type:$(this).closest(".plugin-plate").find("h3").text()})}),$("#documentation .page-navigation a").each(function(){analytics.trackLink(this,"Click documentation link",{documentation_name:$(this).text()})}),$(".community-plate a").each(function(){analytics.trackLink(this,"Click community link",{community_type:$.trim($(this).closest(".community-plate").find("h4").text())})}),analytics.trackLink($('a[href="#comparison"]')[0],"Clicked Why Kong")})+function(t){function e(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var a=n&&t(n);return a&&a.length?a:e.parent()}function n(n){n&&3===n.which||(t(i).remove(),t(o).each(function(){var a=t(this),i=e(a),o={relatedTarget:this};i.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(i[0],n.target)||(i.trigger(n=t.Event("hide.bs.dropdown",o)),n.isDefaultPrevented()||(a.attr("aria-expanded","false"),i.removeClass("open").trigger("hidden.bs.dropdown",o))))}))}function a(e){return this.each(function(){var n=t(this),a=n.data("bs.dropdown");a||n.data("bs.dropdown",a=new r(this)),"string"==typeof e&&a[e].call(n)})}var i=".dropdown-backdrop",o='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.3.5",r.prototype.toggle=function(a){var i=t(this);if(!i.is(".disabled, :disabled")){var o=e(i),r=o.hasClass("open");if(n(),!r){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",n);var s={relatedTarget:this};if(o.trigger(a=t.Event("show.bs.dropdown",s)),a.isDefaultPrevented())return;i.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger("shown.bs.dropdown",s)}return!1}},r.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var a=t(this);if(n.preventDefault(),n.stopPropagation(),!a.is(".disabled, :disabled")){var i=e(a),r=i.hasClass("open");if(!r&&27!=n.which||r&&27==n.which)return 27==n.which&&i.find(o).trigger("focus"),a.trigger("click");var s=" li:not(.disabled):visible a",d=i.find(".dropdown-menu"+s);if(d.length){var l=d.index(n.target);38==n.which&&l>0&&l--,40==n.which&&l<d.length-1&&l++,~l||(l=0),d.eq(l).trigger("focus")}}}};var s=t.fn.dropdown;t.fn.dropdown=a,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=s,this},t(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",o,r.prototype.toggle).on("keydown.bs.dropdown.data-api",o,r.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",r.prototype.keydown)}(jQuery);
//# sourceMappingURL=maps/app.js.map