

$(function(){
    var time = 5;
    function countDown()
    {
        if(time <= 1)
        {
            window.location.href = "/bxq/index.html";
        }
        else
        {
            time = time - 1;
            $("#time").html(time);
        }
    }

    setInterval(countDown,1000);
})
