/*
* @Author: Sing-V
* @Date:   2018-07-20 13:43:47
* @Last Modified by:   Sing-V
* @Last Modified time: 2018-07-23 01:27:30
*/
window.onload=function(){
	let shop=document.getElementsByClassName("shop")[0];
	let pullDown=shop.getElementsByClassName("pullDown")[0];
	console.log(shop,pullDown);
	
	
	
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

	console.log(neiKuai,cha,pullRight);
	for(let i=0;i<cha.length;i++){
		cha[i].onmouseenter=function(){
			for(let j=0;j<cha.length;j++){
				pullRight[j].style.display="none";
				pullRight[j].style.background="none";
			}
			pullRight[i].style.display="block";
			pullRight[i].style.background="red";
		}
		cha[i].onmouseleave=function(){
			pullRight[i].style.display="none";
		}
	}




	let bigBox=document.getElementsByClassName("bigBox")[0];
    let logoBox=bigBox.getElementsByClassName("logoBox")[0];
    let nav=logoBox.getElementsByClassName("nav")[0];
    let xia=nav.getElementsByClassName("xia");
    let logoCon=document.getElementsByClassName("logoCon");
    console.log(xia,logoCon);
    for(let i=0;i<xia.length-2;i++){
    	xia[i].onmouseenter=function () {
			for(let j=0;j<xia.length-2;j++){
                logoCon[j].style.display="none";
			}
            logoCon[i].style.display="block";
            logoCon[i].style.height="230px";
            logoCon[i].style.background="red";
            logoCon[i].style.borderTop="1px solid #E0E0E0";
            logoCon[i].style.boxShadow="0 7px 6px rgba(0,0,0,0.2)";
        }
        xia[i].onmouseleave=function () {
            logoCon[i].style.display="none";
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
			console.log(xingcan,top,ul,li,rightCon);
	
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
	
	
}