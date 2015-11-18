$(function() {

    var rootPath = "/bxq";
    console.log(location.hash+'hash');

    var myUrl = location.hash;
    var hashAdd = myUrl.split('&');
    var hashLocationName = hashAdd[0].substring(1);
    console.log(hashLocationName);

    var hashDestinationName = hashAdd[1];
    console.log(hashDestinationName);
    
    function location2(locationName, locationValue) {
        this.locationName = locationName;
        this.locationValue = locationValue;
        return this;
    };

    var lib1 = new location2('lib', 1);
    var zhulou1 = new location2('zhulou', 2);
    var kejilou1 = new location2('kejilou', 3);
    var shiyanlou1 = new location2('shiyanlou', 4);
    var dongdalou1 = new location2('dongdalou', 5);
    var xidalou1 = new location2('xidalou', 6);
    var wenhua1 = new location2('wenhua', 7);
    var tiyu1 = new location2('tiyu', 8);
    var bangonglou1 = new location2('bangonglou', 9);
    var beimen1 = new location2('beimen', 10);
    var dongnanmen1 = new location2('dongnanmen', 11);
    var xinanmen1 = new location2('xinanmen', 12);
    var gym1 = new location2('gym', 13);

    var loc = [lib1, zhulou1, kejilou1, shiyanlou1, dongdalou1, xidalou1, wenhua1, tiyu1,
        bangonglou1, beimen1, dongnanmen1, xinanmen1, gym1
    ];

    var lib2 = new location2('lib', 1);
    var zhulou2 = new location2('zhulou', 2);
    var kejilou2 = new location2('kejilou', 3);
    var shiyanlou2 = new location2('shiyanlou', 4);
    var dongdalou2 = new location2('dongdalou', 5);
    var xidalou2 = new location2('xidalou', 6);
    var wenhua2 = new location2('wenhua', 7);
    var tiyu2 = new location2('tiyu', 8);
    var bangonglou2 = new location2('bangonglou', 9);
    var beimen2 = new location2('beimen', 10);
    var dongnanmen2 = new location2('dongnanmen', 11);
    var xinanmen2 = new location2('xinanmen', 12);
    var gym2 = new location2('gym', 13);

    var des = [lib2, zhulou2, kejilou2, shiyanlou2, dongdalou2, xidalou2, wenhua2, tiyu2,
        bangonglou2, beimen2, dongnanmen2, xinanmen2, gym2
    ];

    var hashLocationNameVal = 0;
    var hashDestinationNameVal = 0;

    for (var i = 1; i < 13; i++) {
        if (loc[i].locationName == hashLocationName)
            hashLocationNameVal = loc[i].locationValue;

    }

    for (var i = 1; i < 13; i++) {
        if (loc[i].locationName == hashDestinationName)
            hashDestinationNameVal = loc[i].locationValue;
    }


    if (hashLocationNameVal < hashDestinationNameVal)
        var imgUrl = rootPath + "/attached/" + hashLocationName + "2" + hashDestinationName + ".png";
    else if(hashLocationNameVal > hashDestinationNameVal)
        var imgUrl = rootPath + "/attached/" + hashDestinationName + "2" + hashLocationName + ".png";
else if(hashLocationNameVal =hashDestinationNameVal){
var imgUrl = rootPath + "/attached/6.jpg";

}

     $('#myImg').attr("src", imgUrl);
    console.log(imgUrl);


   $('#locationName').val(hashDestinationName);
   console.log( $('#locationName').val());



   


});
