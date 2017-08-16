//滚动加载图片
$(function () {
    var num = document.getElementsByTagName('img').length;
    var img = document.getElementsByTagName("img");
    var n = 0;
    lazyload();
    window.onscroll = lazyload;
    function lazyload() {
        var seeHeight = document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = n; i < num; i++) {
            if (img[i].offsetTop < seeHeight + scrollTop) {
                if (img[i].getAttribute("src") == "../img/roll.gif") {
                    img[i].src = img[i].getAttribute("data-src");
                }
                n = i + 1;
            }
        }
        var scrollTop2=$(window).scrollTop();
        scrollTop2=scrollTop2/75+1.12+"rem";
        $(".login").css("top",scrollTop2);
    }
    $(".searchBar").click(function () {
        $("#divMain,.siteBtm,.siteRight").hide();
        $(".search").show();
    });
    $("#searchCls,.iconCls").click(function () {
        $(".search").hide();
        $("#divMain,.siteBtm,.siteRight").show();
    });
    var fixHeight = $(window).height();
    $(".ysFilter,.inner").css("height",fixHeight);
    //登陆框高度和位置
    //fixHeight=fixHeight/75-1.12+"rem";
    $(".login").css("height",fixHeight);
    $("#topUser").click(function(){
        //$(".login").offsetHeight=1.12;
        $(".login").show();
    });
    $("#loginPageBtn").click(function(){
        $(".login").hide();
    });
    $(".btnOK").click(function(){
        $(".ysFilter").hide();
    });
    $(".filter").click(function(){
        $(".ysFilter").show();
    });
    $(".goodsList ul li").click(function(){
        var goodsLink=$(this).attr("data-link");
        window.location.href='contentGoods.html='+goodsLink;
    });
    //动态加载月嫂列表
    $('#ysBlock').on('touchmove',function(){
        //判断最后一个元素是否在底部之上
        if( $('.ysChid').eq($('.ysChid').length-1).offset().top-$(window).scrollTop() < $(window).height() ){
            //alert("scrollBottom");
            $('.bottom-line').show();
            checkPull();
        }
    });
    //添加元素
    function checkPull(){
        var ysChidNew;
        ysChidNew=document.createDocumentFragment();
        //每次添加6条内容
        for(var j=6;j>0;j--){
            var li=document.createElement('li');
            li.className="ysChid listBg";
            li.innerHTML=$('.ysChid').eq($('.ysChid').length-1).html();
            ysChidNew.appendChild(li);
        }
        $('#ysBlock')[0].appendChild(ysChidNew);
        //$(".bottom-line").hide();
    }
});
