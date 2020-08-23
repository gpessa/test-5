(this["webpackJsonptest-7"]=this["webpackJsonptest-7"]||[]).push([[0],{43:function(e,r,t){e.exports=t.p+"static/media/image-icon.083e2d25.svg"},44:function(e,r,t){e.exports=t.p+"static/media/upload-icon.4fd60528.svg"},45:function(e,r,t){e.exports=t.p+"static/media/loader-icon.791f0d34.svg"},65:function(e,r,t){e.exports=t(92)},70:function(e,r,t){},74:function(e,r){},75:function(e,r){},83:function(e,r){},89:function(e,r){},90:function(e,r){},92:function(e,r,t){"use strict";t.r(r);var a=t(8),n=t.n(a),o=t(39),i=t.n(o),s=(t(70),t(11));var c=s.a.button`
  background-color: var(--orange);
  border: none;
  border-radius: 50%;
  color: var(--white);
  cursor: pointer;
  font-family: var(--fontSanSerif);
  font-size: ${e=>{switch(e.variant){case"secondary":return"13px";default:return"20px"}}};
  height: ${e=>{switch(e.variant){case"secondary":return"80px";default:return"120px"}}};
  text-transform: uppercase;
  width: ${e=>{switch(e.variant){case"secondary":return"80px";default:return"120px"}}};
  &:hover {
    background-color: var(--darkBrown);
  }
`,l=t(43),d=t.n(l);const u=s.b`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.10, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.10, 1);
  }

  50% {
    transform: scale3d(1.13, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,p=s.a.div.attrs(({src:e})=>({style:{backgroundImage:`url(${e})`,animationDuration:Math.random()+"s"}}))`
  background-color: var(--white);
  background-position: center;
  background-size: cover;
  padding-bottom: 100%;
  width: 100%;

  &.jello {
    animation-name: ${u};
    transform-origin: center;
  }
`,m=s.a.div`
  border: 25px solid var(--darkBrown);
  border-radius: 50%;
  overflow: hidden;
`;var g=({src:e})=>{const[r,t]=Object(a.useState)(d.a),o=Object(a.useRef)(null);return Object(a.useEffect)(()=>{const r=new IntersectionObserver(r=>{r.forEach(r=>{var a;(r.intersectionRatio>0||r.isIntersecting)&&(t(e),null===(a=o.current)||void 0===a||a.classList.add("jello"))})},{rootMargin:"70%",threshold:.01});return r.observe(o.current),function(){r.disconnect()}},[e]),n.a.createElement(m,null,n.a.createElement(p,{src:r,ref:o}))};const h=s.b`
	0% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
		transform: translate(-50%, -50%) scale(0.85);
	}
	70% {
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		transform: translate(-50%, -50%) scale(1);
	}
	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		transform: translate(-50%, -50%) scale(0.85);
  }
`,v=s.a.div`
  animation: ${h} 2s linear infinite;
  background-color: var(--white);
  border: 25px solid var(--darkBrown);
  border-radius: 50%;
  display: flex;
  height: 250px;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
`,b=s.a.h3`
  transform: translate(0%, -120%);
  white-space: pre-wrap;
  text-align: center;
  color: var(--orange);
  font-size: 60px;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: absolute;

  @media only screen and (min-width: 768px) {
    transform: translate(-50%, -50%) rotate(-25deg);
    transform-origin: center;
    top: 50%;
    left: 50%;
    white-space: nowrap;
    
    &::after {
      background: var(--black);
      content: '';
      display: block;
      height: 3px;
      width: 100%;
    }
  }
`;var f=({text:e,children:r})=>n.a.createElement(v,null,e&&n.a.createElement(b,null,e),r);const w=s.a.div`
  background-image: url(${({image:e})=>e});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  height: 100%;
  width: 100%;
`,x=Object(s.a)(c)`
  left: 0;
  top: 100%;
  position: absolute;
  transform: translateY(-50%);

  @media only screen and (min-width: 768px) {
    left: -50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`,E=Object(s.a)(c)`
  right: 0;
  top: 100%;
  position: absolute;
  transform: translateY(-50%);

  @media only screen and (min-width: 768px) {
    right: -50%;
    top: 50%;
    transform: translate(50%, -50%);
  }
`;var k=({src:e,onProceed:r,onCancel:t})=>n.a.createElement(f,{text:"Do you want to proceed?"},n.a.createElement(x,{variant:"secondary",onClick:t},"Cancel"),n.a.createElement(w,{image:e}),n.a.createElement(E,{onClick:r},"Proceed")),y=t(44),j=t.n(y);const L=s.a.label`
  background-image: url(${j.a});
  background-position: center;
  background-size: 90%;
  border: 3px dashed var(--brown);
  border-radius: 50%;
  margin: 10px;
  overflow: hidden;
  transition: border-color 0.2s;
  width: 100%;

  &:hover,
  &.UploadContainer--hover {
    border: 6px dashed var(--orange);
  }
`,C=s.a.input`
  bottom: 0;
  cursor: pointer;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;var O=({onChange:e})=>{const r=Object(a.useRef)(null),t=()=>{var e;null===(e=r.current)||void 0===e||e.classList.add("UploadContainer--hover")},o=()=>{var e;null===(e=r.current)||void 0===e||e.classList.remove("UploadContainer--hover")};return Object(a.useEffect)(()=>{const e=r.current;if(null!==e)return e.addEventListener("dragenter",t),e.addEventListener("dragleave",o),e.addEventListener("drop",o),()=>{e.removeEventListener("dragenter",t),e.removeEventListener("dragleave",o),e.removeEventListener("drop",o)}}),n.a.createElement(f,{text:"Drag & Drop an image!"},n.a.createElement(L,{ref:r},n.a.createElement(C,{type:"file",multiple:!1,onChange:r=>{const{files:t}=r.target;null!==t&&e(t[0])},accept:"image/*"})))};const $=s.a.h1`
  background: var(--white);
  border-radius: 40px;
  bottom: 30px;
  display: inline-flex;
  height: 60px;
  line-height: 56px;
  margin: 0;
  padding: 0 41px;
  position: fixed;
  right: 30px;
  z-index: 1;
`,z=Object(s.a)(c)`
  margin-left: 20px;
  margin-right: -10px;
  margin-top: -10px;
`,I=s.a.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;

  & > * {
    width: 41%;
    margin-top: 4%;

    @media only screen and (min-width: 768px) {
      margin: 0;
      box-sizing: border-box;
      width: 22%;
      margin-top: 4%;
    }
  }

`;var R=({results:e,breed:r,onReset:t})=>n.a.createElement("div",null,n.a.createElement($,null,r,n.a.createElement(z,{onClick:t,variant:"secondary"},"cancel")),n.a.createElement(I,null,e.map(e=>n.a.createElement(g,{key:e,src:e})))),P=t(45),B=t.n(P);const S=s.a.div`
  background-image: url(${B.a});
  background-position: center;
  background-size: 90%;
  height: 100%;
  width: 100%;
`;var U=()=>n.a.createElement(f,{text:"Loading the puppies..."},n.a.createElement(S,null)),D=t(46);t(91);var M=function(){var e;return r=>new Promise(async(t,a)=>{e||(e=await D.a());const n=new Image;n.addEventListener("load",(async function(){try{const[{className:r}]=await e.classify(n);t(r)}catch(r){a(r)}}),!1),n.src=r})}();var J=async e=>{const r=await fetch(`https://dog.ceo/api/breed/${e}/images`),{message:t}=await r.json();if(!r.ok)throw new Error(t);return t};var W=()=>{const[e,r]=Object(a.useState)({step:"upload"});return{...e,reset:()=>r(e=>({...e,preview:void 0,step:"upload"})),searchPictures:async()=>{let t,a,n;r(e=>({...e,results:void 0,breed:void 0,step:"loading"}));try{t=await M(e.preview),a=await J(t)}catch({message:o}){n=o}r(e=>({...e,step:n?"error":"result",results:a,error:n,breed:t}))},setImage:e=>r(r=>({...r,preview:URL.createObjectURL(e),step:"preview"}))}};var Y=()=>{const{step:e,error:r,preview:t,results:a,breed:o,setImage:i,searchPictures:s,reset:c}=W();switch(e){case"error":return n.a.createElement(f,{text:r});case"loading":return n.a.createElement(U,null);case"upload":return n.a.createElement(O,{onChange:i});case"preview":return n.a.createElement(k,{src:t,onProceed:s,onCancel:c});case"result":return n.a.createElement(R,{results:a,breed:o,onReset:c})}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})}},[[65,1,2]]]);
//# sourceMappingURL=main.a870155d.chunk.js.map