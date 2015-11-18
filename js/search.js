
$(document).ready(function(){

    var locations = [];
    var locations3 = [];
    function location(locationName,locationValue)
    {
        this.locationName = locationName;
        this.locationValue = locationValue;
        return this;
    }

    function locationsData()
    {

        var defaultLocation = new location("xd","出发");
        var tushuguan = new location("lib","图书馆");
        var zhulou = new location("zhulou","主楼");
        var kejilou = new location("kejilou","科技楼");
        var shiyanlou = new location("shiyanlou","科技实验楼");
        var dongdalou = new location("dongdalou","东大楼");
        var xidalou = new location("xidalou","西大楼");
        var shishenghuodongzhongxin = new location("wenhua","文化活动中心");
        var tiyuzhongxin = new location("tiyu","体育馆");
        var bangonglou = new location("bangonglou","办公楼");
        var beimen = new location("beimen","北门");
        var dongnanmen = new location("dongnanmen","东南门");
        var xinanmen = new location("xinanmen","西南门");
         var gym = new location("gym","田径场");

        locations = [defaultLocation,tushuguan,zhulou,kejilou,shiyanlou,dongdalou,xidalou,shishenghuodongzhongxin,tiyuzhongxin,
           bangonglou, beimen,dongnanmen,xinanmen,gym];
            
    }

    function locationsData3()
    {

        var defaultLocation3 = new location("xd3","到达");
        var tushuguan3 = new location("lib","图书馆");
        var zhulou3 = new location("zhulou","主楼");
        var kejilou3 = new location("kejilou","科技楼");
        var shiyanlou3 = new location("shiyanlou","科技实验楼");
        var dongdalou3 = new location("dongdalou","东大楼");
        var xidalou3 = new location("xidalou","西大楼");
        var shishenghuodongzhongxin3 = new location("wenhua","文化活动中心");
        var tiyuzhongxin3 = new location("tiyu","体育馆");
        var bangonglou3 = new location("bangonglou","办公楼");
        var beimen3 = new location("beimen","北门");
        var dongnanmen3 = new location("dongnanmen","东南门");
        var xinanmen3 = new location("xinanmen","西南门");
         var gym3 = new location("gym","田径场");

        locations3 = [defaultLocation3,tushuguan3,zhulou3,kejilou3,shiyanlou3,dongdalou3,xidalou3,
        shishenghuodongzhongxin3,tiyuzhongxin3,
           bangonglou3, beimen3,dongnanmen3,xinanmen3,gym3];
            
    }

    function initSearch()
    {
        locationsData();
        var searchForm = $("#search");
        var html = "<select id = 'selectLocations' name='selectLocations' class='selectLocations' > ";
        for(var i = 0;i < locations.length;i++)
        {
            var location = locations[i];
            html+="<option value = "+location.locationName+">"+location.locationValue+"</option>";
        }

        html+="</select>";
        searchForm.wrapInner(html);
    }

        function initSearch3()
    {
        locationsData3();
        var searchForm3 = $("#search3");
        var html = "<select id = 'selectLocations3' name='selectLocations3' class='selectLocations' > ";
        for(var i =0;i < locations3.length;i++)
        {
            var location3 = locations3[i];
           
            html+="<option value = "+location3.locationName+">"+location3.locationValue+"</option>";
        }

        html+="</select>";

        searchForm3.wrapInner(html);
    }




    initSearch();
initSearch3();

})