/**
 * 	@author: 何伊莎
 *  @date:   2016-10-9
 * 	@copyright by myself
 * 	@email:  he_yisha@163.com
 *  @version: 1.0.0
 */
$(function(){
    function Tab(){
        var $tab = $(".tabs > img");
        $tab.eq(0).show();
        var a = $(".buttons-left").find("a");
        $(".buttons-left").find("a").each(function(index){
            $(this).on("click",function(){
                $(this).addClass("ac");
                $(this).siblings().removeClass();
                $tab.eq(index).show().siblings().hide();
            });
        });
    }
    Tab();
});

