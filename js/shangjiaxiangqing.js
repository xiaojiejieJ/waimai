/*
* @Author: 我的文档
* @Date:   2018-09-13 13:04:33
* @Last Modified by:   nanjiao
* @Last Modified time: 2018-09-16 16:21:37
*/
window.onload=function () {
let jia=document.querySelector("nav .content ul li:nth-child(2) .wenzi .wu img");
let jian=document.querySelector("nav .content ul li:nth-child(2) .wenzi .wu img:nth-of-type(2)");
let num=document.querySelector("nav .content ul li:nth-child(2) .wenzi .wu h6");
let bot=document.querySelector(".bot");
let cover=document.querySelector(".mask");
let jiesuan=document.querySelector(".bot .qisong");
let heji=document.querySelector(".bot .weixuan h1 span");
let zong=document.querySelector(".mask .upper .xia h5 span");
let guan=document.querySelector(".mask .upper .tu p");
let count=0;
// console.log(guan);
jia.onclick=function () {
    count++;
    num.innerHTML=count;
    jian.style.display="block";
    num.style.display="block";
    bot.style.display="block";
    heji.innerHTML=count*30;
    let i=heji.innerHTML;
    // console.log(i);
    zong.innerHTML=parseInt(i)+5;
}
jian.onclick=function () {
    count--;
    num.innerHTML=count;
    heji.innerHTML=count*30;
    let j=heji.innerHTML;
    zong.innerHTML=parseInt(j)+5;
    if (count==0){
        jian.style.display="none";
        num.style.display="none";
        bot.style.display="none";
    }

}
jiesuan.onclick=function () {
    cover.style.display="block";
}
guan.onclick=function () {
    cover.style.display="none";
}
}