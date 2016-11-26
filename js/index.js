$(function()
{
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1||u.indexOf('iPhone') > -1||u.indexOf('Windows Phone') > -1||navigator.userAgent.indexOf("iPad")>-1) {
        $(".hover-bg .hover-text").css({'opacity':'1'});

        $(".hover-bg .hover-text>h4").css({'opacity':'1','-webkit-transform':'translateY(0)','transform':'translateY(0)'});

        $(".hover-bg .hover-text>i").css({'opacity':'1'});
    }


    

});

