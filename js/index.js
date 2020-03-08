function shows() {
    var city_box = document.getElementById("city_box");
    city_box.style.display = "block";

}


/*
*  当点击一个城市的时候跳转到对应的城市,此时将显示的文字改为对应城市的名字
*
*
*
* */



function hides() {
    var city_box = document.getElementById("city_box");
    city_box.style.display = "none";
}

// 以上是城市部分

function cx() {
    // 当搜索框获取焦点时，框内文字消失
    //当鼠标点击输入框时，如果搜索框的值未变，那么清除vaule的值；
    var searchs = document.getElementById("searchs");
    var val = searchs.value;
    if (val) {
        searchs.value = "";
        searchs.style.color = "black";
    }
}

function xs() {
    //当焦点失去时，框内文字显示
    //当焦点离开时，检测vaule的值，如果值未变，显示默认文字，
    // 如果vaule已改变那么不改变vaule值
    var searchs = document.getElementById("searchs");
    var val = searchs.value;
    if (val == "") {
        searchs.value = "来自己做一本DIY相册！"
    }
}

function show_low() {
    var arr_left = document.getElementById("arr_left");
    var arr_right = document.getElementById("arr_right");
    arr_left.style.display = "block";
    arr_right.style.display = "block";
}

function hiddle_low() {
    var arr_left = document.getElementById("arr_left");
    var arr_right = document.getElementById("arr_right");
    arr_left.style.display = "none";
    arr_right.style.display = "none";
}

// 以上部分是箭头
function lb_left() {
    window.clearInterval(myVar);
    var cars = document.getElementsByClassName("cars");
    for (var i = 0; i < cars.length; i++) {
        console.log(carousel[i]);
        //获取当前元素的id
        //var s =carousel[i].getAttribute("id");
        //得到当前元素的zindex；
        // var indexs=s.style.zIndex;
        //getComputedStyle(carousel[i].zinde)
        if (parseInt(cars[i].style.zIndex) == 1) {
            //将它的index设置为0
            cars[i].style.zIndex = 0;
            //此时判断是不是第一张的zindex最大；
            if (i - 1 < 0) {
                var b = cars[cars.length - 1];
                b.style.zIndex = 1;
                break;
            } else {
                cars[i - 1].style.zIndex = 1;
                break;
            }
        }
    }

}

// 以上是左箭头按钮

function lb_right() {
    window.clearInterval(myVar);
    //获取到图片集合
    var carousel = document.getElementById("carousel").getElementsByTagName("a");
    //遍历元素集合；
    for (var i = 0; i < carousel.length; i++) {
        //判断集合中谁在最前面，也就是zindex=1的人；
        if (parseInt(carousel[i].style.zIndex) == 1) {
            carousel[i].style.zIndex = 0;
            if (i + 1 > carousel.length - 1) {
                carousel[0].style.zIndex = 1;
                break;
            } else {
                carousel[i + 1].style.zIndex = 1;
                break;
            }
        }
        //将他的zindex设置为0；
        //判断该图片的位置
        //如果是第一张，那么设置下一张图片的zindex=1；
        //如果此时是最后一张，那么设置第一张的zindex=1；
    }


}

//以上是左右箭头
function dots(node) {
    //圆点位置与图片位置一一对应，当点击某个圆点时，对应的图片显示出来，
    // 因此的图片上有某个元素跟圆点相同；设置圆点的z值等于图片的下标；
    //当点击某个圆点时，去图片集合里找到对应的图片
    //将改图片的zindex设置为1；其他的设置为0；
    //将圆点的样式变为实心圆；
    //  var wz=document.getElementById("dot").getElementsByTagName("li");
    var carousel = document.getElementById("carousel").getElementsByTagName("a");
    var dot = document.getElementById("dot").getElementsByTagName("li");
    var s = parseInt(node.getAttribute("z"));
    for (var i = 0; i < carousel.length; i++) {
        carousel[i].style.zIndex = 0;
    }
    carousel[s].style.zIndex = 1;
    var dott = document.getComputedStyle(dot[i], null);
    dott = "276px"
}

//以上是圆点却换以及圆点样式改变代码；
var myVar = setInterval(myTimer, 3000);

function myTimer() {
    lb_right();
}

//当鼠标经过轮播时  停止计时器
// 鼠标离开计时继续   
// 鼠标超过5秒 未做任何操作  计时器自动启动
function intos() {
    window.clearInterval(myVar);
}

function leaves() {
    myVar = setInterval(myTimer, 3000);
}

//每次执行点击切换之后  计时器应该 重新启动  从当前图片计时  往后轮播
function font_move() {
    var evas = document.getElementById("eva_box");

    if (evas.scrollTop >= eva1.offsetHeight) {
        evas.scrollTop = 0;
    } else {
         evas.scrollTop++;
    }
}

setInterval("font_move()", 1000);

// 以上是文字向上移动代码
//一下是倒计时代码：
// window.onload = times;
function times() {
    //获取天数的id;
    var day = document.getElementById("day");
    //获取小时的id;
    var hour = document.getElementById("hour");
    //获取分钟的id;
    var minute = document.getElementById("minute");
    //获取秒的id;
    var second = document.getElementById("second");
    //获取到当前时间
    var new_date = new Date();
    // 获取或者创建一个 终止时间
    var over_date = new Date("2022/1/1 12:00");
    //用终止时间减去当前时间得到时间差（得到是数值单位是毫秒  ）
    var dif_date = over_date.getTime() - new_date.getTime();
    //求出剩余天数；（用剩余的总毫秒换算成天数，取整）
    var days = parseInt(dif_date / (24 * 60 * 60 * 1000));
    //求出剩余小时；（用剩余的总毫秒数—剩余取整后的天数  在进行换算成为小时  再转化为小时 取整）
    var d = days * (24 * 60 * 60 * 1000)//将剩余的天转化为毫秒；
    var hours = parseInt((dif_date - d) / (1000 * 60 * 60));
    //求出剩余分钟；（用剩余的总毫秒数-剩余的总天数-剩余的总小时数  转化为分钟 取整）
    var h = hours * (1000 * 60 * 60);//小时的毫秒数;
    var min = parseInt((dif_date - d - h) / (1000 * 60))
    //求出剩余秒；（用剩余的总毫秒数-剩余天-剩余小时-剩余分钟的毫秒数） 转化为秒；
    var m = min * (1000 * 60);//将分钟转化为毫秒
    var s = parseInt((dif_date - d - h - m) / 1000);

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = min;
    second.innerHTML = s;
}

setInterval(times, 1000);

