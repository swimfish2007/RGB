// JavaScript Document
addDOMLoadEvent(function(){
	regularNum();
});
var regularNum = function(){
	var num = /^[0-9a-fA-F]{1,2}$/;
	var numX = /^(\d|[1-9]\d|1[0-9]\d|2[0-4]\d|25[0-5])$/;
	getid("red").onchange = function(){
		num.test(getid("red").value)?true:(alert("红色值有误，请重新输入!!!"),getid("red").value = "");
	}
	getid("redX").onchange = function(){
		numX.test(getid("redX").value)?true:(alert("红色值有误，请重新输入!!!"),	getid("redX").value = "");
	}
	getid("green").onchange = function(){
		num.test(getid("green").value)?true:(alert("绿色值有误，请重新输入!!!"),getid("green").value = "");
	}
	getid("greenX").onchange = function(){
		numX.test(getid("greenX").value)?true:(alert("绿色值有误，请重新输入!!!"),getid("greenX").value = "");
	}
	getid("blue").onchange = function(){
		num.test(getid("blue").value)?true:(alert("蓝色值有误，请重新输入!!!"),getid("blue").value = "");
	}
	getid("blueX").onchange = function(){
		numX.test(getid("blueX").value)?true:(alert("蓝色值有误，请重新输入!!!"),getid("blueX").value = "");
	}
	getid("translate").onclick = function(){
		isNull(getid("red").value)?getid("result").innerHTML = '请输入红色值':isNull(getid("green").value)?getid("result").innerHTML = '请输入绿色值':isNull(getid("blue").value)?getid("result").innerHTML = '请输入蓝色值':(	getid("result").innerHTML = convertColorDec(getid("red").value,getid("green").value,getid("blue").value),getid("result").style.background = "rgb("+getid("result").innerHTML+")");
	}
	getid("rTranslate").onclick = function(){
		isNull(getid("redX").value)?getid("resultX").innerHTML = '请输入红色值':isNull(getid("greenX").value)?	getid("resultX").innerHTML = '请输入绿色值':isNull(getid("blueX").value)?getid("resultX").innerHTML = '请输入蓝色值':(getid("resultX").innerHTML = '#'+convertColorHex(getid("redX").value,getid("greenX").value,getid("blueX").value),getid("resultX").style.background = getid("resultX").innerHTML);
	}
}
function convertColorDec(){//Color,16->10
	var result='';
	for(var i=0;i<arguments.length;i++){
		i==arguments.length-1?result+= parseInt(arguments[i],16):result+= parseInt(arguments[i],16)+',';
	}
	return result;
}
function convertColorHex(){//Color,10->16
	var result='';
	for(var i=0;i<arguments.length;i++){
		result+=(parseInt(arguments[i])<16?'0'+(arguments[i],10).toString(16):parseInt(arguments[i],10).toString(16)).toUpperCase();
	}
	return result;
}
function isNull(data){//判断是否为空
	return (data == "" || data == undefined || data == null) ? 1 : 0;
}
function getid(id){
	return document.getElementById(id);
}
function addDOMLoadEvent(func) {
    if (!window.__load_events) {
       var init = function () {
           // quit if this function has already been called
           if (arguments.callee.done) return;
           // flag this function so we don't do the same thing twice
           arguments.callee.done = true;
           // kill the timer
           if (window.__load_timer) {
               clearInterval(window.__load_timer);
               window.__load_timer = null;
           }
           // execute each function in the stack in the order they were added
           for (var i=0;i < window.__load_events.length;i++) {
              window.__load_events[i]();
           }
           window.__load_events = null;
       };
       // for Mozilla/Opera9
       if (document.addEventListener) {
           document.addEventListener("DOMContentLoaded", init, false);
       }
       // for Internet Explorer
       /*@cc_on @*/
       /*@if (@_win32)
           document.write("<scr"+"ipt id=__ie_onload defer src=//0><\/scr"+"ipt>");
           var script = document.getElementById("__ie_onload");
           script.onreadystatechange = function() {
               if (this.readyState == "complete") {
                   init(); // call the onload handler
               }
           };
       /*@end @*/
       // for Safari
       if (/WebKit/i.test(navigator.userAgent)) { // sniff
           window.__load_timer = setInterval(function() {
               if (/loaded|complete/.test(document.readyState)) {
                   init(); // call the onload handler
               }
           }, 10);
       }
       // for other browsers
       window.onload = init;
       // create event function stack
       window.__load_events = [];
    }
    // add function to event stack
    window.__load_events.push(func);
}