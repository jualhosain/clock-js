var hour=document.querySelector(".hour");
var min=document.querySelector(".minute");
var sec=document.querySelector(".secound");

setInterval(function(){
  let data=new Date();
  mainHour= data.getHours()/12;
  mainMin= data.getMinutes()/60;
  mainSec=data.getSeconds()/60;


  hour.setAttribute("style",`transform:rotate(${mainHour*360}deg`);
  min.setAttribute("style",`transform:rotate(${mainMin*360}deg`);
  sec.setAttribute("style",`transform:rotate(${mainSec*360}deg`);
},1000);
