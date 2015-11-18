
$(function() {


    var rootPath = "/bxq";
   
    var locationName = "";
 var destinationName = "";
 console.log(locationName+567);


    $("#selectLocations").on("change", function() {
        locationName = $(this).val();
         console.log(locationName);
         // submitSearch();
       
    });


    $("#selectLocations3").on("change", function() {
        destinationName = $(this).val();
         console.log(destinationName);
        // submitSearch();
    });

 


    function submitSearch() {
        console.log(locationName);
        console.log(destinationName);

     
        if(locationName && destinationName && locationName!='xd' &&destinationName!='xd3'){

         window.location.href = rootPath + "/map/" + "a2b.html" +
                                                      "#" + locationName + '&' + destinationName;
                    
        }else{
            alert("请选择地点");
        }
    }


       $("#ss").click(function(){
      
             submitSearch();
    });

    // $("#search_span_tips").click(submitSearch);
    //$("#selectLocations").change(mbar);

    // $("#selectLocations").on("change",submitSearch);


    $(document).keydown(function(event) {
        var code = event.keyCode;
        if (code == 13) {
            submitSearch();
        }
    });

    //  图片支持手动的轮播 左滑
    $('#img_carouse').hammer().on('swipeleft', function() {
        $(this).carousel('next');
    });
    //  图片支持手动的轮播 右滑
    $('#img_carouse').hammer().on('swiperight', function() {
        $(this).carousel('prev');
    });

    //显示当前位置
    (function() {
        $("#curLocation").html("您当前的位置：" + $("title").html());
        $("#curLocation2").html($("title").html());
    })();




});
