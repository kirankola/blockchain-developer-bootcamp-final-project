(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{158:function(e){e.exports=JSON.parse('{"a":{"5777":{"address":"0xB62da4739a9Eb3E2910b1b5950f47A755Dcc9f42"}}}')},189:function(e,t,n){},197:function(e,t){},205:function(e,t){},210:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(28),c=n.n(i),s=(n(189),n(272)),u=n(113),o=n(254),l=n(256),d=n(6),p=Object(o.a)((function(e){return{contanier:{padding:e.spacing(4),display:"flex",justifyContent:"flex-end",gap:e.spacing(1)}}})),j=function(){var e=Object(u.a)(),t=e.activateBrowserWallet,n=e.account,a=e.deactivate,r=e.chainId,i=void 0!==n,c=p();return console.log(i,r),Object(d.jsx)("div",{className:c.contanier,children:Object(d.jsx)("div",{children:i?Object(d.jsx)(l.a,{color:"primary",variant:"contained",onClick:a,children:"disconnect"}):Object(d.jsx)(l.a,{color:"primary",variant:"contained",onClick:t,children:"connect"})})})},b=n(271),y=n(12),O=n(275),m=n(266),g=n(137),h=n(276),f=n(267),x=n(285),v=n(284),T=n(273),S=n(45),R=n(64),C=n(41),M=n(274),w=n(280),I=n(263),P=n(265),q=n(282),A=n(277),F=function(){var e=function(){var e=Object(u.a)().chainId,t=e?R[e]:"5777",n=e?C.b[t].address:T.a.AddressZero;console.log(n);var r=new T.b.Interface(C.a),i=new S.a(n,r),c=Object(v.a)(i,"registerPatient",{transactionName:"register Patient"}),s=c.send,o=c.state,l=Object(a.useState)(o),d=Object(y.a)(l,2);return d[0],d[1],{registerPatient:function(e,t,n,a){return console.log("mmmm"),s(e,t,T.b.formatBytes32String(n),a)},registerPatientState:o}}(),t=e.registerPatient,n=e.registerPatientState,r=Object(x.a)().notifications,i=Object(a.useState)(0),c=Object(y.a)(i,2),s=c[0],o=c[1],p=Object(a.useState)("1-5"),j=Object(y.a)(p,2),b=j[0],O=j[1],m=Object(a.useState)(),g=Object(y.a)(m,2),h=g[0],f=g[1],F=Object(a.useState)(),N=Object(y.a)(F,2),B=N[0],D=N[1],E=Object(a.useState)(!1),k=Object(y.a)(E,2),z=k[0],H=k[1],J=function(){z&&H(!1)};Object(a.useEffect)((function(){r.filter((function(e){return"transactionSucceed"===e.type&&"register Patient"===e.transactionName})).length>0&&!z&&H(!0)}),[r,z]);var W="Mining"===n.status;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(M.a,{value:s,label:"Gender",onChange:function(e){o(e.target.value)},children:[Object(d.jsx)(w.a,{value:0,children:"Male"}),Object(d.jsx)(w.a,{value:1,children:"Female"}),Object(d.jsx)(w.a,{value:2,children:"Other"})]}),Object(d.jsx)(M.a,{value:b,label:"Age",onChange:function(e){O(e.target.value)},children:["1-5","6-10","11-15","16-20","21-25","26-30","31-35","36-40","41-45","46-50","51-55","56-60","61-65","66-70","71-75","76-80","81-85","86-90","91-95","96-100","Above 100"].map((function(e){return Object(d.jsx)(w.a,{value:e,children:e})}))}),Object(d.jsx)(I.a,{placeholder:"City, State, Country",onChange:function(e){D(e.target.value)}}),Object(d.jsx)(I.a,{placeholder:"Type patient address here...",onChange:function(e){f(e.target.value)}}),Object(d.jsx)(l.a,{color:"primary",size:"large",onClick:function(){return t(h,B,b,s)},children:W?Object(d.jsx)(P.a,{size:26}):"Submit"}),Object(d.jsx)(q.a,{open:z,autoHideDuration:5e3,onClose:J,children:Object(d.jsx)(A.a,{onClose:J,severity:"success",children:"Successfully registered patient ".concat(h)})})]})},N=function(){var e=function(){var e=Object(u.a)().chainId,t=e?R[e]:"5777",n=e?C.b[t].address:T.a.AddressZero;console.log(n);var r=new T.b.Interface(C.a),i=new S.a(n,r),c=Object(v.a)(i,"registerRequester",{transactionName:"register Requester"}),s=c.send,o=c.state,l=Object(a.useState)(o),d=Object(y.a)(l,2);return d[0],d[1],{registerRequester:function(e,t,n,a){return s(e,t,T.b.formatBytes32String(n),a)},registerRequesterState:o}}(),t=e.registerRequester,n=e.registerRequesterState,r=Object(x.a)().notifications,i=Object(a.useState)(0),c=Object(y.a)(i,2),s=c[0],o=c[1],p=Object(a.useState)(""),j=Object(y.a)(p,2),b=j[0],O=j[1],m=Object(a.useState)(),g=Object(y.a)(m,2),h=g[0],f=g[1],F=Object(a.useState)(),N=Object(y.a)(F,2),B=N[0],D=N[1],E=Object(a.useState)(!1),k=Object(y.a)(E,2),z=k[0],H=k[1],J=function(){z&&H(!1)};Object(a.useEffect)((function(){r.filter((function(e){return"transactionSucceed"===e.type&&"register Requester"===e.transactionName})).length>0&&!z&&H(!0)}),[r,z]);var W="Mining"===n.status;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(M.a,{value:s,label:"Requestor Type",onChange:function(e){o(e.target.value)},children:[Object(d.jsx)(w.a,{value:0,children:"Company"}),Object(d.jsx)(w.a,{value:1,children:"Doctor"}),Object(d.jsx)(w.a,{value:2,children:"Research Student"})]}),Object(d.jsx)(I.a,{placeholder:"Enter requestor full name",onChange:function(e){O(e.target.value)}}),Object(d.jsx)(I.a,{placeholder:"City, State, Country",onChange:function(e){D(e.target.value)}}),Object(d.jsx)(I.a,{placeholder:"Type requester address here...",onChange:function(e){f(e.target.value)}}),Object(d.jsx)(l.a,{color:"primary",size:"large",onClick:function(){return t(h,s,b,B)},children:W?Object(d.jsx)(P.a,{size:26}):"Submit"}),Object(d.jsx)(q.a,{open:z,autoHideDuration:5e3,onClose:J,children:Object(d.jsx)(A.a,{onClose:J,severity:"success",children:"Successfully registered requester ".concat(h)})})]})},B=Object(o.a)((function(e){return{container:{display:"inline-grid",gridTemplateColumns:"auto auto auto",gap:e.spacing(1),alignItems:"center"}}})),D=function(){var e=B(),t=["patient","requester"],n=Object(a.useState)(t[0]),r=Object(y.a)(n,2),i=r[0],c=r[1];return Object(d.jsx)(O.a,{children:Object(d.jsxs)(g.a,{value:i,children:[Object(d.jsxs)(h.a,{onChange:function(e,t){c(t)},"aria-label":"Admin Manager",children:[Object(d.jsx)(m.a,{label:"Patient Registrations",value:t[0]},t[0]),Object(d.jsx)(m.a,{label:"Requester Registrations",value:t[1]},t[1])]}),Object(d.jsx)(f.a,{value:t[0],children:Object(d.jsx)("div",{className:e.container,children:Object(d.jsx)(F,{})})},t[0]),Object(d.jsx)(f.a,{value:t[1],children:Object(d.jsx)("div",{className:e.container,children:Object(d.jsx)(N,{})})},t[1])]})})},E=function(){var e=function(){var e=Object(u.a)().chainId,t=e?R[e]:"5777",n=e?C.b[t].address:T.a.AddressZero;console.log(n);var r=new T.b.Interface(C.a),i=new S.a(n,r),c=Object(v.a)(i,"createMedicalRecord",{transactionName:"create medical record"}),s=c.send,o=c.state,l=Object(a.useState)(o),d=Object(y.a)(l,2);return d[0],d[1],{createMedicalRecord:function(e,t,n){return console.log(e,t,n),s(e,t,T.b.parseEther(n.toString()))},createMedicalRecordState:o}}(),t=e.createMedicalRecord,n=e.createMedicalRecordState,r=Object(x.a)().notifications,i=Object(a.useState)(0),c=Object(y.a)(i,2),s=c[0],o=c[1],p=Object(a.useState)("0"),j=Object(y.a)(p,2),b=j[0],O=j[1],m=Object(a.useState)("Scan"),g=Object(y.a)(m,2),h=g[0],f=g[1],F=Object(a.useState)(!1),N=Object(y.a)(F,2),B=N[0],D=N[1],E=function(){B&&D(!1)};Object(a.useEffect)((function(){r.filter((function(e){return"transactionSucceed"===e.type&&"create medical record"===e.transactionName})).length>0&&!B&&D(!0)}),[r,B]);var k="Mining"===n.status;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(M.a,{value:h,label:"Medical Record Type",onChange:function(e){f(e.target.value)},children:[Object(d.jsx)(w.a,{value:"Scan",children:"Scan"}),Object(d.jsx)(w.a,{value:"Blood Report",children:"Blood Report"}),Object(d.jsx)(w.a,{value:"Urine Report",children:"Urine Report"})]}),Object(d.jsx)(I.a,{placeholder:"enter IPFSHASH",onChange:function(e){o(e.target.value)}}),Object(d.jsx)(I.a,{placeholder:"enter your price in ether",onChange:function(e){O(e.target.value)}}),Object(d.jsx)(l.a,{color:"primary",size:"large",onClick:function(){return t(s,h,b)},children:k?Object(d.jsx)(P.a,{size:26}):"Submit"}),Object(d.jsx)(q.a,{open:B,autoHideDuration:5e3,onClose:E,children:Object(d.jsx)(A.a,{onClose:E,severity:"success",children:"Successfully created  "})})]})},k=Object(o.a)((function(e){return{container:{display:"inline-grid",gridTemplateColumns:"auto auto auto",gap:e.spacing(1),alignItems:"center"}}})),z=function(){var e=k();return Object(d.jsxs)(O.a,{children:[Object(d.jsx)("h3",{children:"Create Medical Record "}),Object(d.jsx)("div",{className:e.container,children:Object(d.jsx)(E,{})})]})},H=n(294),J=n(281),W=n(74),Z=n(291),G=Object(o.a)((function(e){return{container:{display:"inline-grid",gridTemplateColumns:"auto auto auto",gap:e.spacing(1),alignItems:"center"}}})),U=function(e){var t=e.record,n=Object(a.useState)(!1),r=Object(y.a)(n,2),i=r[0],c=r[1],s=(G(),Object(x.a)().notifications);console.log(t.price);var o=function(){var e=Object(u.a)().chainId,t=e?R[e]:"5777",n=e?C.b[t].address:T.a.AddressZero;console.log(n);var r=new T.b.Interface(C.a),i=new S.a(n,r),c=Object(v.a)(i,"BuyMedicalRecord",{transactionName:"buy Record"}),s=c.send,o=c.state,l=Object(a.useState)(o),d=Object(y.a)(l,2);return d[0],d[1],{BuyMedicalRecord:function(e,t){return s(e,{value:t})},BuyMedicalRecordState:o}}(),p=o.BuyMedicalRecord,j=o.BuyMedicalRecordState,b=function(){i&&c(!1)};Object(a.useEffect)((function(){s.filter((function(e){return"transactionSucceed"===e.type&&"buy Record"===e.transactionName})).length>0&&!i&&c(!0)}),[s,i]);var O="Mining"===j.status;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)(Z.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(d.jsx)(J.a,{component:"th",scope:"row",children:t.id.toString()}),Object(d.jsx)(J.a,{children:t.IPFShash}),Object(d.jsx)(J.a,{children:t.recordType}),Object(d.jsx)(J.a,{children:t.patient}),Object(d.jsx)(J.a,{children:parseFloat(Object(W.c)(t.price.toString(),18))}),Object(d.jsxs)(J.a,{children:[Object(d.jsxs)(l.a,{color:"secondary",onClick:function(){return console.log(t.price.toString()),p(t.id.toString(),t.price.toString())},children:[" ",O?Object(d.jsx)(P.a,{size:26}):"Buy Now"]})," "]})]},t.id),Object(d.jsx)(q.a,{open:i,autoHideDuration:5e3,onClose:b,children:Object(d.jsx)(A.a,{onClose:b,severity:"success",children:"Successfully Purchased  "})})]})},L=n(288),K=n(286),Q=n(290),V=n(287),X=n(289),Y=Object(o.a)((function(e){return{container:{display:"inline-grid",gridTemplateColumns:"auto auto auto",gap:e.spacing(1),alignItems:"center"}}})),$=function(){Y();var e=function(){var e,t=Object(u.a)(),n=(t.account,t.chainId),a=n?R[n]:"5777",r=n?C.b[a].address:T.a.AddressZero,i=new T.b.Interface(C.a),c=null!==(e=Object(H.a)({abi:i,address:r,method:"getMedicalRecords",args:[]}))&&void 0!==e?e:[],s=Object(y.a)(c,1)[0];return console.log(s),s}();return console.log(e),Object(d.jsx)(Q.a,{component:X.a,children:Object(d.jsxs)(L.a,{sx:{minWidth:650},"aria-label":"simple table",children:[Object(d.jsx)(V.a,{children:Object(d.jsxs)(Z.a,{children:[Object(d.jsx)(J.a,{children:"ID"}),Object(d.jsx)(J.a,{children:"IPFSHash"}),Object(d.jsx)(J.a,{children:"Record Type"}),Object(d.jsx)(J.a,{children:"Patient"}),Object(d.jsx)(J.a,{children:"Price"}),Object(d.jsx)(J.a,{children:"Action"})]})}),Object(d.jsx)(K.a,{children:e&&e.map((function(e){return Object(d.jsx)(U,{record:e})}))})]})})},_=function(){var e=["admin","patient","requester"],t=Object(a.useState)(e[0]),n=Object(y.a)(t,2),r=n[0],i=n[1];return Object(d.jsx)("div",{children:Object(d.jsx)(O.a,{children:Object(d.jsxs)(g.a,{value:r,children:[Object(d.jsxs)(h.a,{onChange:function(e,t){i(t)},"aria-label":"Admin Manager",children:[Object(d.jsx)(m.a,{label:"Admin Manager",value:e[0]},e[0]),Object(d.jsx)(m.a,{label:"Patient Management",value:e[1]},e[1]),Object(d.jsx)(m.a,{label:"Requester Management",value:e[2]},e[2])]}),Object(d.jsx)(f.a,{value:e[0],children:Object(d.jsx)(D,{})},e[0]),Object(d.jsx)(f.a,{value:e[1],children:Object(d.jsx)(z,{})},e[1]),Object(d.jsx)(f.a,{value:e[2],children:Object(d.jsx)($,{})},e[2])]})})})},ee=n(158);var te=function(){Object(u.a)().chainId;var e=ee.a[5777].address,t={readOnlyUrls:{1337:"http://localhost:8545"},multicallAddresses:{1337:e},supportedChains:[1337]};return console.log(e,t),Object(d.jsxs)(s.a,{config:t,children:[Object(d.jsx)(j,{}),Object(d.jsx)(b.a,{maxWidth:"md",children:Object(d.jsx)(_,{})})]})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,295)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},ae=n(162);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ae.a,{children:Object(d.jsx)(te,{})})}),document.getElementById("root")),ne()},41:function(e){e.exports=JSON.parse('{"a":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"patient","type":"address"},{"indexed":false,"internalType":"uint256","name":"patientID","type":"uint256"}],"name":"PatientRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"patient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"patient","type":"address"},{"indexed":false,"internalType":"uint256","name":"medicalRecordID","type":"uint256"}],"name":"medicalRecordCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":false,"internalType":"uint256","name":"medicalRecordID","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"medicalRecordPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"requester","type":"address"},{"indexed":false,"internalType":"uint256","name":"requesterID","type":"uint256"}],"name":"requesterRegistered","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"patients","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bytes32","name":"ageRange","type":"bytes32"},{"internalType":"enum PatientRecord.Gender","name":"gender","type":"uint8"},{"internalType":"string","name":"region","type":"string"},{"internalType":"address","name":"userAddress","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"patientsMedicalRecords","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"requesterPurchasedMedicalRecord","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"requestersMedicalRecords","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"patientAddr","type":"address"},{"internalType":"string","name":"region","type":"string"},{"internalType":"bytes32","name":"ageRange","type":"bytes32"},{"internalType":"enum PatientRecord.Gender","name":"gender","type":"uint8"}],"name":"registerPatient","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"requesterAddr","type":"address"},{"internalType":"enum PatientRecord.RequesterType","name":"requesterType","type":"uint8"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"string","name":"region","type":"string"}],"name":"registerRequester","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"IPFShash","type":"string"},{"internalType":"string","name":"recordType","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"createMedicalRecord","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"medicalRecordID","type":"uint256"}],"name":"BuyMedicalRecord","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"patientsCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"requestersCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"medicalRecordsCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"getMedicalRecords","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"IPFShash","type":"string"},{"internalType":"address","name":"patient","type":"address"},{"internalType":"string","name":"recordType","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct PatientRecord.MedicalRecord[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true}],"b":{"5777":{"address":"0xc7c789ff5bAcAC3cc1dC0F3a71be7bfF005b9901"}}}')},64:function(e){e.exports=JSON.parse('{"1337":"5777"}')}},[[210,1,2]]]);
//# sourceMappingURL=main.4876b0de.chunk.js.map