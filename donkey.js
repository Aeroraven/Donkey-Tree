// ==UserScript==
// @name         Donkey Tree
// @namespace    http://tampermonkey.net/
// @version      0.2.3
// @description  try to take over the world!
// @author       Aeroraven
// @match        https://qah5.zhihuishu.com/qa.html*
// ==/UserScript==

(function() {
    'use strict';
unsafeWindow.s2 =function(){
    unsafeWindow.s2Timeout = setInterval(()=>{
        var x=document.getElementsByClassName("answer-li");
        if(x.length==0){
            return;
        }
        for(var i=0;i<x.length;i++){
            x[i].setAttribute('id',"fuckli-"+i);
            x[i].innerHTML+="<a onclick='window.fuck(this.parentNode.children[2].children[0].children[0]);' style='cursor:pointer'> [直接粘贴上方答案到答题区] </a><hr/>";
        }
        console.log("Find answers",x.length);
        clearInterval(unsafeWindow.s2Timeout);
    },1000)
}
unsafeWindow.fuck=function (x){
 let text = x.innerHTML;
    navigator.clipboard.writeText(text.slice(7).substring(0,text.length-14))
        .then(() => {
        //alert('Text copied to clipboard');
    })
        .catch(err => {
        alert('Error in copying text: ', err);
    });
    document.getElementsByTagName("textarea")[0].value=text.slice(7).substring(0,text.length-14);
}
unsafeWindow.applyShit=function(){
    document.getElementsByClassName("el-dialog__header")[0].children[0].children[1].innerHTML="我来回答 <a onclick='window.fuckPaste()'>【OvO 粘贴答案】</a>"
}
unsafeWindow.fuckPaste=function(){
    navigator.clipboard.readText().then(res=>{
        document.getElementsByTagName("textarea")[0].value=res;
        console.log("Pasted",res);
    })
    //(event.clipboardData || window.clipboardData).getData('text');
}
unsafeWindow.fl = 0;
unsafeWindow.t = setTimeout(function(){
    unsafeWindow.s2();
    console.log("Loaded");
},1000);

unsafeWindow.t3=setInterval(function(){
    if(document.getElementsByClassName("my-answer-btn").length!=0){
        document.getElementsByClassName("my-answer-btn")[0].click();
        clearInterval(unsafeWindow.t3);
        unsafeWindow.t4=setInterval(function(){
            if(document.getElementsByClassName("iconguanbi").length!=0){

                document.getElementsByClassName("iconguanbi")[0].click();
                clearInterval(unsafeWindow.t4);
            }
        },100);
    }
},100);
unsafeWindow.t2 =setInterval(function(){
    if(document.getElementsByClassName("el-dialog__header").length!=0){
        unsafeWindow.applyShit();
    }
    console.log("Applied");
},2500);

})();
setInterval(()=>(function() { function R(a){ona = "on"+a; if(window.addEventListener) window.addEventListener(a, function (e) { for(var n=e.originalTarget; n; n=n.parentNode) n[ona]=null; }, true); window[ona]=null; document[ona]=null; if(document.body) document.body[ona]=null; } R("contextmenu"); R("click"); R("mousedown"); R("mouseup"); R("selectstart");})(),1000)
