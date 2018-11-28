// JavaScript Document
			
				$("textarea").focus(function(){
					if($(this).val()=="内容"){
						$(this).val("")
					}
				}).blur(function(){
					if($(this).val()==""){
						$(this).val("内容");
					}
						
					})
				