webpackJsonp(["app/js/settings/password/index"],[function(r,s){var e=$("#settings-password-form").validate({rules:{"form[currentPassword]":{required:!0},"form[newPassword]":{required:!0,minlength:5,maxlength:20,visible_character:!0},"form[confirmPassword]":{required:!0,equalTo:"#form_newPassword",visible_character:!0}}});$("#password-save-btn").on("click",function(r){var s=$(r.currentTarget);e.form()&&(s.button("loading"),$("#settings-password-form").submit())})}]);