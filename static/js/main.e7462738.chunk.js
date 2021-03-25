(this.webpackJsonppathfinding_visualizer=this.webpackJsonppathfinding_visualizer||[]).push([[0],{31:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(3),i=n.n(s),r=n(4),o=(n(11),n(7)),l=n(5),d=n.n(l),h=n(9),u=(n.p,n(31),n(0)),f=[{label:"Breadth-First Search",value:"Breadth-First Search"},{label:"Depth-First Search",value:"Depth-First Search"},{label:"Dijkstra's Algorithm",value:"Dijkstra algorithm"},{label:"A-Star Search",value:"A-Star Search"}],m=[{label:"Simple-Maze",value:"Simple-Maze"},{label:"Recursive-Backtracking",value:"Recursive-Backtracking"},{label:"Recursive-Division",value:"Recursive-Division"},{label:"Randomized-Prims",value:"Randomized-Prims"}],j=function(e){var t=Object(c.useState)(1),n=Object(r.a)(t,2),s=n[0],i=n[1],l=Object(c.useState)("Pathfinding Algorithms"),d=Object(r.a)(l,2),j=d[0],v=d[1],b=function(){document.getElementById("sidebar").style.width="0"},p=function(t){var n=t.value;"Breadth-First Search"===n?v("Breadth-First Search"):"Depth-First Search"===n?v("Depth-First Search"):"Dijkstra algorithm"===n&&v("Dijkstra algorithm"),"A-Star Search"===n&&v("A-Star Search"),"Simple-Maze"===n&&(b(),e.SimpleMaze()),"Recursive-Division"===n&&(b(),e.RecursiveDivision()),"Recursive-Backtracking"===n&&(b(),e.RecursiveBacktracking()),"Randomized-Prims"===n&&(b(),e.RandomizedPrims())};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{id:"sidebar",className:"sidebar",children:[Object(u.jsx)("h4",{style:{fontSize:"75px",textAlign:"left",paddingLeft:"3.5%"},className:"titleClass",children:"Pathfinding"}),Object(u.jsx)("h4",{style:{fontSize:"75px",textAlign:"left",paddingLeft:"3.5%"},className:"titleClass",children:"Visualiser"}),Object(u.jsxs)("div",{className:"container-sm",children:[Object(u.jsx)("h4",{children:Object(u.jsx)("br",{})}),Object(u.jsx)(o.Dropdown,{name:"Algorithms-temp",title:"Pathfinding Algorithms",list:f,onChange:function(e){p(e)}}),Object(u.jsx)("h4",{children:Object(u.jsx)("br",{})}),Object(u.jsx)(o.Dropdown,{name:"MazeGenerator-TEMP",title:"Mazes & Patterns",list:m,onChange:function(e){p(e)}}),Object(u.jsx)("h4",{children:Object(u.jsx)("br",{})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-6",children:Object(u.jsx)("button",{className:"sidebar_button",style:{width:"160px",fontSize:"27px"},onClick:function(){e.ClearBoard()},children:"Clear Board"})}),Object(u.jsx)("div",{className:"col-sm-6",children:Object(u.jsx)("button",{className:"sidebar_button",style:{width:"155px",fontSize:"27px"},onClick:function(){e.ClearPath()},children:"Clear Path"})})]}),Object(u.jsx)("h4",{children:Object(u.jsx)("br",{})}),Object(u.jsxs)(a.a.Fragment,{children:[Object(u.jsx)("div",{className:"speed",children:"Speed"}),Object(u.jsx)(h.a,{axis:"x",xstep:.01,xmin:.25,xmax:2,x:s,style:{width:"350px"},styles:{width:"350px",track:{backgroundColor:"#f3f4ed"},active:{backgroundColor:"#f8e9a1"},thumb:{backgroundColor:"#36a1d4"}},onChange:function(t){!function(t){i(t.x.toFixed(2)),e.parentCallback(t.x)}(t)}})]}),Object(u.jsx)("h4",{children:Object(u.jsx)("br",{})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-6",children:Object(u.jsx)("button",{className:"sidebar_button",style:{width:"160px",fontSize:"27px"},onClick:function(){b()},children:"Close"})}),Object(u.jsx)("div",{className:"col-sm-6",children:Object(u.jsx)("button",{className:"sidebar_button",style:{width:"155px",fontSize:"27px"},onClick:function(){b(),e.tutorialButton()},children:"Tutorial"})})]})]})]}),Object(u.jsxs)("div",{className:"navbar navbar-dark bg-dark",children:[Object(u.jsxs)("div",{className:"col-sm-3",children:[Object(u.jsx)("button",{onClick:function(){document.getElementById("sidebar").style.width="385px"},className:"sidebar_open",children:"\u2630 Algorithms"}),"\xa0\xa0",Object(u.jsx)("button",{onClick:function(t){"A-Star Search"==j?e.AStar():"Breadth-First Search"===j?e.BFS():"Depth-First Search"===j?e.DFS():"Dijkstra algorithm"===j&&e.Dijkstra()},className:"sidebar_open",children:"Visualize"})]}),Object(u.jsx)("div",{className:"col-sm-3"}),Object(u.jsx)("div",{className:"col-sm-3"}),Object(u.jsx)("div",{className:"col-sm-3",children:Object(u.jsx)("div",{className:"titleClass",children:Object(u.jsx)("b",{children:"Pathfinding Visualiser"})})})]})]})};n(35),n(36);var v=function(e){var t=e.isStart,n=e.isEnd,c=e.rowIndex,a=e.colIndex,s=t?"node-start":n?"node-end":"";return Object(u.jsx)("div",{className:"node ".concat(s),id:"node-".concat(c,"-").concat(a),style:{width:window.innerWidth/61.12,height:window.innerHeight/27.75}})};function b(e,t){var n=Math.abs(e.x-t.x)*Math.abs(e.x-t.x),c=Math.abs(e.y-t.y)*Math.abs(e.y-t.y);return Math.sqrt(n+c)}var p=function(e,t){var n=[],c=[],a=[];n.push(e);for(var s=function(){for(var e=0,s=0;s<n.length;s++)n[s].score<n[e].score&&(e=s);var i=n[e];if(i==t){console.log("Done Done Done !!!");var r=i;for(a.push(r);r.previous;)a.push(r.previous),r=r.previous;return{v:{finalPath:a,visited:c}}}n=n.filter((function(e){return e!==i})),c.push(i);for(var o=0;o<i.neighbors.length;o++){var l=i.neighbors[o];if("node-wall"!=document.getElementById("node-".concat(l.x,"-").concat(l.y)).className&&!c.includes(l)){var d=i.gScore+1,h=!1;n.includes(l)?d<l.gScore&&(l.gScore=d,h=!0):(l.gScore=d,h=!0,n.push(l)),h&&(l.hScore=b(l,t),l.score=l.gScore+l.hScore,l.previous=i)}}};n.length>0;){var i=s();if("object"===typeof i)return i.v}return{finalPath:a,visited:c,error:"No Path Found!!!"}};var g=function(e,t){var n=[],c=[],a=[];n.push(e);for(var s=function(){var e=n[0];if(e==t){console.log("Done Done Done !!!");var s=e;for(a.push(s);s.previous;)a.push(s.previous),s=s.previous;return{v:{finalPath:a,visited:c}}}n=n.filter((function(t){return t!==e})),c.push(e);for(var i=0;i<e.neighbors.length;i++){var r=e.neighbors[i];"node-wall"!=document.getElementById("node-".concat(r.x,"-").concat(r.y)).className&&(c.includes(r)||n.includes(r)||(n.push(r),r.previous=e))}};n.length>0;){var i=s();if("object"===typeof i)return i.v}return{finalPath:a,visited:c,error:"No Path Found!!!"}};function x(e,t,n,c){return e>=0&&e<n&&(t>=0&&t<c)}var A=function(e,t,n,c,a){var s=[],i=[],r=[],o=[[-1,0],[0,-1],[1,0],[0,1]];s.push(t);for(var l=function(){s.length;var t=s.pop();if(t==n){console.log("Done Done Done !!!");var l=t;for(i.push(l);l.previous;)i.push(l.previous),l=l.previous;return{v:{finalPath:i,visited:r}}}s=s.filter((function(e){return e!==t})),r.push(t);for(var d=0;d<4;d++){var h=t.x+o[d][0],u=t.y+o[d][1];if(x(h,u,c,a)&&"node-wall"!=document.getElementById("node-".concat(h,"-").concat(u)).className){var f=e[h][u];r.includes(f)||(s.push(f),f.previous=t)}}};s.length>0;){var d=l();if("object"===typeof d)return d.v}return{finalPath:i,visited:r,error:"No Path Found!!!"}};var O=function(e,t){var n=[],c=[],a=[];n.push(e);for(var s=function(){for(var e=0,s=0;s<n.length;s++)n[s].score<n[e].score&&(e=s);var i=n[e];if(i==t){console.log("Done Done Done !!!");var r=i;for(a.push(r);r.previous;)a.push(r.previous),r=r.previous;return{v:{finalPath:a,visited:c}}}n=n.filter((function(e){return e!==i})),c.push(i);for(var o=0;o<i.neighbors.length;o++){var l=i.neighbors[o];if("node-wall"!=document.getElementById("node-".concat(l.x,"-").concat(l.y)).className&&!c.includes(l)){var d=i.gScore+1,h=!1;n.includes(l)?d<l.gScore&&(l.gScore=d,h=!0):(l.gScore=d,h=!0,n.push(l)),h&&(l.hScore=0,l.score=l.gScore+l.hScore,l.previous=i)}}};n.length>0;){var i=s();if("object"===typeof i)return i.v}return{finalPath:a,visited:c,error:"No Path Found!!!"}};n(37);var N=function(e,t,n,c){for(var a=[],s=[0,1,1,1],i=0;i<n;i++)for(var r=0;r<c;r++){if(e.x!=i||e.y!=r)if(t.x!=i||t.y!=r)0==s[Math.floor(Math.random()*s.length)]&&a.push([i,r])}return a};function y(e,t){for(var n=void 0,c=0;c<e.length;c++)e[c][0]==t[0]&&e[c][1]==t[1]&&(n=c);return n+=1,(e=e.slice(0)).splice(n-1,1),e}function w(e,t){for(var n=0;n<e.length;n++)if(e[n][0]==t[0]&&e[n][1]==t[1])return 1;return 0}function z(e,t,n,c){return e>=0&&e<n&&(t>=0&&t<c)}function S(e,t,n,c){var a=n.x==e&&n.y==t,s=c.x==e&&c.y==t;return a||s}function M(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}function D(e,t){var n=void 0;return t>=3?((n=M(e+1,e+t-2))%2==1&&(n-=1),n):void 0}function B(e,t,n,c,a,s,i,r,o){if(!(a<=1||s<=1)){for(var l=D(c[0],a),d=D(c[1],s),h=c[0];h<c[0]+a;h++)S(h,d,t,n)||(e[h][d]=1,o.push([h,d]));for(var u=c[1];u<c[1]+s;u++)S(l,u,t,n)||(e[l][u]=1,o.push([l,u]));!function(e,t,n,c,a,s,i,r,o,l){for(var d=[],h=[[M(t,s-1),i],[M(s+1,t+c-1),i],[s,M(n,i-1)],[s,M(i+1,n+a-1)]],u=[[t,i],[t+c-1,i],[s,n],[s,n+a-1]],f=[[t-1,i],[t+c,i],[s,n-1],[s,n+a]],m=0;m<4;m++){var j=f[m][0],v=f[m][1];z(j,v,r,o)&&0==e[j][v]?e[u[m][0]][u[m][1]]=0:d.push(h[m])}for(var b=M(0,h.length-1),p=0;p<d.length;p++)p!=b&&(e[d[p][0]][d[p][1]]=0)}(e,c[0],c[1],a,s,l,d,i,r),B(e,t,n,c,l-c[0],d-c[1],i,r,o),B(e,t,n,[c[0],d+1],l-c[0],c[1]+s-d-1,i,r,o),B(e,t,n,[l+1,c[1]],c[0]+a-l-1,d-c[1],i,r,o),B(e,t,n,[l+1,d+1],c[0]+a-l-1,c[1]+s-d-1,i,r,o)}}var T=function(e,t,n,c){for(var a=new Array(n),s=[],i=0;i<n;i++){a[i]=new Array(c);for(var r=0;r<c;r++)a[i][r]=0}for(var o=0;o<n;o++)a[o][0]=1,s.push([o,0]),a[o][c-1]=1,s.push([o,c-1]);for(var l=0;l<c;l++)a[0][l]=1,s.push([0,l]),a[n-1][l]=1,s.push([n-1,l]);B(a,e,t,[1,1],n-2,c-2,n,c,s);for(var d=0;d<n;d++)for(var h=0;h<c;h++)w(s,[d,h])&&0==a[d][h]&&(s=y(s,[d,h]));return s};function H(e,t){for(var n=void 0,c=0;c<e.length;c++)e[c][0]==t[0]&&e[c][1]==t[1]&&(n=c);return n+=1,(e=e.slice(0)).splice(n-1,1),e}function C(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}function P(e,t,n,c,a,s,i){var r=[];if(t>0&&1===e[2*(t-1)+1][2*n+1]&&r.push("L"),n>0&&1===e[2*t+1][2*(n-1)+1]&&r.push("U"),t<c-1&&1===e[2*(t+1)+1][2*n+1]&&r.push("R"),n<a-1&&1===e[2*t+1][2*(n+1)+1]&&r.push("D"),r.length>0){var o=r[Math.floor(Math.random()*r.length)];return"L"===o?(s.push([t-1,n]),e[2*t][2*n+1]=0,e[2*(t-1)+1][2*n+1]=0,i.push([2*t,2*n+1]),i.push([2*(t-1)+1,2*n+1])):"U"===o?(s.push([t,n-1]),e[2*t+1][2*n]=0,e[2*t+1][2*(n-1)+1]=0,i.push([2*t+1,2*n]),i.push([2*t+1,2*(n-1)+1])):"R"===o?(s.push([t+1,n]),e[2*t+2][2*n+1]=0,e[2*(t+1)+1][2*n+1]=0,i.push([2*t+2,2*n+1]),i.push([2*(t+1)+1,2*n+1])):"D"===o&&(s.push([t,n+1]),e[2*t+1][2*n+2]=0,e[2*t+1][2*(n+1)+1]=0,i.push([2*t+1,2*n+2]),i.push([2*t+1,2*(n+1)+1])),!0}return!1}var k=function(e,t,n,c){for(var a=[],s=new Array(n),i=0;i<n;i++){s[i]=new Array(c);for(var r=0;r<c;r++)s[i][r]=1}return function(e,t,n,c,a,s,i,r){var o=C(0,c-1),l=C(0,a-1);e[2*o+1][2*l+1]=0,r.push([2*o+1,2*l+1]);var d=[];for(d.push([o,l]);d.length>0;){var h=d[d.length-1];P(e,h[0],h[1],c,a,d,r)||(d=H(d,h))}}(s,0,0,(n-1)/2,(c-1)/2,0,0,a),a};function q(e,t){for(var n=void 0,c=0;c<e.length;c++)e[c][0]==t[0]&&e[c][1]==t[1]&&(n=c);return n+=1,(e=e.slice(0)).splice(n-1,1),e}function V(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}function Z(e,t,n,c,a,s,i){var r=[];if(t>0&&1===e[2*(t-1)+1][2*n+1]&&r.push("L"),n>0&&1===e[2*t+1][2*(n-1)+1]&&r.push("U"),t<c-1&&1===e[2*(t+1)+1][2*n+1]&&r.push("R"),n<a-1&&1===e[2*t+1][2*(n+1)+1]&&r.push("D"),r.length>0){var o=r[Math.floor(Math.random()*r.length)];return"L"===o?(s.push([t-1,n]),e[2*t][2*n+1]=0,e[2*(t-1)+1][2*n+1]=0,i.push([2*t,2*n+1]),i.push([2*(t-1)+1,2*n+1])):"U"===o?(s.push([t,n-1]),e[2*t+1][2*n]=0,e[2*t+1][2*(n-1)+1]=0,i.push([2*t+1,2*n]),i.push([2*t+1,2*(n-1)+1])):"R"===o?(s.push([t+1,n]),e[2*t+2][2*n+1]=0,e[2*(t+1)+1][2*n+1]=0,i.push([2*t+2,2*n+1]),i.push([2*(t+1)+1,2*n+1])):"D"===o&&(s.push([t,n+1]),e[2*t+1][2*n+2]=0,e[2*t+1][2*(n+1)+1]=0,i.push([2*t+1,2*n+2]),i.push([2*t+1,2*(n+1)+1])),!0}return!1}var X=function(e,t,n,c){for(var a=[],s=new Array(n),i=0;i<n;i++){s[i]=new Array(c);for(var r=0;r<c;r++)s[i][r]=1}return function(e,t,n,c,a,s,i,r){var o=V(0,c-1),l=V(0,a-1);e[2*o+1][2*l+1]=0,r.push([2*o+1,2*l+1]);var d=[];for(d.push([o,l]);d.length>0;){var h=d.length,u=d[Math.floor(Math.random()*h)];Z(e,u[0],u[1],c,a,d,r)||(d=q(d,u))}}(s,0,0,(n-1)/2,(c-1)/2,0,0,a),a},E=n.p+"static/media/page1.46ea13a7.png",W=n.p+"static/media/page2.5b7acf92.png",Q=n.p+"static/media/gifAlgo.5c1d9eef.gif",I=n.p+"static/media/gifWalls.f2e7bccd.gif",G=n.p+"static/media/page62.84729c00.png",F=25,Y=61,L=!1,R=!1,J=!1,U=Math.ceil(12.5),K=Math.ceil(Y/6),_=F-Math.ceil(12.5),$=Y-Math.ceil(Y/6),ee=void 0,te=void 0,ne=1;var ce=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=(t[0],t[1],Object(c.useState)([1,0,0,0,0,0])),a=Object(r.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)([]),l=Object(r.a)(o,2),h=l[0],f=l[1];Object(c.useEffect)((function(){m()}),[]);var m=function(){for(var e=new Array(F),t=0;t<F;t++){e[t]=new Array(Y);for(var n=0;n<Y;n++)e[t][n]=new b(t,n)}x(e),f(e)};function b(e,t){this.x=e,this.y=t,this.isStart=this.x===U&&this.y===K,this.isEnd=this.x===_&&this.y===$,this.state="Blank",this.score=1e6,this.gScore=1e6,this.hScore=1e6,this.neighbors=[],this.previous=void 0,this.addNeighbors=function(e){var t=this.x,n=this.y;t>0&&this.neighbors.push(e[t-1][n]),n>0&&this.neighbors.push(e[t][n-1]),t<24&&this.neighbors.push(e[t+1][n]),n<60&&this.neighbors.push(e[t][n+1])}}var x=function(e){for(var t=0;t<F;t++)for(var n=0;n<Y;n++)e[t][n].addNeighbors(e)},y=function(){for(var e=function(e){e===te.length?setTimeout((function(){!function(e){for(var t=function(t){setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.x,"-").concat(n.y)).className="node node-shortest-path"}),10*t/ne),t===e.length-1&&setTimeout((function(){var n=e[t];document.getElementById("node-".concat(n.x,"-").concat(n.y)).className="node-start"}),10*t/ne)},n=1;n<e.length;n++)t(n)}(ee)}),10*e/ne):setTimeout((function(){var t=te[e];document.getElementById("node-".concat(t.x,"-").concat(t.y)).className="node node-visited"}),10*e/ne)},t=0;t<=te.length;t++)e(t)};return Object(u.jsxs)("div",{style:{backgroundColor:"white"},children:[Object(u.jsx)(j,{letsVisualize:y,BFS:function(){var e=h[U][K],t=h[_][$],n=g(e,t);ee=n.finalPath,te=n.visited,y()},DFS:function(){var e=h[U][K],t=h[_][$],n=A(h,e,t,F,Y);ee=n.finalPath,te=n.visited,y()},Dijkstra:function(){var e=h[U][K],t=h[_][$],n=O(e,t);ee=n.finalPath,te=n.visited,y()},AStar:function(){var e=h[U][K],t=h[_][$],n=p(e,t);ee=n.finalPath,te=n.visited,y()},SimpleMaze:function(){for(var e=h[U][K],t=h[_][$],n=N(e,t,F,Y),c=function(e){var t=n[e][0],c=n[e][1];setTimeout((function(){document.getElementById("node-".concat(t,"-").concat(c)).className="node-wall"}),10*e/ne)},a=0;a<n.length;a++)c(a)},RecursiveDivision:function(){var e=h[U][K],t=h[_][$];!function(e){for(var t=h[U][K],n=h[_][$],c=function(c){t.x===e[c][0]&&t.y===e[c][1]||n.x===e[c][0]&&n.y===e[c][1]||setTimeout((function(){document.getElementById("node-".concat(e[c][0],"-").concat(e[c][1])).className="node-wall"}),10*c/ne)},a=0;a<e.length;a++)c(a)}(T(e,t,F,Y))},RecursiveBacktracking:function(){for(var e=h[U][K],t=h[_][$],n=k(e,t,F,Y),c=function(n){for(var c=function(c){e.x===n&&e.y===c||t.x===n&&t.y===c||setTimeout((function(){document.getElementById("node-".concat(n,"-").concat(c)).className="node-wall"}),0)},a=0;a<Y;a++)c(a)},a=0;a<F;a++)c(a);for(var s=function(c){e.x===n[c][0]&&e.y===n[c][1]||t.x===n[c][0]&&t.y===n[c][1]||setTimeout((function(){document.getElementById("node-".concat(n[c][0],"-").concat(n[c][1])).className="node"}),10*c/ne)},i=0;i<n.length;i++)s(i)},RandomizedPrims:function(){for(var e=h[U][K],t=h[_][$],n=X(e,t,F,Y),c=function(n){for(var c=function(c){e.x===n&&e.y===c||t.x===n&&t.y===c||setTimeout((function(){document.getElementById("node-".concat(n,"-").concat(c)).className="node-wall"}),0)},a=0;a<Y;a++)c(a)},a=0;a<F;a++)c(a);for(var s=function(c){e.x===n[c][0]&&e.y===n[c][1]||t.x===n[c][0]&&t.y===n[c][1]||setTimeout((function(){document.getElementById("node-".concat(n[c][0],"-").concat(n[c][1])).className="node"}),10*c/ne)},i=0;i<n.length;i++)s(i)},ClearBoard:function(){for(var e=h[U][K],t=h[_][$],n=function(n){for(var c=function(c){e.x===n&&e.y===c||t.x===n&&t.y===c?e.x===n&&e.y===c?setTimeout((function(){document.getElementById("node-".concat(n,"-").concat(c)).className="node-start"}),1):t.x===n&&t.y===c&&setTimeout((function(){document.getElementById("node-".concat(n,"-").concat(c)).className="node-end"}),0):setTimeout((function(){document.getElementById("node-".concat(n,"-").concat(c)).className="node"}),1)},a=0;a<Y;a++)c(a)},c=0;c<F;c++)n(c)},ClearPath:function(){h[U][K],h[_][$];for(var e=function(e){for(var t=function(t){"node node-visited"!==document.getElementById("node-".concat(e,"-").concat(t)).className&&"node node-shortest-path"!==document.getElementById("node-".concat(e,"-").concat(t)).className||setTimeout((function(){document.getElementById("node-".concat(e,"-").concat(t)).className="node"}),0)},n=0;n<Y;n++)t(n)},t=0;t<F;t++)e(t)},tutorialButton:function(){i([1,0,0,0,0,0])},isDone:s,parentCallback:function(e){ne=e}}),Object(u.jsx)("div",{className:"container col-12",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-lg-12",style:{paddingLeft:"1.5px",paddingTop:"1.5px"},children:function(e){return Object(u.jsx)("div",{children:e.map((function(e,t){return Object(u.jsx)("div",{className:"rowWrapper",children:e.map((function(e,n){var c=e.isStart,a=e.isEnd;return Object(u.jsx)("div",{onMouseDown:function(){!function(e,t){e===U&&t===K?L=!0:e===_&&t===$?R=!0:J=!0}(t,n)},onMouseUp:function(){L=!1,R=!1,J=!1},onMouseOver:function(){!function(e,t){if(L){var n=U,c=K;U=e,K=t,setTimeout((function(){document.getElementById("node-".concat(n,"-").concat(c)).className="node"}),10),setTimeout((function(){document.getElementById("node-".concat(U,"-").concat(K)).className="node-start"}),10)}if(R){var a=_,s=$;_=e,$=t,setTimeout((function(){document.getElementById("node-".concat(a,"-").concat(s)).className="node"}),10),setTimeout((function(){document.getElementById("node-".concat(_,"-").concat($)).className="node-end"}),10)}J&&setTimeout((function(){document.getElementById("node-".concat(e,"-").concat(t)).className="node-wall"}),10)}(t,n)},children:Object(u.jsx)(v,{isStart:c,isEnd:a,rowIndex:t,colIndex:n},n)})}))},t)}))})}(h)}),Object(u.jsxs)("div",{children:[Object(u.jsx)(d.a,{isOpen:s[0],className:"Modal",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("p",{style:{fontSize:"10px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center"},children:Object(u.jsx)("b",{children:"Welcome to Pathfinding Algorithm Visualizer"})}),Object(u.jsx)("p",{style:{fontSize:"15px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"35px"},children:"This short tutorial will walk you through all of the features of this application."}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"35px"},children:'If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!'}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-sm-12",align:"center",children:Object(u.jsx)("img",{src:E,alt:"page1",style:{width:"30%"}})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,0,0])},className:"modalButton",children:"Skip"})}),Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("p",{className:"modelHeading_light",style:{fontSize:"25px",paddingTop:"2.5%"},children:"Page 1"})}),Object(u.jsxs)("div",{className:"col-sm-4",align:"center",children:[Object(u.jsx)("button",{onClick:function(){i([1,0,0,0,0,0])},style:{width:"1%",visibility:"hidden"},className:"modalButton",children:"\u2bc7"}),"\xa0\xa0",Object(u.jsx)("button",{onClick:function(){i([0,1,0,0,0,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc8"})]})]})]})}),Object(u.jsxs)(d.a,{isOpen:s[1],className:"Modal",children:[Object(u.jsx)("p",{style:{fontSize:"10px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center"},children:Object(u.jsx)("b",{children:"What is a pathfinding algorithm?"})}),Object(u.jsx)("p",{style:{fontSize:"15px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:"At its core, a pathfinding algorithm seeks to find the shortest path between two points. This application visualizes various pathfinding algorithms in action, and more!"}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:"All of the algorithms on this application are adapted for a 2D grid."}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-sm-12",align:"center",children:Object(u.jsx)("img",{src:W,alt:"page2",style:{width:"17.5%"}})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,0,0])},className:"modalButton",children:"Skip"})}),Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("p",{className:"modelHeading_light",style:{fontSize:"25px",paddingTop:"2.5%"},children:"Page 2"})}),Object(u.jsxs)("div",{className:"col-sm-4",align:"center",children:[Object(u.jsx)("button",{onClick:function(){i([1,0,0,0,0,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc7"}),"\xa0\xa0",Object(u.jsx)("button",{onClick:function(){i([0,0,1,0,0,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc8"})]})]})]}),Object(u.jsxs)(d.a,{isOpen:s[2],className:"Modal",children:[Object(u.jsx)("p",{style:{fontSize:"10px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center"},children:Object(u.jsx)("b",{children:"Picking an algorithm"})}),Object(u.jsx)("p",{style:{fontSize:"15px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:'Choose an algorithm from the "Algorithms" drop-down menu from the Side-Bar.'}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:"Note : Not all algorithms guarantee the shortest path. "}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-sm-12",align:"center",children:Object(u.jsx)("img",{src:Q,alt:"gifAlgo",style:{width:"17.25%"}})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,0,0])},className:"modalButton",children:"Skip"})}),Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("p",{className:"modelHeading_light",style:{fontSize:"25px",paddingTop:"2.5%"},children:"Page 3"})}),Object(u.jsxs)("div",{className:"col-sm-4",align:"center",children:[Object(u.jsx)("button",{onClick:function(){i([0,1,0,0,0,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc7"}),"\xa0\xa0",Object(u.jsx)("button",{onClick:function(){i([0,0,0,1,0,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc8"})]})]})]}),Object(u.jsxs)(d.a,{isOpen:s[3],className:"Modal",children:[Object(u.jsx)("p",{style:{fontSize:"10px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center"},children:Object(u.jsx)("b",{children:"Meet the algorithms"})}),Object(u.jsx)("p",{style:{fontSize:"15px"},children:" "}),Object(u.jsxs)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:[Object(u.jsx)("b",{children:"Breath-first Search"})," : level wise search; guarantees the shortest path"]}),Object(u.jsxs)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:[Object(u.jsx)("b",{children:"Depth-first Search"})," : a very bad algorithm for pathfinding; does not guarantee the shortest path"]}),Object(u.jsxs)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:[Object(u.jsx)("b",{children:"Dijkstra's Algorithm"})," : the father of pathfinding algorithms; guarantees the shortest path"]}),Object(u.jsxs)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:[Object(u.jsx)("b",{children:"A* Search"})," : arguably the best pathfinding algorithm; uses heuristics to guarantee "]}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:"the shortest path much faster than Dijkstra's Algorithm"}),Object(u.jsx)("p",{style:{fontSize:"26px"},children:"\xa0"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,0,0])},className:"modalButton",children:"Skip"})}),Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("p",{className:"modelHeading_light",style:{fontSize:"25px",paddingTop:"2.5%"},children:"Page 4"})}),Object(u.jsxs)("div",{className:"col-sm-4",align:"center",children:[Object(u.jsx)("button",{onClick:function(){i([0,0,1,0,0,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc7"}),"\xa0\xa0",Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,1,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc8"})]})]})]}),Object(u.jsxs)(d.a,{isOpen:s[4],className:"Modal",children:[Object(u.jsx)("p",{style:{fontSize:"10px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center"},children:Object(u.jsx)("b",{children:"Adding walls"})}),Object(u.jsx)("p",{style:{fontSize:"15px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:"Click on the grid to add a wall. Walls are impenetrable, meaning that a path cannot cross through them."}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:'Generate mazes and patterns from the "Mazes & Patterns" drop-down menu.'}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-sm-12",align:"center",children:Object(u.jsx)("img",{src:I,alt:"gifWalls",style:{width:"21.15%"}})})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,0,0])},className:"modalButton",children:"Skip"})}),Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("p",{className:"modelHeading_light",style:{fontSize:"25px",paddingTop:"2.5%"},children:"Page 5"})}),Object(u.jsxs)("div",{className:"col-sm-4",align:"center",children:[Object(u.jsx)("button",{onClick:function(){i([0,0,0,1,0,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc7"}),"\xa0\xa0",Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,0,1])},style:{width:"1%"},className:"modalButton",children:"\u2bc8"})]})]})]}),Object(u.jsxs)(d.a,{isOpen:s[5],className:"Modal",children:[Object(u.jsx)("p",{style:{fontSize:"10px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center"},children:Object(u.jsx)("b",{children:"Visualizing and more.."})}),Object(u.jsx)("p",{style:{fontSize:"15px"},children:" "}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:"Use the Navbar button to visualize algorithms and Side-Bar buttons to do other stuff!"}),Object(u.jsx)("p",{className:"modelHeading_light",style:{textAlign:"center",fontSize:"33.5px"},children:"You can clear the current path, clear the board, and adjust the visualization speed, all from the Side-Bar."}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-6",align:"center",children:Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:"page61",style:{width:"80%"}})}),Object(u.jsx)("div",{className:"col-sm-6",align:"center",children:Object(u.jsx)("img",{src:G,alt:"page62",style:{width:"65%"}})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,0,0])},className:"modalButton",children:"Skip"})}),Object(u.jsx)("div",{className:"col-sm-4",align:"center",children:Object(u.jsx)("p",{className:"modelHeading_light",style:{fontSize:"35px"},children:Object(u.jsx)("b",{children:"Enjoy !"})})}),Object(u.jsxs)("div",{className:"col-sm-4",align:"center",children:[Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,1,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc7"}),"\xa0\xa0",Object(u.jsx)("button",{onClick:function(){i([0,0,0,0,0,0])},style:{width:"1%"},className:"modalButton",children:"\u2bc8"})]})]})]})]})]})})]})};var ae=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(ce,{})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ae,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e7462738.chunk.js.map