webpackJsonp(["app/js/message/conversation-list/index"],[function(n,i){$("#site-navbar").find(".message-badge-container .badge").remove(),$(".conversation-list").on("click","a",function(n){n.stopPropagation()}),$(".conversation-list").on("click",".media",function(n){window.location.href=$(this).data("url")}),$(".conversation-list").on("click",".delete-conversation-btn",function(n){if(!confirm(Translator.trans("真的要删除该私信吗？")))return!1;var i=$(this).parents(".media");$.post($(this).data("url"),function(){i.remove()})})}]);