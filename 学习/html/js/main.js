// JavaScript Document
$(document).ready(function(){  
    //异步加载js文件  
    $.getScript("js/getData.js", function(){
	  getData()
	});
    //异步加载片段  
    $("body").text("加载中...")  
    $("body").load("ajax-box.html",function(url,status,c){  
        if(status=="error"){  
            $(this).text("片段加载失败");  
        }  
    });  
  
})  