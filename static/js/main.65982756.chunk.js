(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"./images/w1.png"},{id:2,image:"./images/w2.png"},{id:3,image:"./images/w3.png"},{id:4,image:"./images/w4.png"},{id:5,image:"./images/w5.png"},{id:6,image:"./images/w6.png"},{id:7,image:"./images/w7.png"},{id:8,image:"./images/w8.png"},{id:9,image:"./images/w9.png"},{id:10,image:"./images/w10.png"},{id:11,image:"./images/w11.png"},{id:12,image:"./images/w12.png"}]},,,function(e,n,t){e.exports=t(25)},,,,,,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(2),c=t.n(r),o=(t(15),t(17),t(3)),s=t(4),m=t(7),u=t(5),l=t(8);t(19);var g=function(e){return i.a.createElement("nav",{className:"navbar sticky-top navbar-dark bg-dark"},i.a.createElement("a",{className:"navbar-brand",href:"https://github.com/BarbaraHernandez/clickygame"},"Click Click Boom"),i.a.createElement("p",null,e.instruction),i.a.createElement("p",null,"Score: ",e.gameScore," "))};t(21);var d=function(e){return i.a.createElement("header",null,i.a.createElement("div",{className:"container",id:"header-div"},i.a.createElement("h1",null,"CLICK CLICK BOOM"),i.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!")))};t(23);var f=function(e){return i.a.createElement("img",{onClick:function(){return e.handleOnClick(e.id)},alt:"",src:e.image})},w=t(6),p=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).state={wires:w,instruction:"click on any wire to begin",gameScore:0},t.shuffle=function(e){return e.sort(function(){return.5-Math.random()})},t.resetGame=function(e){return e.map(function(e){return e.clicked=!1,e})},t.loseGame=function(e){var n=t.resetGame(e);t.setState({wires:t.shuffle(n),instruction:"Try Again! Cut any wire.",gameScore:0})},t.winGame=function(e){if(8===t.state.gameScore){var n=t.resetGame(e);t.setState({wires:t.shuffle(n),instruction:"Congratulations! Cut any wire to start a new game.",gameScore:0})}},t.continueGame=function(e){t.setState({wires:t.shuffle(e),instruction:"Well done! Keep going!",gameScore:t.state.gameScore+1}),t.winGame(e)},t.handleOnClick=function(e){var n=!1,a=t.state.wires.map(function(t){return t.id===e&&(t.clicked?n=!0:t.clicked=!0),t});n?t.loseGame(a):t.continueGame(a)},t}return Object(l.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.resetGame(this.state.wires);this.setState({wires:this.shuffle(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g,{gameScore:this.state.gameScore,instruction:this.state.instruction}),i.a.createElement(d,null),i.a.createElement("div",null,this.state.wires.map(function(n){return i.a.createElement(f,{id:n.id,key:n.id,image:n.image,handleOnClick:e.handleOnClick})})))}}]),n}(a.Component);var h=function(){return i.a.createElement(p,null)};c.a.render(i.a.createElement(h,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.65982756.chunk.js.map