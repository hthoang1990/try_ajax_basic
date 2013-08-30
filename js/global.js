// JavaScript Document

function getList(act,result)
{
	$.ajax({
	
		type:"post",
	
		url:"ajax.php",
	
		data:"act="+act,
	
		success:function(data){
			
			$(result).html(data);
			
		}
	
	})
}


$(function(){
	var $del = $("#list > li > span");
	$del.click(function(){
		$(this).parent("li").remove();
	});
	
	var $getList = $(".btn");
	$getList.click(function(){
		var list = $(this).attr("id");
		getList(list,"#result-list");
	});	
})