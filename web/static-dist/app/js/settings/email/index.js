webpackJsonp(["app/js/settings/email/index"],[function(i,e){var a=$("#setting-email-form").validate({rules:{"form[password]":"required","form[email]":"required es_email"}});$("#email-save-btn").on("click",function(i){var e=$(i.currentTarget);a.form()&&(e.button("loading"),$("#setting-email-form").submit())}),$("#send-verify-email").click(function(){var i=$(this);i.button("loading"),$.post(i.data("url"),function(){window.location.reload()})})}]);