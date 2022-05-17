(this["webpackJsonpmoonbeam-remix-plugin"]=this["webpackJsonpmoonbeam-remix-plugin"]||[]).push([[0],{291:function(e,t,n){},294:function(e,t){},307:function(e,t){},313:function(e,t){},331:function(e,t){},333:function(e,t){},347:function(e,t){},350:function(e,t){},358:function(e,t){},362:function(e,t){},365:function(e,t){},369:function(e,t){},373:function(e,t){},376:function(e,t){},423:function(e,t){},432:function(e,t){},434:function(e,t){},466:function(e,t){},468:function(e,t){},469:function(e,t){},474:function(e,t){},476:function(e,t){},483:function(e,t){},485:function(e,t){},496:function(e,t){},498:function(e,t){},510:function(e,t){},513:function(e,t){},518:function(e,t){},524:function(e,t){},532:function(e,t){},545:function(e,t){},560:function(e,t){},613:function(e,t){},668:function(e,t,n){},670:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),r=n(43),i=n.n(r),o=(n(291),n(10)),l=n.n(o),u=n(109),d=n(22),b=n(16),p=n(683),m=n(679),j=n(682),f=n(680),h=n(678),x=n(681),O=n(46),y=n.n(O),v=n(12),g=n.n(v),w=n(11),k=n(14),C=n(85),N=n.n(C),M=n(280),S=n.n(M),A=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],B={provider:"https://rpc.api.moonbase.moonbeam.network",explorer:"https://moonbase.moonscan.io"},E={1287:{name:"Moonbase Alpha"},1285:{name:"Moonriver"},1284:{name:"Moonbeam"},1281:{name:"Moonbeam Dev"},1280:{name:"Moonbase Local"}},T=function(e){return E[e]?E[e].name:"Not Moonbeam"},z=A,_={"Moonbase Alpha":{chainId:"0x507",chainName:"Moonbase Alpha",nativeCurrency:{name:"DEV",symbol:"DEV",decimals:18},rpcUrls:["https://rpc.api.moonbase.moonbeam.network"],blockExplorerUrls:["https://moonbase.moonscan.io/"]},Moonriver:{chainId:"0x505",chainName:"Moonriver",nativeCurrency:{name:"MOVR",symbol:"MOVR",decimals:18},rpcUrls:["https://rpc.api.moonriver.moonbeam.network"],blockExplorerUrls:["https://moonriver.moonscan.io/"]},Moonbeam:{chainId:"0x504",chainName:"Moonbeam",nativeCurrency:{name:"GLMR",symbol:"GLMR",decimals:18},rpcUrls:["https://rpc.api.moonbeam.network"],blockExplorerUrls:["https://moonbeam.moonscan.io/"]}},V=function(){function e(t){Object(w.a)(this,e),this.isConnected=!1,this.isMoonbeamNetwork=!1,this.web3=void 0,this.contracts={erc20:null},this.provider=null,this.getProvider=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({mustBeMetaMask:!0});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),this.web3=new N.a(t.provider),this.contracts.erc20=new this.web3.eth.Contract(z),this.provider=this.getProvider()}return Object(k.a)(e,[{key:"getTotalBalance",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.web3.eth.getBalance(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"connectMetaMask",value:function(){var e=Object(d.a)(l.a.mark((function e(t,n,a){var s,c,r,i,o,u=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=26;break}return e.next=3,this.getProvider();case 3:if(!(s=e.sent)||!s.isMetaMask){e.next=25;break}return e.prev=5,c=new N.a(s),this.web3=c,e.next=10,s.request({method:"eth_requestAccounts"});case 10:if(r=e.sent,!a){e.next=15;break}return i=_[a],e.next=15,s.request({method:"wallet_addEthereumChain",params:[i]});case 15:t&&(t(r),s.on("accountsChanged",function(){var e=Object(d.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>0)){e.next=7;break}return e.next=3,s.request({method:"eth_accounts"});case 3:a=e.sent,t(a),e.next=9;break;case 7:u.isConnected=!1,window.location.reload();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),s.on("chainChanged",function(){var e=Object(d.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Number(a)),e.next=3,u.connectMetaMask(t,n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),this.isConnected=!0,e.next=23;break;case 19:if(e.prev=19,e.t0=e.catch(5),4001===e.t0.code){e.next=23;break}throw new Error(e.t0.message);case 23:e.next=26;break;case 25:throw new Error("Other ethereum wallet did not support.");case 26:return e.next=28,this.web3.eth.net.getId();case 28:return o=e.sent,E[o]&&(this.isMoonbeamNetwork=!0),e.abrupt("return",{isConnected:this.isConnected,networkId:o});case 31:case"end":return e.stop()}}),e,this,[[5,19]])})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"getAccounts",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.web3.eth.getAccounts());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendTransaction",value:function(){var e=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.web3.eth.sendTransaction(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),n(e.t0.message),e.abrupt("return",void 0);case 10:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),I=n(685),J=n(687),L=n(165),G=n(281),P=function(e){var t=c.a.useState([]),n=Object(b.a)(t,2),s=n[0],r=n[1],i=e.abi,o=e.setArgs;return c.a.useEffect((function(){r(i&&i.inputs?i.inputs:[])}),[i]),Object(a.jsx)(p.a,{className:"Method",children:function(){var e=s.map((function(e,t){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(p.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:e.name})}),Object(a.jsx)(p.a.Control,{type:"text",size:"sm",name:e.name,placeholder:e.type,onChange:function(e){"["===e.target.value[0]?o(e.target.name,JSON.parse(e.target.value)):o(e.target.name,e.target.value)}})]},t.toString())}));return Object(a.jsx)(p.a.Group,{children:e})}()})};function R(e){var t=[];return e.forEach((function(e){"function"===e.type&&t.push(e)})),t}function D(e,t){var n,a=[];e&&(null===(n=e.inputs)||void 0===n||n.forEach((function(e){a.push(t[e.name])})));return a}var K=function(e){var t=c.a.useState(null),n=Object(b.a)(t,2),s=n[0],r=n[1],i=c.a.useState(""),o=Object(b.a)(i,2),u=o[0],j=o[1],f=c.a.useState(""),x=Object(b.a)(f,2),O=x[0],v=x[1],g=c.a.useState({fileName:"",data:{}}),w=Object(b.a)(g,2),k=w[0],C=w[1],N=c.a.useState(""),M=Object(b.a)(N,2),S=M[0],A=M[1],B=c.a.useState(null),E=Object(b.a)(B,2),T=E[0],z=E[1],_=c.a.useState({}),V=Object(b.a)(_,2),K=V[0],U=V[1],F=c.a.useState(""),q=Object(b.a)(F,2),H=q[0],W=q[1],Q=c.a.useState([]),X=Object(b.a)(Q,2),Y=X[0],Z=X[1],$=c.a.useState(!1),ee=Object(b.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(""),se=Object(b.a)(ae,2),ce=se[0],re=se[1],ie=e.moonbeamLib,oe=e.busy,le=e.setBusy,ue=e.addNewContract,de=e.setSelected,be=e.updateBalance,pe=e.txValue;function me(){return je.apply(this,arguments)}function je(){return(je=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return le(!0),v("fa-spin"),e.next=4,null===s||void 0===s?void 0:s.call("solidity","compile",u);case 4:v(""),le(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=t?t[e].abi:k.data[e].abi;A(e),z(null),U({}),n.forEach((function(e){if("constructor"===e.type){var t,n={};null===(t=e.inputs)||void 0===t||t.forEach((function(e){n[e.name]=""})),U(n),z(e)}})),de({name:e,address:"",abi:R(n)})}function he(){return(he=Object(d.a)(l.a.mark((function e(){var t,n,a,s,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(oe||!ie.isConnected||!ie.isMoonbeamNetwork){e.next=23;break}return le(!0),W(""),e.prev=3,t=new ie.web3.eth.Contract(JSON.parse(JSON.stringify(k.data[S].abi))),e.next=7,ie.getAccounts();case 7:return n=e.sent,a=D(T,K),s={from:n[0],data:t.deploy({data:"0x".concat(k.data[S].evm.bytecode.object),arguments:a}).encodeABI(),gasPrice:1e9,value:pe},e.next=12,ie.sendTransaction(s,(function(e){console.log("errmsg",e),Z([{message:e,severity:"error"}])}));case 12:(c=e.sent)&&c.contractAddress&&(W(c.contractAddress),ue({name:S,address:c.contractAddress,abi:R(k.data[S].abi)})),be(n[0]),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(3),console.error(e.t0),"[object Object]"!==(r=e.t0.message&&"param.map is not a function"===e.t0.message?"Constructor Input Missing":e.t0.message?e.t0.message:e.t0.toString())&&(console.log("seterror"),Z([{message:r,severity:e.t0.severity?e.t0.severity:"error"}]));case 22:le(!1);case 23:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}function xe(){var e=k.data,t=k.fileName.split("/")[k.fileName.split("/").length-1],n=Object.keys(e).map((function(e){return Object(a.jsx)("option",{value:e,children:"".concat(e," - ").concat(t)},e)}));return Object(a.jsx)(p.a,{children:Object(a.jsxs)(p.a.Group,{children:[Object(a.jsxs)(p.a.Text,{className:"text-muted",children:[Object(a.jsx)("small",{children:"CONTRACT"}),Object(a.jsx)(h.a,{variant:"link",size:"sm",className:"mt-0 pt-0 float-right",disabled:!k.data[S],onClick:function(){k.data[S]&&y()(JSON.stringify(k.data[S].abi,null,4))},children:Object(a.jsx)("i",{className:"far fa-copy"})}),Object(a.jsx)("div",{style:{fontSize:"0.9em"},className:"float-right",children:"ABI"}),Object(a.jsx)(h.a,{variant:"link",size:"sm",className:"mt-0 pt-0 float-right",disabled:!k.data[S],onClick:function(){k.data[S]&&y()(JSON.stringify(k.data[S].evm.bytecode,null,4))},children:Object(a.jsx)("i",{className:"far fa-copy"})}),Object(a.jsx)("div",{style:{fontSize:"0.9em"},className:"float-right",children:"ByteCode"})]}),Object(a.jsx)(m.a,{children:Object(a.jsx)(p.a.Control,{as:"select",value:S,onChange:function(e){fe(e.target.value)},className:"form-control custom-select",children:n})})]})})}return c.a.useEffect((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(G.createClient)(new L.PluginClient),e.next=3,t.onload();case 3:return t.on("solidity","compilationFinished",(function(e,t,n,a){re(n),a.errors&&(console.log("data.errors",a.errors),Z(a.errors.map((function(e){return{message:e.formattedMessage?e.formattedMessage:JSON.stringify(e),severity:e.severity}})))),a.contracts[e]&&C({fileName:e,data:a.contracts[e]}),fe(Object.keys(a.contracts[e]).length>0?Object.keys(a.contracts[e])[0]:"",a.contracts[e])})),t.on("fileManager","currentFileChanged",(function(e){j(e)})),t.on("fileManager","fileSaved",(function(){te&&me()})),e.prev=6,e.t0=j,e.next=10,t.call("fileManager","getCurrentFile");case 10:e.t1=e.sent,(0,e.t0)(e.t1),e.next=17;break;case 14:e.prev=14,e.t2=e.catch(6),console.log("Error from IDE : No such file or directory No file selected");case 17:r(t);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsxs)("div",{className:"Compiler",children:[Object(a.jsxs)(p.a.Group,{children:[Object(a.jsx)(m.a,{className:"mb-3",children:Object(a.jsx)(p.a.Check,{type:"checkbox",label:"Auto-Compile (".concat(ce,")"),onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(!te);case 2:case"end":return e.stop()}}),e)})))})}),Object(a.jsxs)(h.a,{variant:"primary",onClick:Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me();case 2:case"end":return e.stop()}}),e)}))),block:!0,disabled:""===u||""!==O,children:[Object(a.jsx)("i",{className:"fas fa-sync ".concat(O),style:{marginRight:"0.3em"}}),Object(a.jsxs)("span",{children:["Compile\xa0","".concat(""===u?"<no file selected>":u.split("/")[u.split("/").length-1])]})]})]}),Object(a.jsx)("hr",{}),Object(a.jsx)(xe,{}),Object(a.jsxs)(I.a,{children:[Object(a.jsx)(I.a.Header,{className:"p-2",children:"Deploy"}),Object(a.jsxs)(I.a.Body,{className:"py-1 px-2",children:[Object(a.jsx)(P,{abi:T,setArgs:function(e,t){K[e]=t}}),Y.map((function(e,t){return console.log("error",e),Object(a.jsx)(J.a,{variant:"error"===e.severity?"danger":"warning",onClose:function(){return Z(Y.filter((function(e,n){return n!==t})))},dismissible:!0,hidden:""===e.message,children:Object(a.jsx)("small",{children:e.message})},e.message)})),Object(a.jsx)(m.a,{className:"mb-3",children:Object(a.jsx)(m.a.Append,{children:Object(a.jsx)(h.a,{variant:"warning",block:!0,size:"sm",disabled:oe||!(ie&&ie.isConnected&&ie.isMoonbeamNetwork)||""===u,onClick:function(){return he.apply(this,arguments)},children:Object(a.jsx)("small",{children:"Deploy"})})})}),Object(a.jsxs)(p.a.Group,{children:[Object(a.jsx)(p.a.Label,{children:"Deployed Contract Address"}),Object(a.jsxs)(m.a,{className:"mb-3",children:[""!==H?Object(a.jsx)(m.a.Append,{children:Object(a.jsx)(h.a,{variant:"link",size:"sm",className:"mt-0 pt-0 float-right",disabled:!H,onClick:function(){y()(H)},children:Object(a.jsx)("i",{className:"far fa-copy"})})}):null,Object(a.jsx)(p.a.Control,{value:H,placeholder:"contract address",size:"sm",readOnly:!0})]}),""===H?Object(a.jsx)(p.a.Text,{className:"text-muted",children:"Deploy your own contract"}):null]})]})]})]})},U=n(684),F=n(686),q=(n(668),"Currently you have no contract instances to interact with."),H={primary:"#007aa6",warning:"#c97539",danger:"#dc3545",lightgreen:"#a2ffb0",darkgreen:"#27443f"};function W(e){switch(e){case"view":case"pure":return"primary";case"nonpayable":return"warning";case"payable":return"danger"}return""}var Q=function(e){var t=c.a.useState(""),n=Object(b.a)(t,2),s=n[0],r=n[1],i=c.a.useState(""),o=Object(b.a)(i,2),u=o[0],j=o[1],f=c.a.useState(""),x=Object(b.a)(f,2),O=x[0],v=x[1],g=c.a.useState({}),w=Object(b.a)(g,2),k=w[0],C=w[1],N=e.moonbeamLib,M=e.busy,S=e.setBusy,A=e.abi,B=e.address,E=e.updateBalance,T=e.txValue;return c.a.useEffect((function(){var e,t={};null===(e=A.inputs)||void 0===e||e.forEach((function(e){t[e.name]=""})),C(t)}),[A.inputs]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P,{abi:A,setArgs:function(e,t){k[e]=t}}),Object(a.jsx)(J.a,{variant:"danger",onClose:function(){return r("")},dismissible:!0,hidden:""===s,children:Object(a.jsx)("small",{children:s})}),Object(a.jsx)(J.a,{variant:"success",onClose:function(){return j("")},dismissible:!0,hidden:""===u,children:Object(a.jsx)(U.a,{children:Object(a.jsxs)(I.a,{style:{border:"0"},children:[Object(a.jsx)(U.a.Toggle,{style:{backgroundColor:H.darkgreen},as:I.a.Header,eventKey:u,className:"p-1  custom-select",children:"Tx Receipt"}),Object(a.jsx)(U.a.Collapse,{style:{backgroundColor:H.darkgreen},eventKey:u,children:Object(a.jsx)(I.a.Body,{className:"py-1 px-2",children:Object(a.jsx)("small",{children:u})})})]})})}),Object(a.jsxs)(m.a,{className:"mb-3",children:[Object(a.jsxs)(m.a.Prepend,{children:[Object(a.jsx)(h.a,{variant:W(A.stateMutability),block:!0,size:"sm",disabled:M||!(N&&N.isConnected&&N.isMoonbeamNetwork),onClick:Object(d.a)(l.a.mark((function e(){var t,n,a,s,c,i,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),n=[],null===(t=A.inputs)||void 0===t||t.forEach((function(e){n.push(k[e.name])})),a=new N.web3.eth.Contract(JSON.parse(JSON.stringify([A])),B),e.next=6,N.getAccounts();case 6:if(s=e.sent,"view"!==A.stateMutability&&"pure"!==A.stateMutability){e.next=25;break}if(e.prev=8,!A.name){e.next=15;break}return e.next=12,(c=a.methods)[A.name].apply(c,n).call({from:s[0],gasPrice:1e9});case 12:e.t0=e.sent,e.next=16;break;case 15:e.t0=null;case 16:"object"===typeof(i=e.t0)?j(JSON.stringify(i,null,4)):v(i),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(8),r(e.t1.message?e.t1.message:e.t1.toString());case 23:e.next=42;break;case 25:if(e.prev=25,!A.name){e.next=32;break}return e.next=29,(o=a.methods)[A.name].apply(o,n).send({from:s[0],gasPrice:1e9,value:T});case 29:e.t2=e.sent,e.next=33;break;case 32:e.t2=null;case 33:u=e.t2,r(""),j(JSON.stringify(u,null,2)),E(s[0]),e.next=42;break;case 39:e.prev=39,e.t3=e.catch(25),r(e.t3.message?e.t3.message:e.t3.toString());case 42:S(!1);case 43:case"end":return e.stop()}}),e,null,[[8,20],[25,39]])}))),children:Object(a.jsx)("small",{children:"view"===A.stateMutability||"pure"===A.stateMutability?"call":"transact"})}),Object(a.jsx)(h.a,{variant:W(A.stateMutability),size:"sm",className:"mt-0 pt-0 float-right",onClick:function(){if(A.name)try{var e,t,n=[];null===(e=A.inputs)||void 0===e||e.forEach((function(e){k[e.name]&&n.push(k[e.name])}));var a=new N.web3.eth.Contract(JSON.parse(JSON.stringify([A])),B);y()((t=a.methods)[A.name].apply(t,n).encodeABI())}catch(s){console.log(s.toString())}},children:Object(a.jsx)("i",{className:"far fa-copy"})})]}),Object(a.jsx)(p.a.Control,{value:O,size:"sm",readOnly:!0,hidden:!("view"===A.stateMutability||"pure"===A.stateMutability)})]})]})},X=function(e){var t=c.a.useState(!0),n=Object(b.a)(t,2),s=n[0],r=n[1],i=e.moonbeamLib,o=e.busy,l=e.setBusy,u=e.contract,d=e.index,p=e.remove,m=e.updateBalance,j=e.txValue;return Object(a.jsx)(F.a,{in:s,timeout:300,classNames:"zoom",unmountOnExit:!0,onExited:p,children:Object(a.jsxs)(I.a,{className:"mb-2",children:[Object(a.jsxs)(U.a.Toggle,{as:I.a.Header,eventKey:"0",className:"px-2 py-1 form-control custom-select",children:[Object(a.jsx)("strong",{className:"align-middle",children:u.name}),"\xa0",Object(a.jsx)("small",{className:"align-middle",children:"".concat(u.address.substring(0,6),"...").concat(u.address.substring(38))}),Object(a.jsx)(h.a,{variant:"link",size:"sm",className:"float-left align-middle",onClick:function(){y()(u.address)},children:Object(a.jsx)("i",{className:"far fa-copy"})}),Object(a.jsx)(h.a,{className:"float-left align-middle",size:"sm",variant:"link",onClick:function(){r(!1)},children:Object(a.jsx)("i",{className:"fas fa-trash-alt"})})]}),Object(a.jsx)(U.a.Collapse,{eventKey:"0",children:Object(a.jsxs)(I.a.Body,{children:[function(e){var t=(u.abi?u.abi:[]).map((function(t,n){return Object(a.jsx)(U.a,{children:Object(a.jsxs)(I.a,{children:[Object(a.jsx)(U.a.Toggle,{style:{color:"white",backgroundColor:H[W(t.stateMutability)]},as:I.a.Header,eventKey:"Methods_".concat(e.toString(),"_").concat(n.toString()),className:"p-1  custom-select",children:Object(a.jsx)("small",{children:t.name})}),Object(a.jsx)(U.a.Collapse,{eventKey:"Methods_".concat(e.toString(),"_").concat(n.toString()),children:Object(a.jsx)(I.a.Body,{className:"py-1 px-2",children:Object(a.jsx)(Q,{moonbeamLib:i,busy:o,setBusy:l,abi:t,address:u.address,updateBalance:m,txValue:j})})})]})},"Methods_A_".concat(e.toString(),"_").concat(n.toString()))}));return Object(a.jsx)(a.Fragment,{children:t})}(d)," "]})})]})})},Y=function(e){var t=c.a.useState(""),n=Object(b.a)(t,2),s=n[0],r=n[1],i=c.a.useState(0),o=Object(b.a)(i,2),l=o[0],u=o[1],d=e.moonbeamLib,p=e.busy,m=e.setBusy,j=e.contracts,f=e.updateBalance,h=e.txValue;return c.a.useEffect((function(){u(0),r(q)}),[j,p]),Object(a.jsxs)("div",{className:"SmartContracts",children:[Object(a.jsx)(J.a,{variant:"warning",className:"text-center",hidden:j.length!==l,children:Object(a.jsx)("small",{children:s})}),function(){var e=j.map((function(e,t){return Object(a.jsx)(U.a,{defaultActiveKey:t.toString(),children:Object(a.jsx)(X,{moonbeamLib:d,busy:p,setBusy:m,contract:e,index:t,remove:function(){u(l+1),r(q)},updateBalance:f,txValue:h},"Contract_".concat(t.toString()))})}));return Object(a.jsx)("div",{children:e})}()]})};function Z(e){var t=c.a.useState(0),n=Object(b.a)(t,2),s=n[0],r=n[1],i=c.a.useState("wei"),o=Object(b.a)(i,2),l=o[0],u=o[1];return c.a.useEffect((function(){e(N.a.utils.toWei(new g.a(s),l))}),[s,l,e]),Object(a.jsxs)(p.a.Group,{children:[Object(a.jsx)(p.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:"Value"})}),Object(a.jsxs)(m.a,{children:[Object(a.jsx)(p.a.Control,{type:"number",size:"sm",name:"Tx Value",placeholder:"0",value:s,onChange:function(e){r(Number(e.target.value))},style:{height:"calc(1.25em + 1rem + 2px)"}}),Object(a.jsx)(m.a.Append,{children:Object(a.jsx)(p.a.Control,{as:"select",value:l,onChange:function(e){var t=function(e){if(["ether","finney","gwei","wei"].includes(e))return e;throw new Error("This is not a valid unit")}(e.target.value);t&&u(t)},style:{marginLeft:"1em"},children:["ether","finney","gwei","wei"].map((function(e){return Object(a.jsx)("option",{children:e},e)}))})})]})]})}var $=["Moonbase Alpha","Moonriver","Moonbeam"],ee=function(){var e=c.a.useState(""),t=Object(b.a)(e,2),n=t[0],r=t[1],i=c.a.useState(""),o=Object(b.a)(i,2),O=o[0],v=o[1],w=c.a.useState("Moonbase Alpha"),k=Object(b.a)(w,2),C=k[0],N=k[1],M=c.a.useState(!1),S=Object(b.a)(M,2),A=S[0],E=S[1],z=c.a.useState(new V(B)),_=Object(b.a)(z,1)[0],I=c.a.useState(!1),J=Object(b.a)(I,2),L=J[0],G=J[1],P=c.a.useState(""),R=Object(b.a)(P,2),D=R[0],U=R[1],F=c.a.useState([]),q=Object(b.a)(F,2),H=q[0],W=q[1],Q=c.a.useState(null),X=Object(b.a)(Q,2),ee=X[0],te=X[1],ne=c.a.useState(new g.a(0)),ae=Object(b.a)(ne,2),se=ae[0],ce=ae[1];function re(e){return ie.apply(this,arguments)}function ie(){return(ie=Object(d.a)(l.a.mark((function e(t){var a,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,_.connectMetaMask((function(e){r(e[0]),oe(e[0])}),function(){var e=Object(d.a)(l.a.mark((function e(a){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe(n);case 2:s=T(a),N("Not Moonbeam"===s?t:s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t);case 3:return a=e.sent,s=a.isConnected,c=a.networkId,E(!1),e.abrupt("return",{isConnected:s,networkId:c});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e){return le.apply(this,arguments)}function le(){return(le=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||""===t){e.next=7;break}return e.next=3,_.getTotalBalance(t);case 3:n=e.sent,v(_.web3.utils.fromWei(n.toString())),e.next=8;break;case 7:v("");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){W(H.concat([e]))}function de(){return Object(a.jsxs)(p.a.Group,{children:[Object(a.jsx)(p.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:"NETWORK"})}),Object(a.jsxs)(m.a.Append,{children:[Object(a.jsx)(p.a.Control,{as:"select",size:"lg",value:C,onChange:function(e){var t=function(e){if($.includes(e))return e;throw new Error("This is not a valid network")}(e.target.value);t&&re(t)},children:$.map((function(e){return Object(a.jsx)("option",{children:e},e)}))}),Object(a.jsx)(m.a.Append,{children:Object(a.jsx)(j.a,{placement:"bottom",overlay:Object(a.jsx)(f.a,{id:"overlay-connect",hidden:""!==n,children:"Connect to Wallet"}),children:Object(a.jsx)(h.a,{variant:"warning",block:!0,size:"sm",disabled:A,onClick:function(){return re(C)},children:Object(a.jsx)("small",{children:"Connect"})})})})]})]})}return Object(s.useEffect)((function(){function e(e){"Not Moonbeam"===e?(N("Moonbase Alpha"),G(!1)):(N(e),G(!0))}function t(){return(t=Object(d.a)(l.a.mark((function t(){var a,s,c,i,o,d,b;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.getProvider();case 2:if(a=t.sent,s=Object(u.a)({},a).networkVersion,c=T(s),n||A){t.next=10;break}return t.next=8,a.request({method:"eth_accounts"});case 8:(i=t.sent)>0&&r(i[0]);case 10:if(_.isConnected||!n){t.next=17;break}return t.next=13,re(c);case 13:o=t.sent,d=o.isConnected,b=o.networkId,d&&e(T(b));case 17:_.isConnected&&n&&e(c);case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()})),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(x.a,{children:[Object(a.jsxs)(p.a,{children:[Object(a.jsxs)(p.a.Group,{children:[Object(a.jsx)(p.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:"ACCOUNT"})}),Object(a.jsxs)(m.a,{children:[n&&C?Object(a.jsx)(m.a.Append,{children:Object(a.jsx)(h.a,{variant:"link",size:"sm",className:"mt-0 pt-0 float-right",disabled:!n,onClick:function(){y()(n)},children:Object(a.jsx)("i",{className:"far fa-copy"})})}):null,Object(a.jsx)(p.a.Control,{type:"text",placeholder:"Account",value:n,size:"sm",readOnly:!0})]}),Object(a.jsx)(de,{}),L?Object(a.jsx)("p",{className:"text-center mt-3",children:Object(a.jsxs)("small",{style:{color:"green"},children:["Connected to ",C]})}):Object(a.jsx)("p",{className:"text-center mt-3",children:Object(a.jsx)("small",{style:{color:"red"},children:"Please Connect"})})]}),Object(a.jsxs)(p.a.Group,{children:[Object(a.jsx)(p.a.Text,{className:"text-muted",children:Object(a.jsx)("small",{children:"BALANCE (MOONBEAM)"})}),Object(a.jsx)(m.a,{children:Object(a.jsx)(p.a.Control,{type:"text",placeholder:"0.0",value:O,size:"sm",readOnly:!0})})]}),Z(ce)]}),Object(a.jsx)("hr",{}),Object(a.jsx)(K,{moonbeamLib:_,busy:A,setBusy:E,addNewContract:ue,setSelected:te,updateBalance:oe,txValue:se}),Object(a.jsx)("p",{className:"text-center mt-3",children:Object(a.jsx)("small",{children:"OR"})}),Object(a.jsxs)(m.a,{className:"mb-3",children:[Object(a.jsx)(p.a.Control,{value:D,placeholder:"contract address",onChange:function(e){U(e.target.value)},size:"sm",disabled:A||""===n||!ee}),Object(a.jsx)(m.a.Append,{children:Object(a.jsx)(j.a,{placement:"left",overlay:Object(a.jsx)(f.a,{id:"overlay-ataddresss",children:"Use deployed Contract address"}),children:Object(a.jsx)(h.a,{variant:"primary",size:"sm",disabled:A||""===n||!ee,onClick:function(){E(!0),ee&&ue(Object(u.a)(Object(u.a)({},ee),{},{address:D})),E(!1)},children:Object(a.jsx)("small",{children:"At Address"})})})})]}),Object(a.jsx)("hr",{}),Object(a.jsx)(Y,{moonbeamLib:_,busy:A,setBusy:E,contracts:H,updateBalance:oe,txValue:se})]})})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(ee,{})}),document.getElementById("root"))}},[[670,1,2]]]);
//# sourceMappingURL=main.df53ea8c.chunk.js.map