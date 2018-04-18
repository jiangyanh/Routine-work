
var et,len;
var index = 0;
jq(function(){

	len = jq('#wowslider-container1 li').length;
	jq('#page a:eq(0)').addClass('ws_selbull');
	et = setInterval('rollindex(0)',3000);
	divceter();
	jq(window).resize(function(){
		divceter();
	});
	jq('#wowslider-container1').bind({
		mouseover:function(){
			clearInterval(et);
		},
		mouseleave:function(){
			et = setInterval('rollindex(0)',4000);
	   }
	});
	jq('#next1').click(function(){
		rollindex(0);
	});
	jq('#prev1').click(function(){
		if(index==0){
			i = len;
		}else{
			i = index;
		}
		rollindex(i);
	});
	jq('#page a').click(function(e){
		var tx = jq(e.target).text();
		rollindex(tx);
	});
});
function divceter(){
	var w = jq(window).width();
	var left = -(1920 - Number(w))/2;
	jq('#wowslider-container1').attr('style','width:'+w+'px;');
	jq('#wowslider-container1 ul').css({marginLeft:left+"px"});
}
function rollindex(i){
	//jq('#wowslider-container1 li:eq('+index+')').fadeOut('fast');
	if(i > 0){
		var n = Number(i)-1;
	}else{
		var n = Number(index)+1;
	}
	if( n == len){
		jq('#page a:eq(0)').addClass('ws_selbull');
		jq('#page a:eq(0)').siblings().removeClass('ws_selbull');
		jq('#wowslider-container1 li:eq(0)').fadeIn('slow',function(){
			index = 0;
		}).siblings().hide();
		jq('#wowslider-container1 li span').show();
	}else{
		jq('#page a:eq('+n+')').addClass('ws_selbull');
		jq('#page a:eq('+n+')').siblings().removeClass('ws_selbull');
		jq('#wowslider-container1 li:eq('+n+')').fadeIn('slow',function(){
			index = n;
		}).siblings().hide();
		jq('#wowslider-container1 li span').show();
		
	}
	

}

