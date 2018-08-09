/*
* @Author: Sing-V
* @Date:   2018-07-20 13:43:47
* @Last Modified by:   Sing-V
* @Last Modified time: 2018-07-30 21:52:14
*/
window.onload=function(){



    let input=document.querySelector(".con1");
    let icon=document.querySelector(".icon-sousuo");
    let zong=document.querySelector(".input");
    let con=document.querySelector(".con");
    let exm=document.querySelectorAll(".exm");
    let pullList=document.querySelector(".pullList");



    console.log(pullList);
    
    
    exm.onmouseenter=function(){
        exm.style.background="#ff6700"
    }

    input.onfocus=function(){
        zong.style.borderColor="#ff6700";
        icon.style.borderColor="#ff6700";
        exm[1].style.display="none";
        exm[0].style.display="none";
        pullList.style.display="block";

    }
    input.onblur=function(){
        zong.style.borderColor="";
        icon.style.borderColor="";
        exm[0].style.display="block";
        exm[1].style.display="block";
        pullList.style.display="none";

    }




























	let shop=document.getElementsByClassName("shop")[0];
	let pullDown=shop.getElementsByClassName("pullDown")[0];
	
	
	
	shop.onmouseenter=function(){
		pullDown.style.height="100px";
		pullDown.style.boxShadow="0 5px 4px rgba(0,0,0,0.4)";
	}


	shop.onmouseleave=function(){
		pullDown.style.height=0;
		pullDown.style.boxShadow="none";
	}



	let neiKuai=document.getElementsByClassName("neiKuai")[0];
	let cha=document.getElementsByClassName("cha");[0]
	let pullRight=document.getElementsByClassName("pullRight");

	for(let i=0;i<cha.length;i++){
		cha[i].onmouseenter=function(){
			for(let j=0;j<cha.length;j++){
				pullRight[j].style.display="none";
				pullRight[j].style.background="none";
			}
			pullRight[i].style.display="block";
			pullRight[i].style.background="white";
		}
		cha[i].onmouseleave=function(){
			pullRight[i].style.display="none";
		}
	}



		//导航下拉框
	let bigBox=document.getElementsByClassName("bigBox")[0];
    let logoBox=bigBox.getElementsByClassName("logoBox")[0];
    let nav=logoBox.getElementsByClassName("nav")[0];
    let xia=document.querySelectorAll(".nav .xia");
    let logoCon=document.querySelectorAll(".logoCon");
    for(let i=0;i<xia.length-2;i++){
    	xia[i].onmouseenter=function () {
			for(let j=0;j<xia.length-2;j++){
                logoCon[j].style.display="none";
			}
            logoCon[i].style.display="block";
            logoCon[i].style.height="230px";
            logoCon[i].style.background="white";
            logoCon[i].style.borderTop="1px solid #E0E0E0";
            logoCon[i].style.boxShadow="0 7px 6px rgba(0,0,0,0.2)";
        }
        xia[i].onmouseleave=function () {
            
            logoCon[i].style.height=0;     
            logoCon[i].style.background="none";
            logoCon[i].style.boxShadow="none";
            logoCon[i].style.borderTop="none";
        }
	}





    
	function hs(xingcan){
			let top=xingcan.getElementsByClassName("top")[0];
			let ul=top.getElementsByTagName("ul")[0];
			let li=ul.getElementsByTagName("li");
			let con=xingcan.getElementsByClassName("con")[0];
			let rightCon=con.getElementsByClassName("rightCon");
	
		for(let i=0;i<li.length;i++){
			li[i].onmouseenter=function(){
				for(let j=0;j<li.length;j++){
					rightCon[j].style.display="none";
					li[j].style.color="#000";
					li[j].style.border="none";
				}
					rightCon[i].style.display="block";
					li[i].style.borderBottom="2px solid #ff6700";
					li[i].style.color="#ff6700";
				}
			
			}
	}
		let goods=document.getElementsByClassName('goods')[0];
		hs(goods);
		let zhineng=document.getElementsByClassName('zhineng')[0];
		hs(zhineng);
		let dapei=document.getElementsByClassName('dapei')[0];
		hs(dapei);
	
	










		//轮播图



	let warper=document.querySelector(" .warper");
	let list=document.querySelectorAll(".warper .list");
	let btns=document.querySelector(".warper .btns");
	let son=btns.getElementsByClassName("son");
    let zuo=document.querySelector(".prev");
	let you=document.querySelector(".next");
	widths=parseInt(getComputedStyle(warper,null).width);


    let now=0;
    let next=0;
    let flag=true;
    let t=setInterval(move3,2000);
    function move3() {
        next++
        if(next==list.length) {
            next = 0;
        }
        for(i=0;i<son.length;i++){
        	son[i].style.background="none";
			}
        	son[now].style.background="#fff";
        /*son[now].classList.remove("hot");
        son[next].classList.add("hot");*/
        list[next].style.left=widths+"px";
        animate(list[now],{left:-widths},callback);
        animate(list[next],{left:0},callback);

        // function(){
        	//
		// }
        now=next;
    }
    function callback() {
		flag=true;
    }


    function move4() {
		next--;
		if(next<0){
			next=list.length-1;
		}
        for(i=0;i<son.length;i++){
                son[i].style.background="none";
            }
            son[next].style.background="#fff";


		list[next].style.left=-widths+"px";
        /*son[now].classList.remove("hot");
        son[next].classList.add("hot");*/
		animate(list[now],{left:widths},callback);
		animate(list[next],{left:0},callback);
		now=next;
    }
    warper.onmouseenter=function(){
    	clearInterval(t);
	}
	warper.onmouseleave=function() {
       t = setInterval(move3, 2000);
    }
    zuo.onclick=function () {
    	
            if(flag==false){
                return;
            }
            else{
                flag=false;
                move4();
                
            }
           

    	/*if(now==list.length-1){
    		return;
		}
		else {
		move4();
        }*/
    }
    you.onclick=function () {
    	/*if(flag==false){
    		return;
		}
		else {
    		flag=false;
    		move3();
		}
        if(next==list.length-1) {
            return;
        }
        flag=false;*/
        if(flag==false){
            return;
        }
        else{
            flag=false;
            move3();
        }
		

    }
    for(let i=0;i<son.length;i++){
	son[i].onclick=function () {
    	if(i==now){
    		return;
		}
		if(i<now){
    		animate(list[i],{left:0});
    		animate(list[now],{left:widths});
		}
		if(i>now){
    		animate(list[i],{left:0});
    		animate(list[now],{left:-widths});
		}
		for(j=0;j<list.length;j++){
    		son[j].style.background="";

		}
        son[i].style.background="#fff";
    	now=next=i;

    	}
    }


    /*let banner=document.getElementsByClassName("banner")[0];
	let warper=banner.getElementsByClassName("warper")[0];
	let imgBox0=warper.getElementsByClassName("imgBox0")[0];
	let a=imgBox0.getElementsByTagName("a");
	let prev=warper.getElementsByClassName("prev")[0];
	let next=warper.getElementsByClassName("next")[0];
	let btns=document.getElementsByClassName("btns")[0];
	let son=btns.getElementsByClassName("son");

	console.log(banner,warper,imgBox0,prev,next,btns,son);

    let t=setInterval(move,2000);
    let num=0;
    function move(){
        num++;
        console.log(num);

        if(num==a.length){
            num=0;
        }
        for(let i=0;i<a.length;i++){
            a[i].style.zIndex=5;
            son[i].style.background=0;

        }
        a[num].style.zIndex=10;
        son[num].style.background="rgba(255,255,255,.9)";
    }

    warper.onmouseenter=function(){
        clearInterval(t);
    }
    warper.onmouseleave=function(){
        t=setInterval(move,2000);
    }
    next.onclick=function(){
        move();
    }

    function move1(){
        num--;
        if(num<0){
            num=a.length-1;
        }
        for(let j=0;j<a.length;j++){
            a[j].style.zIndex=5;
            son[j].style.background="rgba(255,255,255,.1)";
        }
        a[num].style.zIndex=10;
        son[num].style.background="rgba(255,255,255,.9)";
    }
        prev.onclick=function(){
        move1();
    }


        for(let i=0;i<son.length;i++){
            son[i].onclick=function(){
            for(let j=0;j<son.length;j++){
                a[j].style.zIndex=5;
                son[j].style.background="";
                }
            a[i].style.zIndex=10;
            son[i].style.background="rgba(255,255,255,.9)";
            num=i;
        }

    }*/



    //闪购

	let bl=document.querySelector(".BL");
	let br=document.querySelector(".BR");
	let miList=document.querySelector(".ye");
	let listWidth=parseInt(getComputedStyle(miList,null).width)/2;

    let time=0
    bl.onclick=function () {
		time++;
		if(time==2){
			time=1;
		}

		miList.style.transform=`translateX(${-listWidth*time}px)`;

    }
    br.onclick=function () {
        time--;
        if(time<0){
			time=0;
        }

        miList.style.transform=`translateX(${-listWidth*time}px)`;

    }


    let box=document.querySelectorAll(".content .box");
    box.forEach(function(v){
        fn22(v);
    })
  




  //内容
 function fn22(obj){
    let tcon=obj.querySelectorAll(".tcon");
    let turn=obj.querySelectorAll(".tcon");
    let you1= obj.querySelector(".you");
    let zuo1= obj.querySelector(".zuo");
    let btn=obj.querySelectorAll(".point li");

	Width=parseInt(getComputedStyle(obj,null).width);
    // console.log(box, turn,Width,zuo1,you1,tcon);

    let now1=0;
    let next1=0;
	you1.onclick=function () {
		next1++;
        if(next1>=tcon.length){
            return;
        }
		tcon[next1].style.left=Width+"px";
		animate(tcon[now1],{left:-Width});
		animate(tcon[next1],{left:0});
		now1=next1
		for(i=0;i<btn.length;i++){
            btn[i].style.backgroundColor="";
            btn[now1].style.border="";

        }

        btn[now1].style.backgroundColor="#ff6700";


    }
    zuo1.onclick=function () {

        if(now1==0){
            return;
        }
        next1--;
        tcon[next1].style.left=-Width+"px";
        animate(tcon[now1],{left:Width});
        animate(tcon[next1],{left:0});
        now1=next1
        for(i=0;i<btn.length;i++){
            btn[i].style.backgroundColor="";
        }
        btn[now1].style.backgroundColor="#ff6700";
    }


		for(let i=0;i<btn.length;i++){
		btn[i].onclick=function () {
			if(i==now1){
				return;
			}
			if(i<now1){
				animate(tcon[i],{left:0});
				animate(tcon[now1],{left:Width});
			}
            if(i>now1){
                animate(tcon[i],{left:0});
                animate(tcon[now1],{left:-Width});
            }
            for(j=0;j<tcon.length;j++){
				btn[j].style.background="";
			}
			btn[i].style.background="#ff6700";
			next1=next1=i;
		}
    }

}

    





    //推荐
    let cl=document.querySelector(".cl");
    let cr=document.querySelector(".cr");
    let big=document.querySelector(".big");
    let wb=parseInt(getComputedStyle(big,null).width)/3;

    let time2=0
    cr.onclick=function(){
        time2++;
         if(time2==3){
            time2=2;
        }
        big.style.transform=`translateX(${-wb*time2}px)`;
    }
     cl.onclick=function () {
        time2--;
        if(time2<0){
            time2=0;
        }

       big.style.transform=`translateX(${-wb*time2}px)`;

    }




   












    times1();
    setInterval(times1,1000);
    function times1() {
        let span=document.querySelectorAll(".dan a span");
        let now=new Date();
        let future=new Date(2018,6,31,24);
        let time=(future-now)/1000;

        let arr=[];
/*
        month=Math.floor(time/(31*24*60*60));
        arr.push(month);

        time=time%(31*24*60*60);
        day=Math.floor(time/(24*60*60));
        arr.push(day);
*/

        time=time%(24*60*60);
        hour=Math.floor(time/(60*60));
        if(hour>=1 && hour<=9){
            hour="0"+hour;
        }
        arr.push(hour);

        time=time%(60*60);
        mine=Math.floor(time/60);
        if(mine>=1 && mine<=9){
            mine="0"+mine;
        }
        arr.push(mine);

        s=Math.floor(time%60);
        if(s>=1 && s<=9){
            s="0"+s;
        }
        arr.push(s);

        arr.forEach(function (element,index){
            span[index].innerText=element;
        });
    }


}