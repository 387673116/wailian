	function is_weixin() {
      var UserAgent = navigator.userAgent.toLowerCase();
      if (UserAgent.match(/MicroMessenger/i) == "micromessenger") {
          return true;
      } 
      else {
          return false;
      }
		}
       function isQQApp(){
       	var UserAgent = navigator.userAgent.toLowerCase();
        var android = UserAgent.indexOf('android');
        var iphone = UserAgent.indexOf('iphone');
        if(android > 0){
            var qqapp_sq = UserAgent.indexOf('v1_and_sq');
            var qqapp_d = UserAgent.indexOf('yyb_d');
            var qq = UserAgent.indexOf('qq');
            if(qq > 0 && (qqapp_sq > 0 || qqapp_d > 0))
            {
                return true;
            }

            var qqbrowser = UserAgent.indexOf('mqqbrowser');
            var netType =  UserAgent.indexOf('nettype');
            var webp =  UserAgent.indexOf('webp');
            if(qqbrowser > 0 && netType > 0 && webp >0){
                return true;
            }
        }
        if(iphone > 0){
            var qqbrowser = UserAgent.indexOf('qq/');
            var netType =  UserAgent.indexOf('nettype');

            if(qqbrowser > 0 && netType > 0){
                return true;
            }
        }
        return false;
    }
    var isQQApp = isQQApp();
		var isWeixin = is_weixin();
		var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
		function loadHtml(){
			var div = document.createElement('div');
			div.id = 'weixin-tip';
			var UserAgent = navigator.userAgent.toLowerCase();
        	var android = UserAgent.indexOf('android');
        	var iphone = UserAgent.indexOf('iphone');
			if(iphone > 0){
			div.innerHTML = '<p><img src="https://obs-hwe2-p1.obs.cn-east-2.myhwclouds.com/media/72000079/15965272261073.png" alt="微信打开"/></p>';
			}else{
				div.innerHTML = '<p><img src="https://obs-hwe2-p1.obs.cn-east-2.myhwclouds.com/media/72000079/15965271954977.png" alt="微信打开"/></p>';
			}
			document.body.appendChild(div);
		}
		
		function loadStyleText(cssText) {
	        var style = document.createElement('style');
	        style.rel = 'stylesheet';
	        style.type = 'text/css';
	        try {
	            style.appendChild(document.createTextNode(cssText));
	        } catch (e) {
	            style.styleSheet.cssText = cssText; //ie9以下
	        }
            var head=document.getElementsByTagName("head")[0]; //head标签之间加上style样式
            head.appendChild(style); 
	    }
	    var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center;height: 100%;}#weixin-tip img {width: 100%;height: 100%;background-size: cover;}";
		if(isWeixin){
			loadHtml();
			loadStyleText(cssText);
		}else if(isQQApp){
			loadHtml();
			loadStyleText(cssText);
		}else{
            
        }
