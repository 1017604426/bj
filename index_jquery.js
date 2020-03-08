$(function() {
    // 城市选择跳转
    $(".citys a").click(function () {
        var names = $(this).text();
        var city_text = $("#city_text").text(names);
    })

 //我的预约板块显示；
    $("#my_jy").click(function () {
        $("#my_dd ").css("display","block");
    })


    //离开预约板块时，隐藏
    $("#my_dd ").mouseleave(function () {
        $("#my_dd ").css("display","none");
    })
    }
)


