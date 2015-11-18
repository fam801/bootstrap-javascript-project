
//全局变量
var myaudio = null;
var interval_music = null;
var interval_btn = null;
var angle = 0;//旋转角度

$(document).ready(function() {

    init();

    $("#btnPlay").hammer().on("tap",function(){
        //触碰按钮 发生事件
        audio();

    });

    //初始化变�?
    function init()
    {
        myaudio = new Audio("myaudio","btnPlay");
        interval_music = setInterval(isMusicRunning,10);
    }

    //判断音乐是否在播�?
    function isMusicRunning()
    {
        if(!myaudio.audioObj.paused)
        {
            clearInterval(interval_music);
            //音符图标开始旋�?
            interval_btn = setInterval(rotateBtn,50);
        }
    }

    function rotateBtn()
    {
        angle+=3;
        myaudio.btnObj.rotate(angle);
    }

    //定义一个Audio�?
    function Audio(name,btnName)
    {
        //注意！！！！！[0]
        this.audioObj = $("#" + name)[0];
        this.btnObj = $("#" + btnName);

        this.isRunning = function ()
        {
            return !(this.audioObj.paused);
        };

        this.changeState = function ()
        {
            if(this.isRunning())
            {
                this.pauseMusic();
                clearInterval(interval_btn);
            }
            else
            {
                this.playMusic();
                interval_btn = setInterval(rotateBtn,50);
            }
        };
        this.playMusic = function()
        {
            this.audioObj.play();
        };

        this.pauseMusic = function()
        {
            this.audioObj.pause();
        }


    }

    function audio()
    {
        myaudio.changeState();
    }
})





















//
//
//window.onload = function()
//{
//    myaudio = new Audio("myaudio","btnPlay");
//    readStateOfMusic();
//};
//
////�