//trigger按钮 overlay遮蔽层
var trigger = $('.hamburger'),
	overlay = $('.overlay'),
	aview = $('.aview'),
	index = $('#index'), 
	isClosed = false;

// 在文档加载后激活函数
$(document).ready(function() {
		$('.iframeisshow').hide();
		//点击主页 点击主页 focusinfo显示  iframeisshow不显示
		index.click(function(){
			hamburger_cross();
			$('#wrapper').toggleClass('toggled');
			$('.focusinfo').fadeIn("slow");
			$('.header-info').fadeIn("3000");
			$('.top-social').fadeIn("3500");
			$('.iframeisshow').hide();
		})
		//单击菜单栏选项
		aview.click(function() {
			hamburger_cross();
			$('.focusinfo').hide();
			$('.header-info').hide();
			$('.top-social').hide();
			$('.iframeisshow').fadeIn("slow");
			$('#wrapper').toggleClass('toggled');
			//action_iframe();
		})
		//单击菜单按钮
		trigger.click(function() {
			hamburger_cross();
		});

		function hamburger_cross() {
			if (isClosed == true) {
				//设置关闭
				overlay.hide();
				trigger.removeClass('is-open');
				trigger.addClass('is-closed');
				isClosed = false;
			} else {
				//设置打开
				overlay.show();
				trigger.removeClass('is-closed');
				trigger.addClass('is-open');
				isClosed = true;
			}
		}
		// bootstrap中data-toggle等属性主要作用：单击显示，单击隐藏。
		$('[data-toggle="offcanvas"]').click(function() {
			$('#wrapper').toggleClass('toggled');
		});
// 		
// 		//显示iframe动画
// 		function action_iframe(){
// 			// var title = "<div class='col-md-6 col-md-offset-3'><img src='img/hdImg.jpg' style='width: 70px;height: 70px;border-radius: 50%;float: right;margin-top: 10px;'></div><div class='col-md-6'><p align='center' style='font-size: 40px;color: #000000;'>实训展示：</p></div>"
// 			// $('.hdrow').html(title)
// 			 //      $(".header-tou").animate({
// 				//   right:'250px',
// 				//   opacity:'1',
// 				//   width:'170px',
// 				//   height:'170px',
// 				// });
// 				// $(".header-tou").append("<p align='center' style='padding-top:20px; font-size: 30px;color: #000000;'>实训展示：</p>");
// 		}
// 		
	});
