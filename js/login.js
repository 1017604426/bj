// $(function () {
//     $("#icon_sj").click(function () {
//         var ii = parseInt($("#icon_sj").attr("i"));
//         if (ii == 1) {
//             ss;
//             $("#icon_sj").attr("i", "0");
//             return false;
//         } else {
//             $(ss).stop();
//             $("#icon_sj").attr("i", "1");
//             return false;
//         }
//
//     })
// })
//
// var ss=function qh() {
//     $(function () {
//         $("#login_text a").text("账号密码登陆");
//         $("#yhm_icon").css("background-position-x", "-260px");
//         $("#yhm_icon").css("background-position-y", "-386px");
//         $(".ma_text").attr("placeholder", "短信验证码");
//         $("#forget").hide();
//     })
//
// }
// $(function () {
//     $("#icon_sj").click(function () {
//         var bt_right = $(".bt_right").css("display");
//         var bt_right2 = $(".bt_right2").css("display");
//         if (bt_right == "block") {
//             $(".bt_right").css("display", "none");
//             $(".bt_right2").css("display", "block");
//
//         } else if (bt_right2 == "block") {
//             $(".bt_right2").css("display", "none");
//             $(".bt_right").css("display", "block");
//         } else {
//             alert("出错啦");
//         }
//     })
// })

/*login切换*/
$(function () {
    $("#icon_sj").click(function () {
        $(".bt_right").hide();
        $(".bt_right2").show();
    });

    $("#icon2_sj").click(function () {
        $(".bt_right2").hide();
        $(".bt_right").show();
    });
})

