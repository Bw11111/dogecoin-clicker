var clicks = 0;
click4 = false
var tokens = 0;
var rebirths = 0;
var clicksper = 1;
function addClick() {
  clicks += clicksper;

  clicks = parseInt(clicks)
  saves = localStorage.setItem("bitcoin", clicks);
  document.getElementById("display").innerHTML = clicks + " clicks";
  if(clicks > 10000000) {
  
  document.getElementById("op2").style.display = "block";

  }
}
function start() {
  var audio = new Audio('play.wav');
  audio.play();
  document.querySelector(".start").style.display = "none";
  
    document.querySelector(".game").style.display = "block";
  document.getElementById("closer").style.display="block";
  
}
function rebirth() {
  if(clicks >= 500000) {
    tokens++
    clicks = 0;
    clicks = parseInt(clicks)
      document.getElementById("display").innerHTML = clicks + " clicks";
              document.getElementById("tokens").innerHTML = tokens + " tokens";
  }
}
function addPer() {
  if(clicks >= 1000) {
    clicksper++
    clicks -= 1000;
  }
}
function closeShop() {
  document.querySelector(".shop").style.display = "none";
  document.querySelector(".shop2").style.display = "none";
  document.querySelector(".game").style.display = "block";
  document.getElementById("closer").innerHTML = "Shop";
  document.getElementById("closer").setAttribute("onclick", "openShop()");
}
function openShop() {
  document.querySelector(".shop").style.display = "block";
  document.querySelector(".shop2").style.display = "block";
  document.querySelector(".game").style.display = "none";
  document.getElementById("closer").innerHTML = "Close Shop";
  document.getElementById("closer").setAttribute("onclick", "closeShop()");
}
function buyBoost1() {
  if(clicks > 500) {
    clicks -= 500;
    clicksper = clicksper * 1.01;
    document.getElementById("display").innerHTML = clicks + " Clicks";

  }
}
function buyBoost2() {
  if(tokens >= 5) {
    tokens -= 5;
    clicksper = clicksper * 2;
    document.getElementById("tokens").innerHTML = tokens + " Tokens";

  }
}
function help() {
  document.getElementById('help').style.display = "block";
  
  document.getElementById('shop').style.display = 'none';
  document.getElementById('shop2').style.display = 'none';
  document.getElementById('closer').style.display = 'none';
}
var clicks2 = window.location.search;
function getClicks() {
  clicks2 -= "?clicks=";
  clicks = parseInt(clicks2);
  
}
function give() {
  clicksper += 100;
  document.getElementById("op").style.display = "none";
}
function load() {
      tester = localStorage.getItem("bitcoin");
  tester2 = parseInt(tester);
  clicks = tester2;
}
function newWorld() {
  window.location.assign("/World2?clicks=" + clicks);
}