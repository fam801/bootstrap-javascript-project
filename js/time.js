
$(document).ready(function(){
    var weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

    function format(obj)
    {
        var ret = "";
        if(obj-'0' < 10)
        {
            ret = '0' + obj;
        }
        else
        {
            ret = obj;
        }
        return ret;
    }

    function time()
    {
        var date = new Date();
//        2015
        var year = date.getFullYear();
//        27
        var date_day = date.getDate();
//        9月
        var month = format(date.getMonth()+1);
//        12点
        var hour = format(date.getHours());
//        23分
        var minutes = format(date.getMinutes());
        var seconds = format(date.getSeconds());
        var week = format(date.getDay());

        var htmlTime = year + "年 " + month + "月 " + date_day + "日 " + hour + ":" + minutes + ":" + seconds;
//        $("#time").html(htmlTime);
    }
//    setInterval(time,1000);

})