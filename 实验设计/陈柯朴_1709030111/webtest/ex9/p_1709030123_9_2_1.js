function compute()
			{
			var s1=parseInt($("start").value);
			var e1=parseInt($("end").value);
			if(s1>=e1){
				alert("请输入起始数小于终止数的数");
			}else{
				for(var i=s1,sum=0;i<=e1;i++)
				{
					sum=sum+i;
				}
				$("sum").value=sum;
			}
			}
			function $(id){return document.getElementById(id)
				
			}