$(document).ready(function() {

    var locations = [];

    function location(locationName, locationValue) {
        this.locationName = locationName;
        this.locationValue = locationValue;
        return this;
    }

    function locationsData() {

        var defaultLocation = new location("xd", "二级单位检索");

        var zhulou1 = new location("yuan_tongxin", "通信工程学院");
        var zhulou2 = new location("yuan_dianzi", "电子工程学院");
        var zhulou3 = new location("yuan_jisuanji", "计算机学院");
        var zhulou4 = new location("yuan_jingji", "经济与管理学院");
        //var zhulou5 = new location("zhulou","智能感知与图像理解教育部重点实验室");
        var dongdalou1 = new location("yuan_weidianzi", "微电子学院");
        //  var dongdalou2 = new location("dongdalou","宽带隙半导体技术国家重点实验室");
        //var xidalou1 = new location("yuan_xinlijiankang","大学生心理健康教育中心");
        //var xidalou2 = new location("yuan_wuli", "物理与光电工程学院");
        //  var xidalou3 = new location("yuan_shuxue", "数学与统计学院");
        var xidalou4 = new location("yuan_baowei", "保卫处/公安处");
        // var tushuguan1 = new location("lib","图书馆");
        var tushuguan2 = new location("yuan_xinxichu", "信息化建设处/一卡通中心");
        var tushuguan3 = new location("yuan_wangluo", "网络与继续教育学院");
        var tushuguan4 = new location("yuan_xueshenggongzuo", "学生工作处");

        var kejilou1 = new location("yuan_shebei", "实验室与设备处");

        //  var kejilou2 = new location("kejilou","综合业务网理论及关键技术国家重点实验室");
        //  var kejilou3 = new location("kejilou","天线与微波技术国家重点实验室");
        //  var kejilou4 = new location("kejilou","超高速电路设计与电磁兼容教育部重点实验室");
        var numlou = new location("yuan_guoji", "国际教育学院 ");

        var kejishiyanlou1 = new location("yuan_shengming", "生命科学技术学院");
        // var kejishiyanlou2 = new location("kejishiyanlou","雷达信号处理国家重点实验室");
        // var kejishiyanlou3 = new location("kejishiyanlou","计算机网络与信息安全教育部重点实验室");
        // var kejishiyanlou4 = new location("kejishiyanlou","电子装备结构设计教育部重点实验室");
        // var kejishiyanlou5 = new location("kejishiyanlou","电子信息攻防对抗与仿真技术教育部重点实验室");
        //  var kejishiyanlou6 = new location("kejishiyanlou","智能信息处理科学与技术创新引智基地");
        //var kejishiyanlou7 = new location("yuan_diangongdianzi","电工电子实验教学中心");
        var bangonglou1 = new location("yuan_dangzhengban", "党政办公室");
        // var bangonglou2 = new location("yuan_jiaowuchu","教务处");
        var bangonglou3 = new location("yuan_yanjiushengyuan", "研究生院/研究生工作部 ");
        var bangonglou4 = new location("yuan_baomi", "科学研究院/保密办公室");
        var bangonglou5 = new location("yuan_jidian", "机电工程学院");
        var bangonglou6 = new location("yuan_ruanjian", "软件学院");
        var bangonglou7 = new location("yuan_anquan", "网络与信息安全学院");
        var bangonglou8 = new location("yuan_waiguoyu", "外国语学院");
        var bangonglou9 = new location("yuan_kongjian", "空间科学与技术学院 ");
         var bangonglou10 = new location("yuan_caiwu", "计划财务处 ");
        //var bangonglou8 = new location("yuan_yanzhaoban","研究生招生办公室");
        var wenhua1 = new location("yuan_tuixiu", "离退休工作处/离退休党委 ");
                var tiyubu = new location("yuan_tiyubu", "体育部  ");
                
                 var houqinfuwu = new location("yuan_houqinfuwu", "后勤服务集团党委/后勤服务集团   ");

                var jituan = new location("yuan_jituan", "产业集团党委  ");

                var kejiyuan = new location("yuan_kejiyuan", "国家大学科技园与陕西工研院管理办公室  ");

                var hezuo = new location("yuan_hezuo", "国际合作与交流处/港澳台办公室  ");

                var gonghui = new location("yuan_gonghui", "工 会  ");



        //阶梯教学楼开始未做


        /** locations = [defaultLocation,zhulou1,zhulou2,zhulou3,zhulou4,zhulou5,dongdalou1,dongdalou2,
                     xidalou1,xidalou2,xidalou3,tushuguan1,tushuguan2,tushuguan3,tushuguan4,kejilou1,
                     kejilou2,kejilou3,kejilou4,kejishiyanlou1,kejishiyanlou2,kejishiyanlou3,
                     kejishiyanlou4,kejishiyanlou5,kejishiyanlou6,kejishiyanlou7,bangonglou1,
                     bangonglou2,bangonglou3,bangonglou4,bangonglou5,bangonglou6,bangonglou7,bangonglou8];
            */

        locations = [defaultLocation,
            zhulou1, zhulou2, zhulou3, zhulou4,
            dongdalou1,

            tushuguan3,

            kejishiyanlou1,
            bangonglou5, bangonglou6, bangonglou7, bangonglou8, bangonglou9,numlou,tiyubu,
            tushuguan2, tushuguan4, kejilou1, bangonglou3, bangonglou1, bangonglou4,bangonglou10,
            wenhua1, xidalou4,houqinfuwu,jituan,kejiyuan,hezuo,gonghui
        ];

    }

    function initSearch() {
        locationsData();
        var searchForm = $("#search2");
        var html = "<select id = 'selectLocations2' name='selectLocations2' class='selectLocations' >";
        for (var i = 0; i < locations.length; i++) {
            var location = locations[i];
            html += "<option value = " + location.locationName + ">" + location.locationValue + "</option>";
        }

        html += "</select>";
        searchForm.wrapInner(html);
    }

    initSearch();


})
