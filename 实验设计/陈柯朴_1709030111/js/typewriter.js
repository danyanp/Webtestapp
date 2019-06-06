(function(a) {
	a.fn.typewriter = function(speed) {
		this.each(function() {
			var d = a(this),
				c = d.html(),
				b = 0;
			console.log(c)
			// setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
			var e = setInterval(function() {
					if (b >= c.length) {
						clearInterval(e)
					}
					// console.log(c) <h5>WEB前端开发技术实验与实践</h5>
					// substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
					var f = c.substr(b, 1);
					if (f == "<") {
						// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
						b = c.indexOf(">", b) + 1
					} else {
						b++
					}
					d.html(c.substring(0, b) + (b & 1 ? "_" : ""));
				},
				speed)
		});
		return this;
	}
})(jQuery);
//<script type="text/javascript">
//			(function() {
//				$("#code").fn.typewriter = function() {
//					this.each(function() {
//						var d = a(this),
//							c = d.html(),
//							b = 0;
//						d.html("");
//						var e = setInterval(function() {
//							var f = c.substr(b, 1);
//							if(f == "<") {
//								b = c.indexOf(">", b) + 1
//							} else {
//								b++
//							}
//							d.html(c.substring(0, b) + (b & 1 ? "_" : ""));
//							if(b >= c.length) {
//								clearInterval(e)
//							}
//						}, 75)
//					});
//					return this
//				}
//			})(jQuery);
//</script>
