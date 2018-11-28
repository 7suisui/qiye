// JavaScript Document
$(function(){
	

var arr=["","姓名","电话","邮件","验证码"];
			$("input").each(function(index,element){
				$(element).focus(function(){
					if($(element).val()==arr[index]){
						$(this).val("")
					}
				}).blur(function(){
					if($(this).val()==""){
						$(this).val(arr[index]);
					}
						
					})
				
			})
		})	
