var browser={

    versions:function(){
    
    var u = navigator.userAgent, app = navigator.appVersion;
    
    return {//移动终端浏览器版本信息
    
    trident: u.indexOf('Trident') > -1, //IE内核
    
    presto: u.indexOf('Presto') > -1, //opera内核
    
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
    
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    
    iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
    
    iPad: u.indexOf('iPad') > -1, //是否iPad
    
    webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
    
    };
    
    }(),
    
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
    
    } 
if(browser.versions.mobile || browser.versions.ios || browser.versions.android||browser.versions.iPhone || browser.versions.iPad)
{
    //alert("mobile");
    // document.body.style.height="1800px";
    document.getElementById("IWantSay").style.width="80%";
    document.getElementById("IWantSay").style.left="10%";
}
else
{
    
}
creEntrance("fuckinpic/fun.png","胜地不常","get lost","http://shrike.site:626/Scenery",1,"8%","45%");
creEntrance("fuckinpic/mad.png","胡言乱语","250 words","http://shrike.site:626/Essay",1,"30%","45%");
creEntrance("fuckinpic/shit.png","一些作品","some shits","http://shrike.site:626/Project",0,"30%","45%");
creEntrance("fuckinpic/noise.jpg","快憋弹了","stop making noise","http://shrike.site:626/Noise",0,"8%","45%");

function creEntrance(imgsrc,pc,pe,link,isLeft,howmuch,top){
    var theDiv=document.createElement("div");
    theDiv.className="entrance";
    document.getElementById("Background").appendChild(theDiv);
    theDiv.style.width="160px";
    theDiv.style.height="400px";
    theDiv.style.position="absolute";
    theDiv.style.top=top;
    if(isLeft){
        theDiv.style.left=howmuch;
    }
    else{
        theDiv.style.right=howmuch;
    }
    var theA=document.createElement("a");
    theDiv.appendChild(theA);
    theA.className="atag";
    theA.target="_blank";
    theA.href=link;
    

    var theImg=document.createElement("img");
    theA.appendChild(theImg);
    theImg.className="myimg";
    theImg.src=imgsrc;

    var thepc=document.createElement("p");
    theA.appendChild(thepc);
    thepc.className="pc";
    thepc.innerHTML=pc;

    var thepe=document.createElement("p");
    theA.appendChild(thepe);
    thepe.className="pe";
    thepe.innerHTML=pe;
}
