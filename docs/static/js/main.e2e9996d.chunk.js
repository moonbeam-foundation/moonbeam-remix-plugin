(this["webpackJsonpmoonbeam-remix-plugin"]=this["webpackJsonpmoonbeam-remix-plugin"]||[]).push([[0],{291:function(e,t,n){},294:function(e,t){},307:function(e,t){},313:function(e,t){},331:function(e,t){},333:function(e,t){},347:function(e,t){},350:function(e,t){},358:function(e,t){},362:function(e,t){},365:function(e,t){},369:function(e,t){},373:function(e,t){},376:function(e,t){},423:function(e,t){},432:function(e,t){},434:function(e,t){},466:function(e,t){},468:function(e,t){},469:function(e,t){},474:function(e,t){},476:function(e,t){},483:function(e,t){},485:function(e,t){},496:function(e,t){},498:function(e,t){},510:function(e,t){},513:function(e,t){},518:function(e,t){},524:function(e,t){},532:function(e,t){},545:function(e,t){},560:function(e,t){},613:function(e,t){},668:function(e,t,n){},670:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),r=n(43),i=n.n(r),o=(n(291),n(13)),l=n.n(o),u=n(166),d=n(24),b=n(16),j=n(683),p=n(679),m=n(680),f=n(678),h=n(682),x=n(681),O=n(46),y=n.n(O),v=n(11),g=n.n(v),w=n(10),k=n(14),N=n(85),C=n.n(N),S=n(280),M=n.n(S),A=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],B={provider:"https://rpc.testnet.moonbeam.network"},E={1287:{name:"Moonbase Alpha"},1281:{name:"Moonbeam Dev"}},z=function(e){return E[e]?E[e].name:"Not Moonbeam"},T=A,_=function(){function e(t){Object(w.a)(this,e),this.isConnected=!1,this.isMoonbeamNetwork=!1,this.web3=void 0,this.contracts={erc20:null},this.web3=new C.a(t.provider),this.contracts.erc20=new this.web3.eth.Contract(T)}return Object(k.a)(e,[{key:"getTotalBalance",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.web3.eth.getBalance(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"connectMetaMask",value:function(){var e=Object(d.a)(l.a.mark((function e(t,n,a){var s,c,r,i,o=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=25;break}return e.next=3,M()({mustBeMetaMask:!0});case 3:if(!(s=e.sent)||!s.isMetaMask){e.next=24;break}return e.prev=5,c=new C.a(s),this.web3=c,e.next=10,s.request({method:"eth_requestAccounts"});case 10:if(r=e.sent,!a){e.next=14;break}return e.next=14,s.request({method:"wallet_addEthereumChain",params:[{chainId:"0x507",chainName:"Moonbase Alpha",nativeCurrency:{name:"DEV",symbol:"DEV",decimals:18},rpcUrls:["https://rpc.testnet.moonbeam.network"],blockExplorerUrls:["https://moonbase-blockscout.testnet.moonbeam.network/"]}]});case 14:t&&(t(r),s.on("accountsChanged",function(){var e=Object(d.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>0)){e.next=7;break}return e.next=3,s.request({method:"eth_accounts"});case 3:a=e.sent,t(a),e.next=8;break;case 7:window.location.reload();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s.on("chainChanged",function(){var e=Object(d.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Number(a)),e.next=3,o.connectMetaMask(t,n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),this.isConnected=!0,e.next=22;break;case 18:if(e.prev=18,e.t0=e.catch(5),4001===e.t0.code){e.next=22;break}throw new Error(e.t0.message);case 22:e.next=25;break;case 24:throw new Error("Other ethereum wallet did not support.");case 25:return e.next=27,this.web3.eth.net.getId();case 27:return i=e.sent,E[i]&&(this.isMoonbeamNetwork=!0),e.abrupt("return",{isConnected:this.isConnected,networkId:i});case 30:case"end":return e.stop()}}),e,this,[[5,18]])})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"getAccounts",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.web3.eth.getAccounts());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendTransaction",value:function(){var e=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.web3.eth.sendTransaction(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),n(e.t0.message),e.abrupt("return",void 0);case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),J=n(685),V=n(687),L=n(164),I=n(281),D=function(e){var t=c.a.useState([]),n=Object(b.a)(t,2),s=n[0],r=n[1],i=e.abi,o=e.setArgs;return c.a.useEffect((function(){r(i&&i.inputs?i.inputs:[])}),[i]),Object(a.jsx)(j.a,{className:"Method",children:function(){var e=s.map((function(e,t){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(j.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:e.name})}),Object(a.jsx)(j.a.Control,{type:"text",size:"sm",name:e.name,placeholder:e.type,onChange:function(e){"["===e.target.value[0]?o(e.target.name,JSON.parse(e.target.value)):o(e.target.name,e.target.value)}})]},t.toString())}));return Object(a.jsx)(j.a.Group,{children:e})}()})};function G(e){var t=[];return e.forEach((function(e){"function"===e.type&&t.push(e)})),t}function K(e,t){var n,a=[];e&&(null===(n=e.inputs)||void 0===n||n.forEach((function(e){a.push(t[e.name])})));return a}var F=function(e){var t=c.a.useState(null),n=Object(b.a)(t,2),s=n[0],r=n[1],i=c.a.useState(""),o=Object(b.a)(i,2),u=o[0],m=o[1],h=c.a.useState(""),x=Object(b.a)(h,2),O=x[0],v=x[1],g=c.a.useState({fileName:"",data:{}}),w=Object(b.a)(g,2),k=w[0],N=w[1],C=c.a.useState(""),S=Object(b.a)(C,2),M=S[0],A=S[1],B=c.a.useState(null),E=Object(b.a)(B,2),z=E[0],T=E[1],_=c.a.useState({}),F=Object(b.a)(_,2),P=F[0],H=F[1],R=c.a.useState(""),q=Object(b.a)(R,2),U=q[0],W=q[1],Q=c.a.useState([]),X=Object(b.a)(Q,2),Y=X[0],Z=X[1],$=c.a.useState(!1),ee=Object(b.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(""),se=Object(b.a)(ae,2),ce=se[0],re=se[1],ie=e.moonbeamLib,oe=e.busy,le=e.setBusy,ue=e.addNewContract,de=e.setSelected,be=e.updateBalance,je=e.txValue;function pe(){return me.apply(this,arguments)}function me(){return(me=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le(!0),v("fa-spin"),e.next=4,null===s||void 0===s?void 0:s.call("solidity","compile",u);case 4:v(""),le(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t?t[e].abi:k.data[e].abi;A(e),T(null),H({}),n.forEach((function(e){if("constructor"===e.type){var t,n={};null===(t=e.inputs)||void 0===t||t.forEach((function(e){n[e.name]=""})),H(n),T(e)}})),de({name:e,address:"",abi:G(n)})}function he(){return(he=Object(d.a)(l.a.mark((function e(){var t,n,a,s,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(oe||!ie.isConnected||!ie.isMoonbeamNetwork){e.next=23;break}return le(!0),W(""),e.prev=3,t=new ie.web3.eth.Contract(JSON.parse(JSON.stringify(k.data[M].abi))),e.next=7,ie.getAccounts();case 7:return n=e.sent,a=K(z,P),s={from:n[0],data:t.deploy({data:"0x".concat(k.data[M].evm.bytecode.object),arguments:a}).encodeABI(),gasPrice:1e9,value:je},e.next=12,ie.sendTransaction(s,(function(e){console.log("errmsg",e),Z([{message:e,severity:"error"}])}));case 12:(c=e.sent)&&c.contractAddress&&(W(c.contractAddress),ue({name:M,address:c.contractAddress,abi:G(k.data[M].abi)})),be(n[0]),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(3),console.error(e.t0),"[object Object]"!==(r=e.t0.message&&"param.map is not a function"===e.t0.message?"Constructor Input Missing":e.t0.message?e.t0.message:e.t0.toString())&&(console.log("seterror"),Z([{message:r,severity:e.t0.severity?e.t0.severity:"error"}]));case 22:le(!1);case 23:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}function xe(){var e=k.data,t=k.fileName.split("/")[k.fileName.split("/").length-1],n=Object.keys(e).map((function(e){return Object(a.jsx)("option",{value:e,children:"".concat(e," - ").concat(t)},e)}));return Object(a.jsx)(j.a,{children:Object(a.jsxs)(j.a.Group,{children:[Object(a.jsxs)(j.a.Text,{className:"text-muted",children:[Object(a.jsx)("small",{children:"CONTRACT"}),Object(a.jsx)(f.a,{variant:"link",size:"sm",className:"mt-0 pt-0 float-right",disabled:!k.data[M],onClick:function(){k.data[M]&&y()(JSON.stringify(k.data[M].abi,null,4))},children:Object(a.jsx)("i",{className:"far fa-copy"})}),Object(a.jsx)("div",{style:{fontSize:"0.9em"},className:"float-right",children:"ABI"}),Object(a.jsx)(f.a,{variant:"link",size:"sm",className:"mt-0 pt-0 float-right",disabled:!k.data[M],onClick:function(){k.data[M]&&y()(JSON.stringify(k.data[M].evm.bytecode,null,4))},children:Object(a.jsx)("i",{className:"far fa-copy"})}),Object(a.jsx)("div",{style:{fontSize:"0.9em"},className:"float-right",children:"ByteCode"})]}),Object(a.jsx)(p.a,{children:Object(a.jsx)(j.a.Control,{as:"select",value:M,onChange:function(e){fe(e.target.value)},className:"form-control custom-select",children:n})})]})})}return c.a.useEffect((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(I.createClient)(new L.PluginClient),e.next=3,t.onload();case 3:return t.on("solidity","compilationFinished",(function(e,t,n,a){re(n),a.errors&&(console.log("data.errors",a.errors),Z(a.errors.map((function(e){return{message:e.formattedMessage?e.formattedMessage:JSON.stringify(e),severity:e.severity}})))),a.contracts[e]&&N({fileName:e,data:a.contracts[e]}),fe(Object.keys(a.contracts[e]).length>0?Object.keys(a.contracts[e])[0]:"",a.contracts[e])})),t.on("fileManager","currentFileChanged",(function(e){m(e)})),t.on("fileManager","fileSaved",(function(){te&&pe()})),e.prev=6,e.t0=m,e.next=10,t.call("fileManager","getCurrentFile");case 10:e.t1=e.sent,(0,e.t0)(e.t1),e.next=17;break;case 14:e.prev=14,e.t2=e.catch(6),console.log("Error from IDE : No such file or directory No file selected");case 17:r(t);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsxs)("div",{className:"Compiler",children:[Object(a.jsxs)(j.a.Group,{children:[Object(a.jsx)(p.a,{className:"mb-3",children:Object(a.jsx)(j.a.Check,{type:"checkbox",label:"Auto-Compile (".concat(ce,")"),onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(!te);case 2:case"end":return e.stop()}}),e)})))})}),Object(a.jsxs)(f.a,{variant:"primary",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:case"end":return e.stop()}}),e)}))),block:!0,disabled:""===u||""!==O,children:[Object(a.jsx)("i",{className:"fas fa-sync ".concat(O),style:{marginRight:"0.3em"}}),Object(a.jsxs)("span",{children:["Compile\xa0","".concat(""===u?"<no file selected>":u.split("/")[u.split("/").length-1])]})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)(xe,{}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(J.a.Header,{className:"p-2",children:"Deploy"}),Object(a.jsxs)(J.a.Body,{className:"py-1 px-2",children:[Object(a.jsx)(D,{abi:z,setArgs:function(e,t){P[e]=t}}),Y.map((function(e,t){return console.log("error",e),Object(a.jsx)(V.a,{variant:"error"===e.severity?"danger":"warning",onClose:function(){return Z(Y.filter((function(e,n){return n!==t})))},dismissible:!0,hidden:""===e.message,children:Object(a.jsx)("small",{children:e.message})},e.message)})),Object(a.jsx)(p.a,{className:"mb-3",children:Object(a.jsx)(p.a.Append,{children:Object(a.jsx)(f.a,{variant:"warning",block:!0,size:"sm",disabled:oe||!(ie&&ie.isConnected&&ie.isMoonbeamNetwork)||""===u,onClick:function(){return he.apply(this,arguments)},children:Object(a.jsx)("small",{children:"Deploy"})})})}),Object(a.jsxs)(j.a.Group,{children:[Object(a.jsx)(j.a.Label,{children:"Deployed Contract Address"}),Object(a.jsxs)(p.a,{className:"mb-3",children:[""!==U?Object(a.jsx)(p.a.Append,{children:Object(a.jsx)(f.a,{variant:"link",size:"sm",className:"mt-0 pt-0 float-right",disabled:!U,onClick:function(){y()(U)},children:Object(a.jsx)("i",{className:"far fa-copy"})})}):null,Object(a.jsx)(j.a.Control,{value:U,placeholder:"contract address",size:"sm",readOnly:!0})]}),""===U?Object(a.jsx)(j.a.Text,{className:"text-muted",children:"Deploy your own contract"}):null]})]})]})]})},P=n(684),H=n(686),R=(n(668),"Currently you have no contract instances to interact with."),q={primary:"#007aa6",warning:"#c97539",danger:"#dc3545",lightgreen:"#a2ffb0",darkgreen:"#27443f"};function U(e){switch(e){case"view":case"pure":return"primary";case"nonpayable":return"warning";case"payable":return"danger"}return""}var W=function(e){var t=c.a.useState(""),n=Object(b.a)(t,2),s=n[0],r=n[1],i=c.a.useState(""),o=Object(b.a)(i,2),u=o[0],m=o[1],h=c.a.useState(""),x=Object(b.a)(h,2),O=x[0],v=x[1],g=c.a.useState({}),w=Object(b.a)(g,2),k=w[0],N=w[1],C=e.moonbeamLib,S=e.busy,M=e.setBusy,A=e.abi,B=e.address,E=e.updateBalance,z=e.txValue;return c.a.useEffect((function(){var e,t={};null===(e=A.inputs)||void 0===e||e.forEach((function(e){t[e.name]=""})),N(t)}),[A.inputs]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(D,{abi:A,setArgs:function(e,t){k[e]=t}}),Object(a.jsx)(V.a,{variant:"danger",onClose:function(){return r("")},dismissible:!0,hidden:""===s,children:Object(a.jsx)("small",{children:s})}),Object(a.jsx)(V.a,{variant:"success",onClose:function(){return m("")},dismissible:!0,hidden:""===u,children:Object(a.jsx)(P.a,{children:Object(a.jsxs)(J.a,{style:{border:"0"},children:[Object(a.jsx)(P.a.Toggle,{style:{backgroundColor:q.darkgreen},as:J.a.Header,eventKey:u,className:"p-1  custom-select",children:"Tx Receipt"}),Object(a.jsx)(P.a.Collapse,{style:{backgroundColor:q.darkgreen},eventKey:u,children:Object(a.jsx)(J.a.Body,{className:"py-1 px-2",children:Object(a.jsx)("small",{children:u})})})]})})}),Object(a.jsxs)(p.a,{className:"mb-3",children:[Object(a.jsxs)(p.a.Prepend,{children:[Object(a.jsx)(f.a,{variant:U(A.stateMutability),block:!0,size:"sm",disabled:S||!(C&&C.isConnected&&C.isMoonbeamNetwork),onClick:Object(d.a)(l.a.mark((function e(){var t,n,a,s,c,i,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),n=[],null===(t=A.inputs)||void 0===t||t.forEach((function(e){n.push(k[e.name])})),a=new C.web3.eth.Contract(JSON.parse(JSON.stringify([A])),B),e.next=6,C.getAccounts();case 6:if(s=e.sent,"view"!==A.stateMutability&&"pure"!==A.stateMutability){e.next=25;break}if(e.prev=8,!A.name){e.next=15;break}return e.next=12,(c=a.methods)[A.name].apply(c,n).call({from:s[0],gasPrice:1e9});case 12:e.t0=e.sent,e.next=16;break;case 15:e.t0=null;case 16:"object"===typeof(i=e.t0)?m(JSON.stringify(i,null,4)):v(i),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(8),r(e.t1.message?e.t1.message:e.t1.toString());case 23:e.next=42;break;case 25:if(e.prev=25,!A.name){e.next=32;break}return e.next=29,(o=a.methods)[A.name].apply(o,n).send({from:s[0],gasPrice:1e9,value:z});case 29:e.t2=e.sent,e.next=33;break;case 32:e.t2=null;case 33:u=e.t2,r(""),m(JSON.stringify(u,null,2)),E(s[0]),e.next=42;break;case 39:e.prev=39,e.t3=e.catch(25),r(e.t3.message?e.t3.message:e.t3.toString());case 42:M(!1);case 43:case"end":return e.stop()}}),e,null,[[8,20],[25,39]])}))),children:Object(a.jsx)("small",{children:"view"===A.stateMutability||"pure"===A.stateMutability?"call":"transact"})}),Object(a.jsx)(f.a,{variant:U(A.stateMutability),size:"sm",className:"mt-0 pt-0 float-right",onClick:function(){if(A.name)try{var e,t,n=[];null===(e=A.inputs)||void 0===e||e.forEach((function(e){k[e.name]&&n.push(k[e.name])}));var a=new C.web3.eth.Contract(JSON.parse(JSON.stringify([A])),B);y()((t=a.methods)[A.name].apply(t,n).encodeABI())}catch(s){console.log(s.toString())}},children:Object(a.jsx)("i",{className:"far fa-copy"})})]}),Object(a.jsx)(j.a.Control,{value:O,size:"sm",readOnly:!0,hidden:!("view"===A.stateMutability||"pure"===A.stateMutability)})]})]})},Q=function(e){var t=c.a.useState(!0),n=Object(b.a)(t,2),s=n[0],r=n[1],i=e.moonbeamLib,o=e.busy,l=e.setBusy,u=e.contract,d=e.index,j=e.remove,p=e.updateBalance,m=e.txValue;return Object(a.jsx)(H.a,{in:s,timeout:300,classNames:"zoom",unmountOnExit:!0,onExited:j,children:Object(a.jsxs)(J.a,{className:"mb-2",children:[Object(a.jsxs)(P.a.Toggle,{as:J.a.Header,eventKey:"0",className:"px-2 py-1 form-control custom-select",children:[Object(a.jsx)("strong",{className:"align-middle",children:u.name}),"\xa0",Object(a.jsx)("small",{className:"align-middle",children:"".concat(u.address.substring(0,6),"...").concat(u.address.substring(38))}),Object(a.jsx)(f.a,{variant:"link",size:"sm",className:"float-left align-middle",onClick:function(){y()(u.address)},children:Object(a.jsx)("i",{className:"far fa-copy"})}),Object(a.jsx)(f.a,{className:"float-left align-middle",size:"sm",variant:"link",onClick:function(){r(!1)},children:Object(a.jsx)("i",{className:"fas fa-trash-alt"})})]}),Object(a.jsx)(P.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(J.a.Body,{children:[function(e){var t=(u.abi?u.abi:[]).map((function(t,n){return Object(a.jsx)(P.a,{children:Object(a.jsxs)(J.a,{children:[Object(a.jsx)(P.a.Toggle,{style:{color:"white",backgroundColor:q[U(t.stateMutability)]},as:J.a.Header,eventKey:"Methods_".concat(e.toString(),"_").concat(n.toString()),className:"p-1  custom-select",children:Object(a.jsx)("small",{children:t.name})}),Object(a.jsx)(P.a.Collapse,{eventKey:"Methods_".concat(e.toString(),"_").concat(n.toString()),children:Object(a.jsx)(J.a.Body,{className:"py-1 px-2",children:Object(a.jsx)(W,{moonbeamLib:i,busy:o,setBusy:l,abi:t,address:u.address,updateBalance:p,txValue:m})})})]})},"Methods_A_".concat(e.toString(),"_").concat(n.toString()))}));return Object(a.jsx)(a.Fragment,{children:t})}(d)," "]})})]})})},X=function(e){var t=c.a.useState(""),n=Object(b.a)(t,2),s=n[0],r=n[1],i=c.a.useState(0),o=Object(b.a)(i,2),l=o[0],u=o[1],d=e.moonbeamLib,j=e.busy,p=e.setBusy,m=e.contracts,f=e.updateBalance,h=e.txValue;return c.a.useEffect((function(){u(0),r(R)}),[m,j]),Object(a.jsxs)("div",{className:"SmartContracts",children:[Object(a.jsx)(V.a,{variant:"warning",className:"text-center",hidden:m.length!==l,children:Object(a.jsx)("small",{children:s})}),function(){var e=m.map((function(e,t){return Object(a.jsx)(P.a,{defaultActiveKey:t.toString(),children:Object(a.jsx)(Q,{moonbeamLib:d,busy:j,setBusy:p,contract:e,index:t,remove:function(){u(l+1),r(R)},updateBalance:f,txValue:h},"Contract_".concat(t.toString()))})}));return Object(a.jsx)("div",{children:e})}()]})};function Y(e){var t=c.a.useState(0),n=Object(b.a)(t,2),s=n[0],r=n[1],i=c.a.useState("wei"),o=Object(b.a)(i,2),l=o[0],u=o[1];return c.a.useEffect((function(){e(C.a.utils.toWei(new g.a(s),l))}),[s,l,e]),Object(a.jsxs)(j.a.Group,{children:[Object(a.jsx)(j.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:"Value"})}),Object(a.jsxs)(p.a,{children:[Object(a.jsx)(j.a.Control,{type:"number",size:"sm",name:"Tx Value",placeholder:"0",value:s,onChange:function(e){r(Number(e.target.value))},style:{height:"calc(1.25em + 1rem + 2px)"}}),Object(a.jsx)(p.a.Append,{children:Object(a.jsx)(j.a.Control,{as:"select",value:l,onChange:function(e){var t=function(e){if(["ether","finney","gwei","wei"].includes(e))return e;throw new Error("This is not a valid unit")}(e.target.value);t&&u(t)},style:{marginLeft:"1em"},children:["ether","finney","gwei","wei"].map((function(e){return Object(a.jsx)("option",{children:e},e)}))})})]})]})}var Z=function(){var e=c.a.useState(""),t=Object(b.a)(e,2),n=t[0],s=t[1],r=c.a.useState(""),i=Object(b.a)(r,2),o=i[0],O=i[1],v=c.a.useState("Moonbase Alpha"),w=Object(b.a)(v,2),k=w[0],N=w[1],C=c.a.useState(!1),S=Object(b.a)(C,2),M=S[0],A=S[1],E=c.a.useState(new _(B)),T=Object(b.a)(E,1)[0],J=c.a.useState(""),V=Object(b.a)(J,2),L=V[0],I=V[1],D=c.a.useState([]),G=Object(b.a)(D,2),K=G[0],P=G[1],H=c.a.useState(null),R=Object(b.a)(H,2),q=R[0],U=R[1],W=c.a.useState(new g.a(0)),Q=Object(b.a)(W,2),Z=Q[0],$=Q[1];function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(d.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.next=3,T.connectMetaMask((function(e){s(e[0]),ne(e[0])}),function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(n);case 2:N(z(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t);case 3:a=e.sent,c=a.networkId,N(z(c)),A(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||""===t){e.next=5;break}return e.next=3,T.getTotalBalance(t);case 3:n=e.sent,O(T.web3.utils.fromWei(n.toString()));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e){P(K.concat([e]))}function ce(){return Object(a.jsxs)(j.a.Group,{children:[Object(a.jsx)(j.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:"NETWORK"})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(j.a.Control,{type:"text",placeholder:"0.0",value:k,size:"sm",readOnly:!0})})]})}return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(m.a,{children:[Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(j.a.Group,{children:[Object(a.jsx)(j.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:"ACCOUNT"})}),Object(a.jsxs)(p.a,{children:[n?Object(a.jsx)(p.a.Append,{children:Object(a.jsx)(f.a,{variant:"link",size:"sm",className:"mt-0 pt-0 float-right",disabled:!n,onClick:function(){y()(n)},children:Object(a.jsx)("i",{className:"far fa-copy"})})}):null,Object(a.jsx)(j.a.Control,{type:"text",placeholder:"Account",value:n,size:"sm",readOnly:!0}),Object(a.jsx)(p.a.Append,{children:Object(a.jsx)(h.a,{placement:"left",overlay:Object(a.jsx)(x.a,{id:"overlay-connect",hidden:""!==n,children:"Connect to Wallet"}),children:Object(a.jsx)(f.a,{variant:"warning",block:!0,size:"sm",disabled:M,onClick:function(){return ee()},children:Object(a.jsx)("small",{children:"Connect"})})})})]}),T.isConnected?"Not Moonbeam"===k?Object(a.jsx)("p",{className:"text-center mt-3",children:Object(a.jsxs)("small",{style:{color:"red",padding:"1em"},children:["Connect MetaMask to a Moonbeam Network :"," ",Object(a.jsx)(f.a,{variant:"warning",block:!0,size:"sm",disabled:M,onClick:function(){return ee(!0)},children:"Connect to Moonbase Alpha"}),Object(a.jsx)("a",{target:"_parent",rel:"noreferrer",href:"https://docs.moonbeam.network/getting-started/testnet/metamask/",children:"(How to connect to Moonbeam networks)"})]})}):Object(a.jsx)("p",{className:"text-center mt-3",children:Object(a.jsxs)("small",{style:{color:"green"},children:["Connected to ",k]})}):Object(a.jsx)("p",{className:"text-center mt-3",children:Object(a.jsx)("small",{style:{color:"red"},children:"Please Connect"})})]}),Object(a.jsxs)(j.a.Group,{children:[Object(a.jsx)(j.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:"BALANCE (MOONBEAM)"})}),Object(a.jsx)(p.a,{children:Object(a.jsx)(j.a.Control,{type:"text",placeholder:"0.0",value:o,size:"sm",readOnly:!0})})]}),Object(a.jsx)(ce,{}),Y($)]}),Object(a.jsx)("hr",{}),Object(a.jsx)(F,{moonbeamLib:T,busy:M,setBusy:A,addNewContract:se,setSelected:U,updateBalance:ne,txValue:Z}),Object(a.jsx)("p",{className:"text-center mt-3",children:Object(a.jsx)("small",{children:"OR"})}),Object(a.jsxs)(p.a,{className:"mb-3",children:[Object(a.jsx)(j.a.Control,{value:L,placeholder:"contract address",onChange:function(e){I(e.target.value)},size:"sm",disabled:M||""===n||!q}),Object(a.jsx)(p.a.Append,{children:Object(a.jsx)(h.a,{placement:"left",overlay:Object(a.jsx)(x.a,{id:"overlay-ataddresss",children:"Use deployed Contract address"}),children:Object(a.jsx)(f.a,{variant:"primary",size:"sm",disabled:M||""===n||!q,onClick:function(){A(!0),q&&se(Object(u.a)(Object(u.a)({},q),{},{address:L})),A(!1)},children:Object(a.jsx)("small",{children:"At Address"})})})})]}),Object(a.jsx)("hr",{}),Object(a.jsx)(X,{moonbeamLib:T,busy:M,setBusy:A,contracts:K,updateBalance:ne,txValue:Z})]})})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root"))}},[[670,1,2]]]);
//# sourceMappingURL=main.e2e9996d.chunk.js.map