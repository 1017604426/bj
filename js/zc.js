
$(function () {
    $("#send").click(function () {
        var value = $("#phones").val();
        if (validatorTel(value)) {
            $(".error_number").css("display", "block");
            $(".wenzi").text("手机号通过验证");
        } else {
            $(".error_number").css("display", "block");
            $(".wenzi").text("手机号码不正确，请重新输入")
        }
    })

})

function validatorTe(content) {
    // 正则验证格式
    eval("var reg = /^1[34578]\\d{9}$/;");
    return RegExp(reg).test(content);
}

// 以上是手机号验证
$(function () {
    $("#agree").click(function () {
        var value = $("#pas").val();
        if (validatorTel(value)) {
            $(".error_password").css("display", "block");
            $("#wenzi2").text("密码验证通过");
        } else {
            $(".error_password").css("display", "block");
            $("#wenzi2").text("密码不对，请重新输入");
        }
    })
})

function validatorTel(content) {
    // 正则验证格式
    var regex = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}');
    return RegExp(regex).test(content);
}

// 以上是正则密码验证
$().ready(function () {
    //启用插件, 找到form表单，开启验证；
    $("#myform") .validate(
        {
            //验证提示信息设置
            messages:{
                phones:{
                    required:"手机号必填",
                    minlength:"手机号码必须是11位纯数字"
                },
                yzm:{
                    required:"验证码必填",
                    minlength:"验证码为6位"
                },
                psw:{
                    required:"验证码必填",
                    minlength:"密码为6位以上"
                }

            }
        }
    );


})