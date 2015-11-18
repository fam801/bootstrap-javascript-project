
$(function()
{
     var rootPath = "/bxq";

    $("#selectLocations2").on("change",function(){
        destinationName = $(this).val();
        submitSearch();
    });


    function submitSearch()
    {
       
        console.log(destinationName);

        if(destinationName)
        {
            window.location.href = rootPath + destinationName+".html";
        }
        
        else
        {
           
        }
       

    }

    $("#search_span_tips2").click(submitSearch);

    $(document).keydown(function(event){
        var code = event.keyCode;
        if(code == 13)
        {
            submitSearch();
        }
    });

//  图片支持手动的轮播 左滑
    $('#img_carouse').hammer().on('swipeleft', function(){
        $(this).carousel('next');
    });
//  图片支持手动的轮播 右滑
    $('#img_carouse').hammer().on('swiperight', function(){
        $(this).carousel('prev');
    });

    //显示当前位置
    (function(){
        $("#curLocation").html("您当前的位置：" + $("title").html());
    })();









});