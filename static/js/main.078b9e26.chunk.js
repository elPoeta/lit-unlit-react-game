(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(15),n(16),n(8)),s=n(1),i=n(2),u=n(4),m=n(3),p=n(5),f=(n(17),n(18),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){n.props.flipCells()},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),t}(a.Component)),d=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).createBoard=function(){for(var e=[],t=n.props,a=t.rows,r=t.cols,o=0;o<a;o++){for(var c=[],l=0;l<r;l++)c.push(!!Math.floor(2*Math.random()));e.push(c)}return e},n.flipCells=function(e){var t=n.props,a=t.rows,r=t.cols,o=n.state.board,c=e.split("-").map(Number),s=Object(l.a)(c,2),i=s[0],u=s[1],m=function(e,t){t>=0&&t<r&&e>=0&&e<a&&(o[e][t]=!o[e][t])};m(i,u),m(i,u-1),m(i,u+1),m(i-1,u),m(i+1,u);var p=o.every(function(e){return e.every(function(e){return!e})});n.setState({board:o,hasWon:p})},n.state={hasWon:!1,board:n.createBoard()},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.board,a=t.hasWon,o=n.map(function(t,n){return r.a.createElement("tr",{key:n},t.map(function(t,a){return r.a.createElement(f,{key:"".concat(n,"-").concat(a),isLit:t,flipCells:e.flipCells.bind(e,"".concat(n,"-").concat(a))})}))});return r.a.createElement("div",null,a?r.a.createElement("div",{className:"Board-Win"},r.a.createElement("h1",null,r.a.createElement("span",{className:"flux"},"You"),r.a.createElement("span",{className:"neon"},"Win!!!"))):r.a.createElement("div",{className:"Board-Container"},r.a.createElement("h1",null,r.a.createElement("span",{className:"neon"},"Un"),r.a.createElement("span",{className:"flux"},"lit")),r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,o))))}}]),t}(a.Component);d.defaultProps={rows:5,cols:5};var h=d,v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{rows:5,cols:5}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.078b9e26.chunk.js.map