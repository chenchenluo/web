 
 
    //一级分类
    var type1=["一级目录1","一级目录2","一级目录3"];   
    //二级分类
    var type2=[
       ["二级目录11","二级目录12","二级目录13","二级目录14"],
       ["二级目录21","二级目录22","二级目录23","二级目录24"],
       ["二级目录31","二级目录32","二级目录33","二级目录34"]
    ]
   
    //初始化一级目录
    var countArea;
    function Init(){
    	countArea=""; 	 
    	for(var i=0;i<type1.length;i++){
    		 countArea +="<li onclick='selectP("+ i +")'>"+type1[i]+"</li>"
    	}
    	$("#sort1").html(countArea)
    }Init();
    
    //选择一级目录
    function selectP(i){
    	if($("#sort1 li").eq(i).hasClass("current")){
    		$(".banner2").fadeOut();
    	    $(".banner3").hide();
    	    $("#sort1 li").eq(i).removeClass("current");
    	}else{
    		countArea = "";  
	    	for (var j=0; j<type2[i].length; j++) {
					countArea += '<li  class="tab" >' + type2[i][j] + ' </li>';
				}
	    	$(".banner2").fadeIn();
	    	$(".banner3").hide();
	    	$(".arrow"+i+"").show().siblings(".arrow").css({"display":"none"});
	    	$("#sort2").html(countArea);
	    	$("#sort1 li").eq(i).addClass("current").siblings().removeClass("current");
    	}
    	
    }
   //选择二级目录
    $("body").on("click",".tab",function(){
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".banner3").fadeIn();
    	/* 获取分类id
    	 * 根据id用ajax在后台获取该分类下面的数据
    	 * 进行拼接显示数据*/
    });
    
    
    
    getTime();//初始化时间
    window.onload=function(){
    	setInterval(getTime,1000);
    }   
    function getTime(){
    	//获取当前时间
     var currentDate=new Date();
     var time=currentDate.toLocaleTimeString();//时间
     var week=currentDate.getDay();//获取当前星期
     var data=currentDate.toLocaleDateString();//当前日期
     
     var weekday="";
     switch(week){
     	case 1:
	     	weekday="星期一";
	     	break;
     	case 2:
	     	weekday="星期二";
	     	break;
     	case 3:
	     	weekday="星期三";
	     	break;
     	case 4:
	     	weekday="星期四";
	     	break;
     	case 5:
	     	weekday="星期五";
	     	break;
     	case 6:
	     	weekday="星期六";
	     	break;
     	default:
	     	weekday="星期天";
	     	break; 	 
     }    
     $(".date").html(data);
     $(".week").html(weekday);
     
     var x=time.substring(0,3);
     var y="";
     if(x=="下午"){
     	y="PM"
     }else{
     	y="AM"
     }     
     var z=time.substring(2,time.length-3);    
     $(".clock").html(z+y);
    };
    
  