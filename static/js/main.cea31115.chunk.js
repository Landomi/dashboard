(this["webpackJsonpcelestial-dashboard-frontend"]=this["webpackJsonpcelestial-dashboard-frontend"]||[]).push([[0],{266:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},283:function(e,t){},285:function(e,t){},287:function(e,t){},291:function(e,t){},318:function(e,t){},320:function(e,t){},329:function(e,t){},331:function(e,t){},341:function(e,t){},343:function(e,t){},461:function(e,t){},463:function(e,t){},470:function(e,t){},471:function(e,t){},564:function(e,t,n){},569:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(52),s=n.n(c),i=(n(266),n(24)),l=n.n(i),u=n(10),o=n(60),d=(n(268),n(98)),j=n(254),m=n.n(j),b=n(53),h=n(21),p=n(72),O=n(259),x=n(156),f=n(32),v=Object(a.createContext)(null),g=Object(a.createContext)(null);function y(){}function C(e){try{var t=BigInt(e);if(String(t)===e&&t>0)return t}catch(n){}return null}var N=BigInt(Math.pow(10,18));function w(e){try{var t=e.split(".");if(t.length>2||0===t.length)return null;var n=C(t[0]);if(1===t.length)return n?n*N:null;if("0"!==t[0]&&""!==t[0]&&!n)return null;var a=C(e.replace(".","").replace(/^0*/g,""));return!a||t[1].length>18?null:a*BigInt(Math.pow(10,18-t[1].length))}catch(r){}return null}function B(e,t){var n=e/BigInt(Math.pow(10,18)),a=e-n*BigInt(Math.pow(10,18));if(a===BigInt(0)||0===t)return String(n);var r=String(a).padStart(18,"0");return r.length>t&&(r=r.slice(0,t)),"".concat(n,".").concat(r).replace(/0*$/g,"")}function I(e,t,n){var a=w(e);(""===e||"0"===e||e.match(/^0\.0*$/g)||null!==a)&&(t(e),n&&n(a))}function S(e,t,n){var a=C(e);""!==e&&null===a||(t(e),n&&n(a))}var T=n(23),A=n(12),k=(n(269),n(117)),M=n.n(k),P=n(44),E=n.n(P),F=n(118),_=n(31),V=n(25),D=n(87),q=n(120),K=n(119),W=n(1),X=function e(t,n){Object(A.a)(this,e),this.address=void 0,this.amount=void 0,this.address=t,this.amount=n};var z=[{id:0,name:"Celt",address:"0x5Ab622494AB7C5e81911558c9552DBd517F403fb",decimal:18},{id:1,name:"Crystal",address:"0xBD87c06D865a3717A16041aCD8d33922e60E85CE",decimal:18},{id:2,name:"CeltChest",address:"0x777c5a7152F999B4bBC26295C65a0ACb066f75e9",decimal:0}],G=[{inputs:[{internalType:"address",name:"erc20Token",type:"address"},{internalType:"address[]",name:"targets",type:"address[]"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"airDropBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"erc20Token",type:"address"},{internalType:"address[]",name:"targets",type:"address[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],name:"airDropIndividual",outputs:[],stateMutability:"nonpayable",type:"function"}],R=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}];function Y(e,t,n,a,r){if(!n)return Promise.resolve();var c=z[t].address;return new e.eth.Contract(R,c).methods.approve(a,r).send({from:n})}var H="0x074101c52ea69D66577057ECA07147bcF7B3f057";function J(e,t,n,a,r,c,s,i){if(!n||!a)return Promise.resolve();var l=BigInt(Math.pow(10,c)),u=z[t].address,o=new e.eth.Contract(G,H),d=Array.from(a.filter((function(e){return null===e.amount})),(function(e){return e.address})),j=Array.from(a.filter((function(e){return null!==e.amount})),(function(e){return e.address})),m=Array.from(a.filter((function(e){return null!==e.amount})),(function(e){return e.amount})),b=[],h=0;if(0!==d.length){if(!r)return Promise.resolve();for(var p=function(e){var t=d.slice(e,e+i);b.push(o.methods.airDropBatch(u,t,r*l/BigInt(Math.pow(10,18))).send({from:n}).then((function(){h+=t.length,s(h)})))},O=0;O<d.length;O+=i)p(O)}if(0!==j.length)for(var x=function(e){var t=j.slice(e,e+i),a=m.slice(e,e+i).map((function(e){return E()(e),e*l/BigInt(Math.pow(10,18))}));b.push(o.methods.airDropIndividual(u,t,a).send({from:n}).then((function(){h+=t.length,s(h)})))},f=0;f<j.length;f+=i)x(f);return Promise.all(b).then(y)}function L(){var e=Object(a.useContext)(v);E()(e);var t=new M.a(e),n=Object(a.useContext)(g),r=Object(a.useState)(""),c=Object(u.a)(r,2),s=c[0],i=c[1],d=Object(a.useState)(""),j=Object(u.a)(d,2),m=j[0],O=j[1],x=Object(a.useState)(BigInt(0)),C=Object(u.a)(x,2),N=C[0],T=C[1],A=Object(a.useState)(""),k=Object(u.a)(A,2),P=k[0],G=k[1],L=Object(a.useState)(BigInt(0)),U=Object(u.a)(L,2),$=U[0],Q=U[1],Z=Object(a.useState)(0),ee=Object(u.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(BigInt(0)),re=Object(u.a)(ae,2),ce=re[0],se=re[1],ie=Object(a.useState)(""),le=Object(u.a)(ie,2),ue=le[0],oe=le[1],de=Object(a.useState)(null),je=Object(u.a)(de,2),me=je[0],be=je[1],he=Object(a.useState)("200"),pe=Object(u.a)(he,2),Oe=pe[0],xe=pe[1],fe=Object(a.useState)(""),ve=Object(u.a)(fe,2),ge=ve[0],ye=ve[1],Ce=Object(a.useState)(null),Ne=Object(u.a)(Ce,2),we=Ne[0],Be=Ne[1],Ie=Object(a.useState)(!1),Se=Object(u.a)(Ie,2),Te=Se[0],Ae=Se[1],ke=Object(a.useState)(!1),Me=Object(u.a)(ke,2),Pe=Me[0],Ee=Me[1],Fe=Object(a.useState)(!1),_e=Object(u.a)(Fe,2),Ve=_e[0],De=_e[1],qe=Object(a.useState)(0),Ke=Object(u.a)(qe,2),We=Ke[0],Xe=Ke[1],ze=Object(a.useState)(""),Ge=Object(u.a)(ze,2),Re=Ge[0],Ye=Ge[1],He=z[te];function Je(){De(!0),function(e,t,n,a){if(!n)return Promise.resolve(0);var r=z[t].address;return new e.eth.Contract(R,r).methods.allowance(n,a).call()}(t,te,n,H).then((function(e){se(BigInt(e)),De(!1)}),y)}function Le(e){ye(e),Be(function(e){var t=[],n=null;return e.replaceAll(","," ").replaceAll("\n"," ").replaceAll('"',"").replaceAll("'","").replaceAll("`","").replaceAll(/  */g," ").trim().split(" ").every((function(e){if(e.startsWith("0x"))return n=new X(e,null),t.push(n),!0;var a=w(e);return!!a&&null!==n&&null===n.amount&&(n.amount=a,!0)}))?t:null}(e))}Object(a.useEffect)((function(){Je(),Ye(String(He.decimal))}),[te,n]);var Ue=null!==we&&we.some((function(e){return null===e.amount})),$e=!me&&Ue;return Object(W.jsxs)(p.a,{className:"mt-4",children:[Object(W.jsx)(f.a,{className:"justify-content-center",children:Object(W.jsx)("h1",{children:"Airdrop"})}),Object(W.jsx)(f.a,{className:"justify-content-center mt-3",children:Object(W.jsxs)(V.a,{hasValidation:!0,children:[Object(W.jsx)(_.a.Control,{as:"textarea",className:"Home__Addresses",value:ge,onChange:function(e){return Le(e.currentTarget.value)},isInvalid:null===we}),Object(W.jsx)(_.a.Control.Feedback,{type:"invalid",children:"Please provide valid addresses with/without amount."})]})}),Object(W.jsxs)(f.a,{className:"justify-content-center mt-3",children:[Object(W.jsx)(h.a,{xs:"12",className:"mt-3",children:Object(W.jsxs)(V.a,{children:[Object(W.jsx)(V.a.Text,{children:"Random addresses quantity"}),Object(W.jsx)(_.a.Control,{value:s,placeholder:"amount",onChange:function(e){return S(e.currentTarget.value,i)}})]})}),Object(W.jsx)(h.a,{xs:"12",md:"6",className:"mt-3",children:Object(W.jsxs)(V.a,{children:[Object(W.jsx)(V.a.Text,{children:"Min amount"}),Object(W.jsx)(_.a.Control,{value:m,placeholder:"amount",onChange:function(e){return I(e.currentTarget.value,O,T)}})]})}),Object(W.jsx)(h.a,{xs:"12",md:"6",className:"mt-3",children:Object(W.jsxs)(V.a,{children:[Object(W.jsx)(V.a.Text,{children:"Max amount"}),Object(W.jsx)(_.a.Control,{value:P,placeholder:"amount",onChange:function(e){return I(e.currentTarget.value,G,Q)}})]})}),Object(W.jsx)(h.a,{xs:"auto",className:"mt-3",children:Object(W.jsx)(b.a,{onClick:function(){E()($&&N);for(var e=[],n=0;n<Number(s);n+=1){var a=t.eth.accounts.create().address,r=BigInt(Math.floor(Number($-N)*Math.random()))+N;e.push("".concat(a," ").concat(B(r,Number(Re))))}Le(e.join("\n"))},disabled:!N||!$||""===s,children:"Generate"})})]}),Object(W.jsxs)(f.a,{className:"justify-content-center mt-3",children:[Object(W.jsx)(h.a,{xs:"auto",children:Object(W.jsx)(F.a,{children:z.map((function(e){var t=e.id,n=e.name;return Object(W.jsx)(K.a,{id:"token-".concat(t),name:"tokens-radio",type:"radio",variant:"outline-primary",value:t,checked:te===t,onChange:function(e){return ne(Number(e.currentTarget.value))},children:n},t)}))})}),Object(W.jsxs)(h.a,{xs:"auto",className:"d-flex align-items-center",children:[Object(W.jsx)(D.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-1 ".concat(Ve?"":"d-none")}),Object(W.jsxs)("p",{className:"m-0",children:[He.address,"\xa0default decimal:\xa0",He.decimal]})]}),Object(W.jsx)("div",{className:"w-100"}),Object(W.jsx)(h.a,{xs:"12",md:"6",className:"mt-3",children:Object(W.jsxs)(V.a,{hasValidation:!0,children:[Object(W.jsx)(V.a.Text,{children:"Default amount"}),Object(W.jsx)(_.a.Control,{value:ue,placeholder:"amount",onChange:function(e){return I(e.currentTarget.value,oe,be)},isInvalid:$e}),Object(W.jsx)(_.a.Control.Feedback,{type:"invalid",children:"Please provide amount for default."})]})}),Object(W.jsx)(h.a,{xs:"12",md:"6",className:"mt-3",children:Object(W.jsxs)(V.a,{children:[Object(W.jsx)(V.a.Text,{children:"Addresses per transaction"}),Object(W.jsx)(_.a.Control,{value:Oe,placeholder:"addresses number",onChange:function(e){return S(e.currentTarget.value,xe)}})]})}),Object(W.jsx)(h.a,{xs:"12",className:"mt-3",children:Object(W.jsxs)(V.a,{children:[Object(W.jsx)(V.a.Text,{children:"Decimal"}),Object(W.jsx)(_.a.Control,{value:Re,placeholder:"decimal",onChange:function(e){var t=e.currentTarget.value;S(t,Ye),"0"===t&&Ye(t)}})]})}),Object(W.jsx)(h.a,{xs:"auto",className:"mt-3",children:Object(W.jsxs)(b.a,{onClick:Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ae(!0),e.prev=1,e.next=4,Y(t,te,n,H,BigInt("115792089237316195423570985008687907853269984665640564039457584007913129639935"));case 4:return e.prev=4,Ae(!1),e.finish(4);case 7:Je();case 8:case"end":return e.stop()}}),e,null,[[1,,4,7]])}))),disabled:Te,className:ce!==BigInt(0)?"d-none":"",children:[Object(W.jsx)(D.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-1 ".concat(Te?"":"d-none")}),"Approve"]})}),Object(W.jsx)(h.a,{xs:"auto",className:"mt-3",children:Object(W.jsxs)(b.a,{variant:"success",onClick:Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Xe(0),Ee(!0),e.prev=2,e.next=5,J(t,te,n,we,me,Number(Re),Xe,Number(Oe));case 5:return e.prev=5,Ee(!1),e.finish(5);case 8:Je();case 9:case"end":return e.stop()}}),e,null,[[2,,5,8]])}))),disabled:null===we||$e||Pe||!we.every((function(e){return t.utils.isAddress(e.address)}))||ce===BigInt(0)||""===Re||""===Oe,children:[Object(W.jsx)(D.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-1 ".concat(Pe?"":"d-none")}),"Airdrop",Object(W.jsxs)("span",{className:Pe?"":"d-none",children:["\xa0",We,"/",null===we||void 0===we?void 0:we.length]})]})})]}),Object(W.jsx)(f.a,{className:"mt-3",children:Object(W.jsx)(h.a,{children:Object(W.jsxs)(q.a,{children:[Object(W.jsx)("thead",{children:Object(W.jsxs)("tr",{children:[Object(W.jsx)("th",{children:"Address"}),Object(W.jsx)("th",{children:"Amount"})]})}),Object(W.jsx)("tbody",{children:we?we.map((function(e){return Object(W.jsxs)("tr",{children:[Object(W.jsxs)("td",{children:[e.address,Object(W.jsx)("span",{className:"ms-4 text-danger ".concat(t.utils.isAddress(e.address)?"d-none":""),children:"Invalid address"})]}),Object(W.jsx)("td",{className:e.amount?"":"text-secondary",children:e.amount?B(e.amount,Number(Re)):me?B(me,Number(Re)):""})]})})):[]})]})})})]})}var U=n(99);n(564);function $(e){var t=e.selects,n=e.groupName,r=e.onChange,c=Object(a.useState)(0),s=Object(u.a)(c,2),i=s[0],l=s[1];return Object(W.jsx)(F.a,{className:"flex-wrap",children:t.map((function(e){var a=e.id,c=e.name;return Object(W.jsx)(K.a,{id:"".concat(n,"-").concat(a),name:"".concat(n,"s-radio"),type:"radio",variant:"outline-primary",value:a,checked:i===a,onChange:function(e){var n=Number(e.currentTarget.value);l(n);var a=t.find((function(e){return e.id===n}));E()(a),r(a.value)},children:c},a)}))})}function Q(e){var t=e.text,n=e.placeholder,r=e.defaultValue,c=e.min,s=e.max,i=e.onChange,l=e.decimal,o=Object(a.useState)(r),d=Object(u.a)(o,2),j=d[0],m=d[1],b=Object(a.useState)(!1),h=Object(u.a)(b,2),p=h[0],O=h[1];function x(e){l&&0!==l?I(e,m,(function(e){null===e||e<c*BigInt(Math.pow(10,18))||null!==s&&s*BigInt(Math.pow(10,18))<=e?(i(null),O(!0)):(i(e*BigInt(Math.pow(10,l))/BigInt(Math.pow(10,18))),O(!1))})):S(e,m,(function(e){null===e||e<c||null!==s&&s<=e?(i(null),O(!0)):(i(e),O(!1))}))}return Object(a.useEffect)((function(){return x(r)}),[r]),Object(W.jsxs)(V.a,{hasValidation:!0,children:[Object(W.jsx)(V.a.Text,{children:t}),Object(W.jsx)(_.a.Control,{value:j,placeholder:n,onChange:function(e){x(e.currentTarget.value)},isInvalid:p})]})}Q.defaultProps={decimal:0};var Z=[{inputs:[{internalType:"address[]",name:"owners",type:"address[]"},{internalType:"uint256",name:"intentionQuality",type:"uint256"},{internalType:"uint256",name:"intention",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256[]",name:"specificValues",type:"uint256[]"},{internalType:"uint256",name:"skin",type:"uint256"}],name:"forgeMaintainer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"owners",type:"address[]"},{internalType:"uint256",name:"intention",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256[]",name:"specificValues",type:"uint256[]"}],name:"forgeCaptainMaintainer",outputs:[],stateMutability:"nonpayable",type:"function"}],ee=[{id:0,value:0,name:"Warship"},{id:1,value:1,name:"Captain"}],te=[{id:0,value:4e4,name:"Purple"},{id:1,value:5e4,name:"Gold"}],ne=[{id:0,value:1,name:"Min"},{id:1,value:2,name:"Mean"},{id:2,value:3,name:"Max"},{id:3,value:4,name:"Random"},{id:4,value:5,name:"Specific"}],ae=[{id:0,name:"exploitation",range:[[10,41],[50,121]],decimal:18},{id:1,name:"exploitation percent",range:[[1,3],[3,6]],decimal:0},{id:2,name:"attack",range:[[400,1e3],[1500,3e3]],decimal:18},{id:3,name:"attack percent",range:[[1,3],[3,6]],decimal:0},{id:4,name:"defense",range:[[100,300],[500,1e3]],decimal:18},{id:5,name:"defense percent",range:[[1,3],[3,6]],decimal:0}],re=[{id:0,name:"race",range:[1,4],decimal:0},{id:1,name:"luck",range:[10,16],decimal:18},{id:2,name:"accuracy",range:[60,81],decimal:18},{id:3,name:"dodge",range:[10,21],decimal:18},{id:4,name:"intelligence",range:[20,26],decimal:18}],ce=[{id:0,name:"Null",value:0},{id:1,name:"OKEX rare",value:1},{id:2,name:"OKEX epic",value:2},{id:3,name:"OKEX association",value:3},{id:4,name:"Fengyun",value:4},{id:5,name:"CMC",value:5},{id:6,name:"OKEX",value:6},{id:7,name:"Peter",value:7},{id:8,name:"Hyper Pay",value:8},{id:9,name:"Coin Wind",value:9},{id:10,name:"Panda Swap",value:10},{id:11,name:"IOTX",value:11},{id:12,name:"MARS",value:12},{id:13,name:"Onto",value:13},{id:14,name:"MAC",value:14},{id:15,name:"Christmas",value:15},{id:16,name:"Wing",value:16},{id:17,name:"OneCash",value:17},{id:18,name:"MOVE",value:18},{id:19,name:"Golff",value:19},{id:20,name:"Bitmart",value:20},{id:21,name:"element",value:21}],se="0x3a9AF5ea13625984EFFBf0cCc1c72580e3e3b7F1";function ie(e,t,n,a,r,c,s,i,l,u){if(!t||!n||s.some((function(e){return!e})))return Promise.resolve();for(var o=new e.eth.Contract(Z,se),d=[],j=0,m=function(e){var m=n.slice(e,e+u);d.push(o.methods.forgeMaintainer(m,a,r,c,s,i).send({from:t}).then((function(){j+=m.length,l(j)})))},b=0;b<n.length;b+=u)m(b);return Promise.all(d).then(y)}function le(e,t,n,a,r,c,s,i){if(!t||!n||c.some((function(e){return!e})))return Promise.resolve();for(var l=new e.eth.Contract(Z,se),u=[],o=0,d=function(e){var d=n.slice(e,e+i);u.push(l.methods.forgeCaptainMaintainer(d,a,r,c).send({from:t}).then((function(){o+=d.length,s(o)})))},j=0;j<n.length;j+=i)d(j);return Promise.all(u).then(y)}function ue(){var e=Object(a.useContext)(v);E()(e);var t=new M.a(e),n=Object(a.useContext)(g),r=Object(a.useState)(0),c=Object(u.a)(r,2),s=c[0],i=c[1],d=Object(a.useState)(4e4),j=Object(u.a)(d,2),m=j[0],O=j[1],x=Object(a.useState)(1),y=Object(u.a)(x,2),C=y[0],N=y[1],w=Object(a.useState)([null,null,null,null,null,null]),B=Object(u.a)(w,2),I=B[0],S=B[1],T=Object(a.useState)(0),A=Object(u.a)(T,2),k=A[0],P=A[1],F=Object(a.useState)(null),K=Object(u.a)(F,2),X=K[0],z=K[1],G=Object(a.useState)(BigInt(50)),R=Object(u.a)(G,2),Y=R[0],H=R[1],J=Object(a.useState)(null),L=Object(u.a)(J,2),Z=L[0],se=L[1],ue=Object(a.useState)(!1),oe=Object(u.a)(ue,2),de=oe[0],je=oe[1],me=Object(a.useState)(0),be=Object(u.a)(me,2),he=be[0],pe=be[1],Oe=5===C&&(0===s&&I.slice(0,6).some((function(e){return null===e}))||1===s&&I.slice(0,5).some((function(e){return null===e})));return Object(W.jsxs)(p.a,{className:"mt-4",children:[Object(W.jsx)(f.a,{className:"justify-content-center",children:Object(W.jsx)("h1",{children:"NFT airdrop"})}),Object(W.jsx)(f.a,{className:"justify-content-center mt-3",children:Object(W.jsxs)(V.a,{hasValidation:!0,children:[Object(W.jsx)(_.a.Control,{as:"textarea",className:"NFT__Addresses",onChange:function(e){return se(function(e){var t=[];return e.replaceAll(","," ").replaceAll("\n"," ").replaceAll('"',"").replaceAll("'","").replaceAll("`","").replaceAll(/  */g," ").trim().split(" ").every((function(e){return!!e.startsWith("0x")&&(t.push(e),!0)}))?t:null}(e.currentTarget.value))},isInvalid:null===Z}),Object(W.jsx)(_.a.Control.Feedback,{type:"invalid",children:"Please provide valid addresses."})]})}),Object(W.jsxs)(f.a,{className:"justify-content-center mt-3",children:[Object(W.jsx)(h.a,{xs:"auto",children:Object(W.jsx)($,{selects:ee,groupName:"nft",onChange:i})}),Object(W.jsx)(h.a,{xs:"auto",className:0===s?"":"d-none",children:Object(W.jsx)($,{selects:te,groupName:"quality",onChange:O})}),Object(W.jsx)(h.a,{xs:"auto",children:Object(W.jsx)($,{selects:ne,groupName:"intention",onChange:N})}),Object(W.jsx)(h.a,{xs:"12",className:0===s?"mt-3":"d-none",children:Object(W.jsx)($,{selects:ce,groupName:"skin",onChange:P})}),Object(W.jsx)("div",{className:"w-100"}),5===C&&0===s&&ae.map((function(e){var t=e.id,n=e.name,a=e.range,r=e.decimal,c=4e4===m?a[0]:a[1],s=Object(u.a)(c,2),i=s[0],l=s[1];return Object(W.jsx)(h.a,{xs:"12",md:"6",className:"mt-3",children:Object(W.jsx)(Q,{text:n,placeholder:"".concat(BigInt(i)," ~ ").concat(BigInt(l)),defaultValue:String(i),min:BigInt(i),max:BigInt(l),decimal:r,onChange:function(e){return S((function(n){var a=Object(U.a)(n);return a[t]=e,a}))}})},t)})),5===C&&1===s&&re.map((function(e){var t=e.id,n=e.name,a=e.range,r=e.decimal,c=Object(u.a)(a,2),s=c[0],i=c[1];return Object(W.jsx)(h.a,{xs:"12",md:"6",className:"mt-3",children:Object(W.jsx)(Q,{text:n,placeholder:"".concat(BigInt(s)," ~ ").concat(BigInt(i)),defaultValue:String(s),min:BigInt(s),max:BigInt(i),decimal:r,onChange:function(e){return S((function(n){var a=Object(U.a)(n);return a[t]=e,a}))}})},t)})),Object(W.jsx)("div",{className:"w-100"}),Object(W.jsx)(h.a,{xs:"12",md:"6",className:"mt-3",children:Object(W.jsx)(Q,{text:"Level",placeholder:"level number",defaultValue:"",min:BigInt(1),max:BigInt(31),onChange:z})}),Object(W.jsx)(h.a,{xs:"12",md:"6",className:"mt-3",children:Object(W.jsx)(Q,{text:"Addresses per transaction",placeholder:"addresses number",defaultValue:"50",min:BigInt(1),max:null,onChange:H})}),Object(W.jsx)(h.a,{xs:"auto",className:"mt-3",children:Object(W.jsxs)(b.a,{variant:"success",onClick:Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(pe(0),je(!0),e.prev=2,0!==s){e.next=8;break}return e.next=6,ie(t,n,Z,m,C,Number(X),5===C?I:[],k,pe,Number(Y));case 6:e.next=10;break;case 8:return e.next=10,le(t,n,Z,C,Number(X),5===C?I.slice(0,5):[],pe,Number(Y));case 10:return e.prev=10,je(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[2,,10,13]])}))),disabled:null===Z||de||!Z.every((function(e){return t.utils.isAddress(e)}))||!X||Oe,children:[Object(W.jsx)(D.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true",className:"me-1 ".concat(de?"":"d-none")}),"Airdrop",Object(W.jsxs)("span",{className:de?"":"d-none",children:["\xa0",he,"/",null===Z||void 0===Z?void 0:Z.length]})]})})]}),Object(W.jsx)(f.a,{className:"mt-3",children:Object(W.jsx)(h.a,{children:Object(W.jsxs)(q.a,{children:[Object(W.jsx)("thead",{children:Object(W.jsx)("tr",{children:Object(W.jsx)("th",{children:"Address"})})}),Object(W.jsx)("tbody",{children:Z?Z.map((function(e){return Object(W.jsx)("tr",{children:Object(W.jsxs)("td",{children:[e,Object(W.jsx)("span",{className:"ms-4 text-danger ".concat(t.utils.isAddress(e)?"d-none":""),children:"Invalid address"})]})})})):[]})]})})})]})}function oe(){return Object(W.jsxs)(T.d,{children:[Object(W.jsx)(T.b,{path:"/nft",children:Object(W.jsx)(ue,{})}),Object(W.jsx)(T.b,{path:"/home",children:Object(W.jsx)(L,{})}),Object(W.jsx)(T.b,{path:"/",children:Object(W.jsx)(T.a,{to:"/home"})})]})}var de=4902,je="0x42";function me(e){return be.apply(this,arguments)}function be(){return(be=Object(o.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.request({method:"wallet_switchEthereumChain",params:[{chainId:je}]});case 3:e.next=10;break;case 5:if(e.prev=5,e.t0=e.catch(0),n=e.t0,(a=n.code)===de){e.next=10;break}return e.abrupt("return",a);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function he(){return(he=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me(t);case 2:if(!(n=e.sent)||n===de){e.next=5;break}return e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,t.request({method:"wallet_addEthereumChain",params:[{chainId:je,chainName:"OKExChain Mainnet",nativeCurrency:{name:"OKT",symbol:"OKT",decimals:18},rpcUrls:["https://exchainrpc.okex.org"],blockExplorerUrls:["https://www.oklink.com/okexchain"]}]});case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(5),e.abrupt("return",!1);case 13:return e.next=15,me(t);case 15:return e.abrupt("return",!e.sent);case 16:case"end":return e.stop()}}),e,null,[[5,10]])})))).apply(this,arguments)}var pe=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),s=Object(u.a)(c,2),i=s[0],l=s[1],o=Object(a.useState)(!1),j=Object(u.a)(o,2),C=j[0],N=j[1];m()().then((function(e){r(e)}),y);var w=Object(a.useCallback)((function(){n&&l(n.selectedAddress)}),[n]);return Object(a.useEffect)((function(){return n?(n.request({method:"eth_accounts"}).then(w,y),n.on("accountsChanged",w),function(){n.removeListener("accountsChanged",w)}):y}),[n,w]),Object(a.useEffect)((function(){n&&function(e){return he.apply(this,arguments)}(n).then(N,y)}),[n]),n?C?i?Object(W.jsx)(v.Provider,{value:n,children:Object(W.jsx)(g.Provider,{value:i,children:Object(W.jsxs)(d.a,{children:[Object(W.jsx)(x.a,{children:Object(W.jsxs)(p.a,{children:[Object(W.jsxs)(O.a,{children:[Object(W.jsx)(d.b,{to:"/home",className:"me-3 text-decoration-none",children:"Airdrop"}),Object(W.jsx)(d.b,{to:"/nft",className:"text-decoration-none",children:"NFT airdrop"})]}),Object(W.jsx)(x.a.Brand,{children:i})]})}),Object(W.jsx)(oe,{})]})})}):Object(W.jsxs)(p.a,{children:[Object(W.jsx)(f.a,{className:"justify-content-center",children:Object(W.jsx)(h.a,{xs:"auto",children:"You must connect to MetaMask to use Celestial dashboard!"})}),Object(W.jsx)(f.a,{className:"justify-content-center",children:Object(W.jsx)(h.a,{xs:"auto",children:Object(W.jsx)(b.a,{onClick:function(){n&&n.request({method:"eth_requestAccounts"}).then(w,y)},children:"Connect"})})})]}):Object(W.jsx)("div",{children:"You are not on chain!"}):Object(W.jsx)("div",{children:"You must installed MetaMask to use Celestial dashboard!"})};s.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(pe,{})}),document.getElementById("root"))}},[[569,1,2]]]);
//# sourceMappingURL=main.cea31115.chunk.js.map